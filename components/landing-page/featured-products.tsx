import SectionHeader from "@/components/common/section-header";
import { ArrowRightIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "@/components/products/product-card";

const FeaturedProducts = [
    {
        id: 1,
        name: "Paritykit AI Image Generator",
        description: "Create stunning images with AI",
        tags: ["AI", "Design", "Creativity"],
        votes: 1200,
        isFeatured: true,

    },
    {
        id: 2,
        name: "Project Management Tool",
        description: "Organize your team's work",
        tags: ["Productivity", "Team Collaboration"],
        votes: 850,
        isFeatured: false,
    },
    {
        id: 3,
        name: "Social Media Scheduler",
        description: "Schedule posts across all platforms",
        tags: ["Social Media", "Scheduling"],
        votes: 600,
        isFeatured: true,
    },
    {
        id: 4,
        name: "Mobile Game Engine",
        description: "Create engaging mobile games with ease",
        tags: ["Game Development", "Mobile"],
        votes: 900,
        isFeatured: false,
    },
    {
        id: 5,
        name: "AI-Powered Chatbot",
        description: "Create engaging chatbots with AI",
        tags: ["AI", "Customer Service"],
        votes: 900,
        isFeatured: true,
    },
    {
        id: 6,
        name: "Intelligent Code Editor",
        description: "Enhance your coding experience with AI assistance",
        tags: ["Development", "Productivity"],
        votes: 900,
        isFeatured: false,
    },
]                               

export default function FeatureProducts() {
    return(
        <section className="py-20 bg-muted/20">
            <div className="wrapper">
                <div className="flex items-center justify-between mb-8">
                <SectionHeader title="Featured Today"
                icon={StarIcon} 
                description="Check out our most popular 
                products today!"
                />
                <Button variant="outline" asChild className="hidden sm:flex">
                    <Link href="/products">
                    View All <ArrowRightIcon 
                    className="size-4"/>
                    </Link>
                </Button>
                </div>
                <div className="grid-wrapper">
                    {FeaturedProducts.map((product) => 
                        <ProductCard key={product.id} product={product}/>
                    )}
                </div>
            </div>
        </section>
    )
}