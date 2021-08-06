# react-searchable-filter

> Searchable React Filter component

[![NPM](https://img.shields.io/npm/v/react-searchable-filter.svg)](https://www.npmjs.com/package/react-searchable-filter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)[![Netlify Status](https://api.netlify.com/api/v1/badges/246cf76a-5156-4e4f-bb83-c98de91b581f/deploy-status)](https://app.netlify.com/sites/react-searchable-filter/deploys)

<img src="./filter-demo.gif" alt="demo" align="middle" />

## Install

```bash
npm install --save react-searchable-filter-box
```

## Guide and documentation

Read the full Documentation <a href="https://react-searchable-filter.netlify.app/">here</a>.

## Usage

```js
import React from 'react'

import Filter from 'react-searchable-filter'
import 'react-searchable-filter/dist/index.css'

const App = () => {
  const data = [
    {
      filterBy: 'username',
      description: 'filter by username',
      values: ['John', 'Albert', 'Robert']
    },
    {
      filterBy: 'status',
      values: ['finished', 'not-finished', 'pending'],
      description: 'filter by status'
    }
  ]
  return <Filter options={data} placeholder='Filter users' />
}
```

## Demo

Check out the working demo of the <a href="https://react-searchable-filter.netlify.app/demo">react-searchable-filter</a>.

## License

MIT © [ashwinKumar0505](https://github.com/ashwinKumar0505)
