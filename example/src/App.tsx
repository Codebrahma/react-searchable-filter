import React, { useState } from 'react'

import SearchableFilter, { onSubmitFiltersType } from 'react-searchable-filter'
import 'react-searchable-filter/dist/index.css'
import ReactJson from 'react-json-view'
import './app.css'

import CodebrahmaLogo from './images/codebrahma1.png'
import GithubLogo from './images/github.svg'
import DocsLogo from './images/docs2.png'

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState<onSubmitFiltersType>(
    []
  )
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

  const submitHandler = (filter: onSubmitFiltersType) => {
    setSelectedFilters(filter)
  }
  return (
    <div>
      <div className='header'>
        <img
          src={CodebrahmaLogo}
          alt='codebrahma-logo'
          className='codebrahma-logo'
        />
        <h2 className='title'>React Searchable Filter</h2>
        <div>
          <a
            href='https://github.com/Codebrahma/React-searchable-filter'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={GithubLogo}
              alt='github-logo'
              className='logo'
              title='github'
            />
          </a>
          <img
            src={DocsLogo}
            alt='docs-logo'
            className='logo'
            title='documentation'
          />
        </div>
      </div>
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
            <ReactJson
              src={selectedFilters}
              displayObjectSize={false}
              displayDataTypes={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
