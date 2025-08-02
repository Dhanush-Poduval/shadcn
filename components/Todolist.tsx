'use client'
import React, { useState ,useEffect} from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Calendar } from './ui/calendar'
import { Card, CardTitle } from './ui/card'
import { Checkbox } from './ui/checkbox'



export default function Todolist() {
   const [date, setDate] = React.useState<Date | undefined>(new Date())
   const [checked,setchecked]=useState<boolean[]>([false,false,false,false])

   useEffect(()=>{
    const stored=localStorage.getItem('checked')
    if(stored){
        setchecked(JSON.parse(stored))
    }

   },[])
   useEffect(()=>{
    localStorage.setItem('checked',JSON.stringify(checked))
   },[checked])

   const Handleclicked=(index:number)=>{
       const updated=[...checked]
       updated[index]=!updated[index]
       setchecked(updated)

   }

  return (
   
    <div>
        <div>
            
        </div>
        <ScrollArea className='max-h-[400px] overflow-y-auto flex flex-row gap-4 '>
            {checked.map((ischecked , index)=>(
                <Card key={index}>
                    <div className='flex gap-3 ml-3'>
                        <Checkbox 
                         id={`item-${index}`}
                         checked={ischecked}
                         onCheckedChange={()=>Handleclicked(index)}
                        
                        
                        />
                        <label htmlFor={`item-${index}`}>
                            Task {index+1}
                        </label>
                        
                    </div>
                

               </Card>


            ))}
            
        </ScrollArea>
    </div>
  )
}
