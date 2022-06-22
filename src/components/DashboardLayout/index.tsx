
import { ReactNode } from "react"
import { SideBar } from "../SideBar"
import { SLayout, SMain } from "./style"

interface InterfaceProps{
    children: ReactNode
}

export const DahboardLayout = ({children}:InterfaceProps)=>{
    return(
        
        <SLayout>
            <SideBar/>
            <SMain>{children}</SMain>
        </SLayout>
    )
}

