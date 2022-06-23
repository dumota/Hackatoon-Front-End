import { Divider, LinkContainer, Logo, Sidebar, SLink, SLinkIcon, SLinkLabel, SSidebarButton, Stheme, SThemeLabel, SThemeTooggler, SToggleThumb } from "./style";
import { AiOutlineHome, AiOutlineLeft } from 'react-icons/ai'
import { MdLogout } from 'react-icons/md'
import {BiSearchAlt} from 'react-icons/bi';
import {IoIosPeople} from 'react-icons/io';
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { useState } from "react";


export function SideBar() {

    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

    console.log(theme);



    return (


        <Sidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <Logo>
                <img src="/assets/logo.svg" alt="logo" />
            </Logo>
            <Divider />
            {linksArray.map(({ icon, label, to }) => (
                <LinkContainer key={label} >
                    <Link href={to}>
                        <SLink style={!sidebarOpen ? { width: `fit-content` } : {}}> 
                            <SLinkIcon>{icon}</SLinkIcon>
                            {
                                sidebarOpen && (
                                    <>
                                       <SLinkLabel>{label}</SLinkLabel> 
                                    </>
                                )
                            }
                        </SLink>
                    </Link>
                  

                </LinkContainer>
            ))}
            <Divider />
            {secondLinksArray.map((secondLink) => (
                <LinkContainer key={secondLink.label}>
                    <SLink style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{secondLink.icon}</SLinkIcon>
                        {sidebarOpen && <SLinkLabel>{secondLink.label}</SLinkLabel>}
                    </SLink>
                </LinkContainer>
            ))}
            <Divider />
            <Stheme>

                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeTooggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >

                    <SToggleThumb style={theme === 'dark' ? { right: "1px" } : {}} />
                </SThemeTooggler>
            </Stheme>

        </Sidebar>
    );
}

const linksArray = [
    {
        label: "Dashboard",
        icon: <AiOutlineHome />,
        to: "/dashboard"
    },
    {
        label: "Clientes",
        icon: <IoIosPeople />,
        to: "/cliente"
    },
    {
        label: "Pesquisas",
        icon: <BiSearchAlt />,
        to: "/pesquisa"
    },
    {
        label: "Add cliente",
        icon: <AiOutlineHome />,
        to: "/cliente/criar"
    },
    {
        label: "Add Pesquisa",
        icon: <AiOutlineHome />,
        to: "/pesquisa/criar"
    },
]

const secondLinksArray = [
    {
        label: "Logout",
        icon: <MdLogout />
    }
]