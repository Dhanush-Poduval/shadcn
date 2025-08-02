"use client"
import React from 'react'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'


const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig


function Areachart() {
  return (
    <div>
        <h1>Visitors</h1>
        <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
            <AreaChart accessibilityLayer data={chartData}  >
            <CartesianGrid vertical={false}/>
           <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            
            <ChartTooltip content={<ChartTooltipContent />} />
             <Area type="natural" dataKey="desktop" 
             fill="#c084fc"
             stroke="#9333ea"   
              strokeWidth={2}
             />
             <Area  type="natural" dataKey="mobile"  
             strokeWidth={2}
             fill="#a855f7" // Purple fill
             stroke="#7e22ce" 
             />
            
            </AreaChart>

        </ChartContainer>
    </div>
  )
}

export default Areachart