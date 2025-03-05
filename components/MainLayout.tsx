export function MainLayout({children} : {children:React.ReactNode}) {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <header>
                <div>
                    Icon
                </div>
                <div>
                    NavBar
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer>
                footer
            </footer>
        </div>
    )
}