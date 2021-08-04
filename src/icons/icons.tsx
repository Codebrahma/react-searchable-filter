import React from 'react'

export const FilterIcon = () => (
  <svg
    aria-hidden='true'
    viewBox='0 0 16 16'
    version='1.1'
    data-view-component='true'
    height='16'
    width='16'
  >
    <path
      fillRule='evenodd'
      d='M.75 3a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H.75zM3 7.75A.75.75 0 013.75 7h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 013 7.75zm3 4a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z'
    />
  </svg>
)

export const CloseIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden='true'
    viewBox='0 0 16 16'
    version='1.1'
    data-view-component='true'
    height='16'
    width='16'
    fill='white'
    className={className}
  >
    <path
      fillRule='evenodd'
      d='M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z'
    />
  </svg>
)
