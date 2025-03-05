"use client"
import DesktopNavBar from "@/components/navbar/DesktopNavBar";
import {useMediaQuery} from "react-responsive";
import MobileSideBar from "@/components/navbar/MobileSideBar";

export function MainLayout({children} : {children:React.ReactNode}) {
    const isDesktop = useMediaQuery({
        query: "(min-width:768px)"
    })

    return (
        <div className="flex flex-col max-w-screen min-h-screen bg-background text-foreground">
            {/*Top NavBar*/}
            <header className="hidden md:block sticky top-0 w-full z-40 p-2 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                {isDesktop && <DesktopNavBar />}
            </header>
            <main>
                {!isDesktop && <MobileSideBar />}
                {children}
            </main>
            <footer>
                footer
            </footer>
        </div>
    )
}