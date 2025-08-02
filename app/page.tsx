
import Areachart from '@/components/Areachart'
import Cardlist from '@/components/Cardlist'
import Chart from '@/components/Chart'
import { ChartRadarDots } from '@/components/Radial'
import Todolist from '@/components/Todolist'
import React from 'react'

function page() {
  return (
    <div className='grid grid-cols-1 lg:grid-col-2 2xl:grid-cols-4 gap-4'>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2'><Chart /></div>
      <div className='bg-primary-foreground  p-4 rounded-lg'><Cardlist title='Popular Content'/></div>
      <div className='bg-primary-foreground  p-4 rounded-lg'><ChartRadarDots /></div>
      <div className='bg-primary-foreground  p-4 rounded-lg'><Todolist /></div>
      <div className='bg-primary-foreground  p-4 rounded-lg lg:col-span-2'><Areachart /></div>
      <div className='bg-primary-foreground  p-4 rounded-lg'><Cardlist title='Transactions'/></div>
     
      
     
      
    </div>
  )
}

export default page