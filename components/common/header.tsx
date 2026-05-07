"use client";
import { SparkleIcon, HomeIcon, UserIcon, CompassIcon, MenuIcon, XIcon } from "lucide-react"
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

const Logo = () => {
    return <Link href="/" className="flex items-center gap-2 group">
        <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
            <SparkleIcon className="size-4 text-primary-foreground" />
        </div>
        <span className="text-lg font-bold">i<span className="text-purple-600">Built</span>This</span>
    </Link>
}

export default function Header() {
    const isSignedIn = false;
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="wrapper px-6 md:px-12">
                <div className="flex h-16 items-center justify-between">
                    <Logo />

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
                            <HomeIcon className="size-4" />
                            <span>Home</span>
                        </Link>
                        <Link href="/explore" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
                            <CompassIcon className="size-4" />
                            <span>Explore</span>
                        </Link>
                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        {isSignedIn ? (
                            <>
                                <Button asChild>
                                    <Link href="/submit">
                                        <SparkleIcon className="size-4" />
                                        Submit Project
                                    </Link>
                                </Button>
                                <Button variant="ghost">
                                    <UserIcon className="size-4" />
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button variant="ghost">Sign In</Button>
                                <Button>Sign Up</Button>
                            </>
                        )}
                    </div>

                    {/* Mobile Hamburger */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col gap-2 pb-4">
                        <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
                            <HomeIcon className="size-4" />
                            <span>Home</span>
                        </Link>
                        <Link href="/explore" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
                            <CompassIcon className="size-4" />
                            <span>Explore</span>
                        </Link>
                        <div className="flex items-center gap-3 px-3 pt-2">
                            {isSignedIn ? (
                                <>
                                    <Button asChild>
                                        <Link href="/submit" onClick={() => setMenuOpen(false)}>
                                            <SparkleIcon className="size-4" />
                                            Submit Project
                                        </Link>
                                    </Button>
                                    <Button variant="ghost">
                                        <UserIcon className="size-4" />
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button variant="ghost">Sign In</Button>
                                    <Button>Sign Up</Button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}