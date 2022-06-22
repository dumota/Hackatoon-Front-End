import { DahboardLayout } from "../../components/DashboardLayout"
import { SMain } from "../../components/DashboardLayout/style"
import Navbar from "../../components/Navbar"


export default function Dashboard(){
  
    return(
        <>
            <Navbar />
            <DahboardLayout>
                <SMain>
                    <h1>dasshboard</h1>
                </SMain>
            </DahboardLayout>
        </>
    )
}