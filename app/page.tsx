
import Areachart from '@/components/Areachart'
import Cardlist from '@/components/Cardlist'
import Chart from '@/components/Chart'
import React from 'react'

function page() {
  return (
    <div className='grid grid-cols-1 lg:grid-col-2 2xl:grid-cols-4 gap-4'>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2'><Chart /></div>
      <div className='bg-primary-foreground  p-4 rounded-lg'><Cardlist title='Popular Content'/></div>
      <div className='bg-primary-foreground  p-4 rounded-lg'>test3</div>
      <div className='bg-primary-foreground  p-4 rounded-lg'>test4</div>
      <div className='bg-primary-foreground  p-4 rounded-lg lg:col-span-2'><Areachart /></div>
      <div className='bg-primary-foreground  p-4 rounded-lg'><Cardlist title='Transactions'/></div>
     
      
     
      
    </div>
  )
}

export default page