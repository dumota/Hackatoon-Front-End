import { Divider, LinkContainer, Logo, Sidebar, SLink, SLinkIcon, SLinkLabel, SLinkNotification, SSidebarButton, Stheme, SThemeLabel, SThemeTooggler, SToggleThumb } from "./style";
import { AiOutlineHome, AiOutlineLeft } from 'react-icons/ai'
import { MdLogout } from 'react-icons/md'
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { useState } from "react";

export function SideBar() {

    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

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
                    <SLink href={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {/* if notifications are at 0 or null, do not display */}
                            </>
                        )}
                    </SLink>
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
        label: "login",
        icon: <AiOutlineHome />,
        to: "/login"
    },
    {
        label: "home",
        icon: <AiOutlineHome />,
        to: "/login"
    },
    {
        label: "clientes",
        icon: <AiOutlineHome />,
        to: "/login"
    },
    {
        label: "pesquisas",
        icon: <AiOutlineHome />,
        to: "/login"
    },
]

const secondLinksArray = [
    {
        label: "Logout",
        icon: <MdLogout />
    }
]