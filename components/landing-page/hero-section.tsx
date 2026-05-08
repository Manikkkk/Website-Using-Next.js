import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/dist/client/link"
import { ArrowRightIcon, EyeIcon, RocketIcon, SparklesIcon, UsersIcon } from "lucide-react"
import StatsCard from "./stats-card"

const LiveBadge = () => {
    return (
        <Badge variant="outline" className="px-4 py-3 mb-8 text-sm
        backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex
                h-full w-full rounded-full bg-primary opacity-75" />
                <span className="rekative inline-flex
                rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-muted-foreground">
                Trusted by 500+ businesses worldwide
            </span>
        </Badge>
    );
};

const statsData = [
    {
        icon: RocketIcon, 
        value: "500+", 
        label: "Projects Delivered"
    },
    {
        icon: UsersIcon,
        value: "200+", 
        label: "Happy Clients",
        hasborder: true,
    },
    {
        icon: EyeIcon, 
        value: "98%", 
        label: "Client Satisfaction"
    }
];
export default function HeroSection() {
    return (
    <section className="relative overflow-hidden
    bg-linear-to-b from-backgound via-background
    to-muted/20">
        <div className="wrapper">
            <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
      <LiveBadge />
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold
      tracking-tight mb-6 max-w-5xl">We Build Digital Products That Drive Results</h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10
        max-w-2xl leading-relaxed">TechTokha is a full-service digital agency specializing in web development, UI/UX design, branding, and custom software solutions. Let&apos;s turn your vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
           <Button asChild size="lg"
          className="text-base px-8 shadow-lg">
            <Link rel="stylesheet" href="/contact"> 
            <SparklesIcon className="size-5"/>
            Start a Project
          </Link>
          </Button>
          <Button asChild size="lg" className="text-base px-8 shadow-lg" variant="secondary">
            <Link rel="stylesheet" href="/work">View Our Work <ArrowRightIcon className="size-5"/></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full">
        {statsData.map((stat) => (
            <StatsCard key={stat.label} {...stat} />
        ))}
        </div>
        </div>
        </div>
    </section>
    )
}