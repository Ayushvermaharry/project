
import { Paper } from '@mui/material';
import React from 'react';

const main = (props) => {
  return (
    <main className='m-2'>
      {props.children}
      {/* <Paper elevation={4}>
        <div className='p-6'>
        
        </div>
      </Paper> */}
    </main>
  )
}

export default main