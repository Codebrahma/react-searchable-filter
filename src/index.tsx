/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState, useRef, useEffect, ReactNode } from 'react'
import styles from './index.css'
import { ENTER_KEY, ESCAPE_KEY, UP_ARROW, DOWN_ARROW } from './constants/keys'
import useOnClickOutside from './hooks/useOnClickOutside'
import { FilterIcon, CloseIcon } from './icons/icons'
import useScroll from './hooks/useScroll'

type TOption = {
  filterBy: string
  description?: string
  values: string[]
}

export type onSubmitFiltersType = { filterBy: string; values: string[] }[]

type TFilterField = {
  options: TOption[]
  onSubmit?: (filters: onSubmitFiltersType) => void
  placeholder?: string
  className?: string
  style?: React.CSSProperties
  hoverColor?: string
  inputClassName?: string
  dropdownListClassName?: string
  customFilterIcon?: ReactNode
  customClearIcon?: ReactNode
  optionsListMaxHeight?: number
  editable?: boolean
  onClear?: () => void
}

type TDropdownOptions = {
  value: string
  description: string
}[]

const ReactSearchableFilter: React.FC<TFilterField> = ({
  options,
  onSubmit,
  placeholder = 'Filter',
  className,
  inputClassName,
  dropdownListClassName,
  customFilterIcon,
  customClearIcon,
  optionsListMaxHeight,
  style,
  hoverColor,
  editable = true,
  onClear
}) => {
  const [inputValue, setInputValue] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [hoverIndex, setHoverIndex] = useState(-1)
  const [IsOptionsPositionedTop, setIsOptionsPositionedTop] = useState(false)

  const defaultDropdownOptions = options.map((option) => ({
    value: option.filterBy + ':',
    description: option?.description || ''
  }))
  const [dropdownOptions, setDropdownOptions] = useState<TDropdownOptions>(
    defaultDropdownOptions
  )

  const filterFieldRef = useRef(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const optionsListRef = useRef<HTMLUListElement>(null)

  const optionsMaxHeight = optionsListMaxHeight || 200
  const optionHoverColor = hoverColor || '#0d66d6'

  let optionsListStyles: React.CSSProperties = {}

  useEffect(() => {
    const optionsContainerElement: any = dropdownRef.current

    const offsetBottom =
      window.innerHeight -
      optionsContainerElement?.offsetParent?.getBoundingClientRect().top

    // Position the options container top or bottom based on the space available
    if (
      optionsMaxHeight > offsetBottom &&
      optionsContainerElement?.offsetParent?.getBoundingClientRect().top >
        offsetBottom
    ) {
      setIsOptionsPositionedTop(true)
    } else {
      setIsOptionsPositionedTop(false)
    }
  }, [showDropdown, optionsMaxHeight])

  if (IsOptionsPositionedTop)
    optionsListStyles = {
      bottom: '100%',
      marginBottom: '5px'
    }
  else
    optionsListStyles = {
      top: '100%',
      marginTop: '5px'
    }

  const splittedInputValues = inputValue.split(' ')
  const currentFilterValue = splittedInputValues[splittedInputValues.length - 1]

  const selectedFilters =
    inputValue[inputValue.length - 1] === ':'
      ? splittedInputValues.slice(0, splittedInputValues.length - 1)
      : splittedInputValues

  const filteredOptions = dropdownOptions.filter((option) =>
    option.value.startsWith(currentFilterValue)
  )

  const updateOptionsAsFilterValues = (filterByValue: string) => {
    const filteredValuesByKey = options.find(
      (option) => option.filterBy === filterByValue
    )?.values
    if (filteredValuesByKey) {
      setDropdownOptions(
        filteredValuesByKey
          .filter((value) => {
            // check for redunant filter values
            return selectedFilters.indexOf(filterByValue + ':' + value) === -1
          })
          .map((currentFilterValue) => ({
            value: filterByValue + ':' + currentFilterValue,
            description: ''
          }))
      )
    }
    setHoverIndex(-1)
  }

  const updateOptionsAsFilterKeys = () => {
    setDropdownOptions(
      options.map((option) => ({
        value: option.filterBy + ':',
        description: option?.description || ''
      }))
    )
    setHoverIndex(-1)
  }

  const updateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentInputValue = e.target.value
    setInputValue(e.target.value)

    const splittedValues = currentInputValue.split(' ')
    const lastInputValue = splittedValues[splittedValues.length - 1]

    if (lastInputValue.includes(':')) {
      // Removing the semi colon and splitting the string

      // Picking out the last value
      const colonIndex = lastInputValue.indexOf(':')
      updateOptionsAsFilterValues(lastInputValue.slice(0, colonIndex))
    } else {
      updateOptionsAsFilterKeys()
    }
  }

  const optionSelectHandler = (optionValue: string) => {
    const lastSpaceCharIndex = inputValue.lastIndexOf(' ')
    const isFilterKeysAsOptions = optionValue[optionValue.length - 1] === ':'
    const valueToBeReplaced = isFilterKeysAsOptions
      ? optionValue
      : optionValue + ' '

    // Update the options to show either keys or valyes
    if (isFilterKeysAsOptions) {
      updateOptionsAsFilterValues(optionValue.replace(':', ''))
    } else {
      updateOptionsAsFilterKeys()
    }
    // Update only the last word in the search Text
    if (lastSpaceCharIndex === -1) {
      setInputValue(valueToBeReplaced)
    } else {
      setInputValue(
        inputValue.slice(0, lastSpaceCharIndex + 1) + valueToBeReplaced
      )
    }
    inputRef.current?.focus()
  }

  useOnClickOutside(filterFieldRef, () => {
    setHoverIndex(-1)
    setShowDropdown(false)
  })

  useScroll(hoverIndex, dropdownRef, optionsListRef)

  const showSelectedFiltersChecker = () => {
    const isKeysAsoptions = !currentFilterValue.includes(':')

    // If dropdown list shows filter keys, the selected filters will not be shown
    return selectedFilters.length > 1 && isKeysAsoptions
  }

  const submitFiltersHandler = () => {
    setShowDropdown(false)

    if (onSubmit) {
      const filtersByKeys: { filterBy: string; values: string[] }[] = []

      selectedFilters.forEach((filter) => {
        const [key, value] = filter.split(':')

        const filterIndex = filtersByKeys.findIndex(
          (entry) => entry.filterBy === key
        )

        if (filterIndex !== -1) {
          filtersByKeys[filterIndex].values.push(value)
        } else {
          if (key.length === 0) return
          filtersByKeys.push({
            filterBy: key,
            values: [value]
          })
        }
      })
      onSubmit(filtersByKeys)
    }
  }

  const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const optionsCount = dropdownOptions.length
    switch (e.keyCode) {
      case UP_ARROW: {
        if (hoverIndex <= 0) {
          if (hoverIndex === 0 && showSelectedFiltersChecker()) {
            setHoverIndex(-1)
          } else setHoverIndex(optionsCount - 1)
        } else {
          setHoverIndex(hoverIndex - 1)
        }
        document.body.style.pointerEvents = 'none'

        break
      }
      case DOWN_ARROW: {
        if (hoverIndex === optionsCount - 1) {
          if (showSelectedFiltersChecker()) {
            setHoverIndex(-1)
          } else setHoverIndex(0)
        } else {
          setHoverIndex(hoverIndex + 1)
        }
        document.body.style.pointerEvents = 'none'

        break
      }
      case ESCAPE_KEY: {
        setShowDropdown(false)
        inputRef?.current?.blur()
        break
      }
      case ENTER_KEY: {
        if (hoverIndex < 0) {
          if (!showSelectedFiltersChecker()) return
          submitFiltersHandler()
        } else {
          const selectedOption = filteredOptions[hoverIndex].value
          optionSelectHandler(selectedOption)
        }
        break
      }
      default: {
        break
      }
    }
  }

  const clearInputField = () => {
    if (onClear) onClear()
    setInputValue('')
    inputRef.current?.focus()
  }

  useEffect(() => {
    document.addEventListener('mousemove', () => {
      if (document.activeElement === inputRef.current) {
        document.body.style.pointerEvents = 'auto'
      }
    })
    return document.removeEventListener('mousemove', () => {
      if (document.activeElement === inputRef.current) {
        document.body.style.pointerEvents = 'auto'
      }
    })
  }, [])

  return (
    <div
      className={`${styles.filterFieldContainer} ${className}`}
      ref={filterFieldRef}
      style={style}
    >
      <div className={styles.filterIcon}>
        {customFilterIcon || <FilterIcon />}
      </div>
      <input
        className={`${styles.filterInputField} ${inputClassName}`}
        onChange={updateInputValue}
        value={inputValue}
        onKeyDown={keyHandler}
        onClick={() => setShowDropdown(true)}
        ref={inputRef}
        placeholder={placeholder}
        style={{ cursor: editable ? 'text' : 'default' }}
        readOnly={!editable}
      />
      <div className={styles.clearIconContainer} onClick={clearInputField}>
        {customClearIcon || <CloseIcon className={styles.clearIcon} />}
      </div>
      <div
        className={`${styles.filterOptionsContainer} ${dropdownListClassName}`}
        style={{
          visibility: showDropdown ? 'visible' : 'hidden',
          opacity: showDropdown ? 1 : 0,
          ...optionsListStyles
        }}
      >
        <div
          className={styles.optionsList}
          style={{ maxHeight: showDropdown ? optionsMaxHeight : 0 }}
          ref={dropdownRef}
        >
          {filteredOptions.length === 0 ? (
            <div className={styles.alternateText}>
              Sorry no related filter available
            </div>
          ) : (
            <div>
              <div className={styles.filterOptionsHeader}>
                {showSelectedFiltersChecker() && (
                  <div
                    className={styles.selectedFilters}
                    onClick={submitFiltersHandler}
                    style={
                      hoverIndex === -1
                        ? { backgroundColor: optionHoverColor }
                        : {}
                    }
                    onMouseEnter={() => setHoverIndex(-1)}
                  >
                    <span
                      style={{
                        color: hoverIndex === -1 ? 'white' : '#6a737d'
                      }}
                    >
                      {selectedFilters.join(' ')}
                    </span>
                    <span
                      style={{
                        color: hoverIndex === -1 ? 'white' : '#24292E'
                      }}
                    >
                      - submit
                    </span>
                  </div>
                )}
                <div className={styles.headerTitle}>Available Filters</div>
              </div>
              <ul className={styles.filterOptionsList}>
                {filteredOptions.map((option, index) => {
                  return (
                    <li
                      className={styles.filterOption}
                      style={
                        hoverIndex === index
                          ? { backgroundColor: optionHoverColor }
                          : {}
                      }
                      onClick={() => optionSelectHandler(option.value)}
                      key={option.value}
                      onMouseOver={() => setHoverIndex(index)}
                    >
                      <span
                        style={{
                          color: hoverIndex === index ? 'white' : '#24292E'
                        }}
                      >
                        {option.value}
                      </span>
                      <span
                        className={styles.optionDescription}
                        style={{
                          color: hoverIndex === index ? 'white' : '#6a737d'
                        }}
                      >
                        {option.description}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReactSearchableFilter
