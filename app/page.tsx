
import React from 'react'

function page() {
  return (
    <div className='grid grid-cols-1 lg:grid-col-2 2xl:grid-cols-4 gap-4'>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2'>test1</div>
      <div className='bg-primary-foreground  p-4 rounded-lg'>test2</div>
      <div className='bg-primary-foreground  p-4 rounded-lg'>test3</div>
      <div className='bg-primary-foreground  p-4 rounded-lg'>test4</div>
      <div className='bg-primary-foreground  p-4 rounded-lg lg:col-span-2'>test5</div>
      <div className='bg-primary-foreground  p-4 rounded-lg'>test6</div>
      
     
      
    </div>
  )
}

export default page