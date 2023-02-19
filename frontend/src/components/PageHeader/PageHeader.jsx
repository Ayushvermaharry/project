import React from 'react'

const PageHeader = (props) => {
  return (
    <div className='mb-4 text-left text-gray-800 '>
        <h1 className='inline-flex text-base font-bold font-display md:text-lg'>{props.PageName}</h1>
    </div>
  )
}

export default PageHeader
