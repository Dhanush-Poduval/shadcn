import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from 'lucide-react'
import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarSeparator } from './ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuItem } from './ui/dropdown-menu'
import { DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Collapsible } from './ui/collapsible'
import { CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'


const items=[
    {
    title:"Home",
    url:'/',
    icon:Home
    },
    {
        title:"Inbox",
        url:'/',
        icon:Inbox
    },
    {
        title:"Calendar",
        url:'/',
        icon:Calendar
    },
    {
        title:"Search",
        url:'/',
        icon:Search
    },
    {
        title:"Settings",
        url:'/',
        icon:Settings
    }
]

async function AppSidebar() {
    
  return(
   
    <Sidebar collapsible='icon'>
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="/">
                       <Image src="https://avatars.githubusercontent.com/u/71214249?v=4" alt="Logo" width={20} height={20}/>
                       <span>Dhanush</span>
                        
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map(item=>(
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url}>
                                      <item.icon />
                                       <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                                {item.title=="Inbox" && (
                                    <SidebarMenuBadge>
                                        26
                                    </SidebarMenuBadge>
                                )}
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>

            </SidebarGroup>
            <Collapsible>
                <SidebarGroup>
                    <SidebarGroupLabel asChild>
                        <CollapsibleTrigger>
                         Projects
                         <ChevronDown className='ml-auto'/>
                        </CollapsibleTrigger>
                       
                    </SidebarGroupLabel>
                    <CollapsibleContent>
                       <SidebarGroupContent>
                        
                        <SidebarMenu>
                            <SidebarMenuSub>
                                 <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/">
                                    <Projector />
                                    See all projects
                                    </Link>
                                    
                                </SidebarMenuButton>

                            </SidebarMenuItem>
                                
                            </SidebarMenuSub>
                           
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuSub>
                                 <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/">
                                    <Plus />
                                    Add project
                                    </Link>
                                    
                                </SidebarMenuButton>

                            </SidebarMenuItem>

                            </SidebarMenuSub>
                           
                        </SidebarMenu>
                    </SidebarGroupContent>
                    
                    </CollapsibleContent>
                    
                </SidebarGroup>
             


            </Collapsible>
            
        </SidebarContent>
        <SidebarFooter>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuButton >
                       <User2 />Jhon Doe <ChevronUp className='ml-auto'/>
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuItem>
                        Account
                    </DropdownMenuItem>
                     <DropdownMenuItem>
                        Sign in
                    </DropdownMenuItem>
                     <DropdownMenuItem>
                        Sign out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarFooter>

    </Sidebar>
  )
}

export default AppSidebar