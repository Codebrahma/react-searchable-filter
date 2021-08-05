# react-searchable-filter

> Searchable React Filter component

[![NPM](https://img.shields.io/npm/v/react-searchable-filter.svg)](https://www.npmjs.com/package/react-searchable-filter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-searchable-filter-box
```

## Usage

```tsx
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

## License

MIT © [ashwinKumar0505](https://github.com/ashwinKumar0505)
