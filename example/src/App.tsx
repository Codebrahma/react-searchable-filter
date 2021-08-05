import React from 'react'

import SearchableFilter from 'react-searchable-filter'
import 'react-searchable-filter/dist/index.css'
import './app.css'

import CodebrahmaLogo from './images/codebrahma1.png'
import GithubLogo from './images/github.svg'
import DocsLogo from './images/docs2.png'

const App = () => {
  const filterOptions = [
    {
      filterBy: 'username',
      description: 'filter by username',
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
      filterBy: 'age',
      values: ['20', '22', '30', '35'],
      description: 'filter by age'
    },
    {
      filterBy: 'status',
      values: ['finished', 'not-finished', 'pending'],
      description: 'filter by status'
    }
  ]
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
          <a href='https://github.com/Codebrahma/React Searchable Filter'>
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
        <SearchableFilter
          options={filterOptions}
          placeholder='Filter Notifications'
          onSubmit={(data) => console.log(data)}
        />
      </div>
    </div>
  )
}

export default App
