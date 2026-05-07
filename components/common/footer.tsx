import { SparkleIcon, HomeIcon, CompassIcon, PhoneIcon, MailIcon } from "lucide-react"
import Link from "next/link";

const Logo = () => {
    return <Link href="/" className="flex items-center gap-2">
        <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
            <SparkleIcon className="size-4 text-primary-foreground" />
        </div>
        <span className="text-lg font-bold">i<span className="text-purple-600">Built</span>This</span>
    </Link>
}

export default function Footer() {
    return (
        <footer className="border-t bg-background/95">
            <div className="wrapper px-6 md:px-12 py-10">
                <div className="flex flex-col md:flex-row justify-between gap-8">

                    {/* Left - Logo & Description */}
                    <div className="flex flex-col gap-3 max-w-xs">
                        <Logo />
                        <p className="text-sm text-muted-foreground">
                            A platform to showcase and discover projects built by developers around the world. Share what you've built and get inspired by others.
                        </p>
                    </div>

                    {/* Middle - Nav */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold">Navigation</h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                <HomeIcon className="size-4" />
                                <span>Home</span>
                            </Link>
                            <Link href="/explore" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                <CompassIcon className="size-4" />
                                <span>Explore</span>
                            </Link>
                        </nav>
                    </div>

                    {/* Right - Contact & Social */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold">Contact</h4>
                        <div className="flex flex-col gap-2">
                            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                <PhoneIcon className="size-4" />
                                <span>+1 (234) 567-890</span>
                            </a>
                            <a href="mailto:hello@ibuiltthis.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                <MailIcon className="size-4" />
                                <span>hello@ibuiltthis.com</span>
                            </a>
                        </div>
                        <h4 className="text-sm font-semibold mt-2">Follow Us</h4>
                        <div className="flex items-center gap-3">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Twitter
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                GitHub
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} iBuiltThis. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
