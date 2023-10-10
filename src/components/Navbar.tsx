export default function Navbar({ children, }: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col drop-shadow-xl ">
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-sand-300 text-sm py-4">
                <nav
                    className="max-w-[105rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
                    aria-label="Global"
                >
                    <a className="flex-none text-xl font-semibold text-black" href="/">
                        Blogify
                    </a>
                    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
                        <a className="font-medium text-black" href="/auth">
                            Admin Panel
                        </a>
                    </div>
                </nav>
            </header>

            <header>
                {children}
            </header>
        </div>
    );
}
