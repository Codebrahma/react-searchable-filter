import React, { useState } from 'react'

import SearchableFilter from 'react-searchable-filter'
import 'react-searchable-filter/dist/index.css'
import './demo.css'

const Demo = () => {
  const [selectedFilters, setSelectedFilters] = useState([])
  const filterOptions = [
    {
      filterBy: 'is',
      description: 'filter by status or discussion type',
      values: [
        'read',
        'unread',
        'done',
        'commit',
        'discussion',
        'team-discussion'
      ]
    },
    {
      filterBy: 'repo',
      description: 'filter by Repository',
      values: ['react-select', 'react-dropdown', 'popover', 'input', 'combobox']
    },
    {
      filterBy: 'author',
      description: 'filter by author',
      values: [
        'John',
        'Albert',
        'Robert',
        'Doss',
        'Marry',
        'Racheal',
        'Joe',
        'Monika',
        'Chandler'
      ]
    },
    {
      filterBy: 'reason',
      description: 'filter by reason',
      values: ['assign', 'author', 'comment', 'invitation', 'manual', 'mention']
    }
  ]

  const submitHandler = (filter) => {
    setSelectedFilters(filter)
  }

  if (typeof document !== 'undefined') {
    const ReactJson = require('react-json-view').default
    return (
      <div className='container'>
        <div className='filter-outer-container'>
          <p className='sub-title'>Searchable Filter</p>
          <SearchableFilter
            options={filterOptions}
            placeholder='Filter Notifications'
            onSubmit={submitHandler}
            style={{ width: '100%' }}
            className='filter-field'
          />
        </div>
        <div className='output-container'>
          <p className='sub-title'>
            Output{' '}
            <span style={{ color: '#5F5E6D' }}>
              (After Filters are Submitted)
            </span>
          </p>
          <div className='json-view-container'>
            {typeof document !== 'undefined' && (
              <ReactJson
                src={selectedFilters}
                displayObjectSize={false}
                displayDataTypes={false}
                style={{
                  fontSize: 14
                }}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
  return null
}

export default Demo
