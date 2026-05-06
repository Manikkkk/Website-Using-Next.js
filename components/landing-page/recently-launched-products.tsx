import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "../products/product-card";
import EmpltyState from "../common/empty-state";

const RecentlyLaunchedProducts = [
    // {
    //     id: 1,
    //     name: "Paritykit AI Image Generator",
    //     description: "Create stunning images with AI",
    //     tags: ["AI", "Design", "Creativity"],
    //     votes: 1200,
    //     isFeatured: true,

    // },
    // {
    //     id: 2,
    //     name: "Project Management Tool",
    //     description: "Organize your team's work",
    //     tags: ["Productivity", "Team Collaboration"],
    //     votes: 850,
    //     isFeatured: false,
    // },
    // {
    //     id: 3,
    //     name: "Social Media Scheduler",
    //     description: "Schedule posts across all platforms",
    //     tags: ["Social Media", "Scheduling"],
    //     votes: 600,
    //     isFeatured: true,
    // },
    // {
    //     id: 4,
    //     name: "Mobile Game Engine",
    //     description: "Create engaging mobile games with ease",
    //     tags: ["Game Development", "Mobile"],
    //     votes: 900,
    //     isFeatured: false,
    // },
    // {
    //     id: 5,
    //     name: "AI-Powered Chatbot",
    //     description: "Create engaging chatbots with AI",
    //     tags: ["AI", "Customer Service"],
    //     votes: 900,
    //     isFeatured: true,
    // },
    // {
    //     id: 6,
    //     name: "Intelligent Code Editor",
    //     description: "Enhance your coding experience with AI assistance",
    //     tags: ["Development", "Productivity"],
    //     votes: 900,
    //     isFeatured: false,
    // },
] 

export default function RecentlyLunchedProducts() {
    return (
        <section className="py-20">
            <div className="wrapper">
                <SectionHeader
                title="Recently Launched"
                description="Discover the latest products launched on our platform. Explore innovative solutions and stay ahead with the newest trends in technology and design."
                icon={RocketIcon}
                />

                {RecentlyLaunchedProducts.length > 0 ? (
                <div className="grid-wrapper">
                    {RecentlyLaunchedProducts.map((product) => 
                     <ProductCard key={product.id} product={product}/>
                    )}
                 </div>
                ) : (
                    <EmpltyState message="No products launched in the last week. Check back later!" icon={CalendarIcon} />
                )}
            </div>
        </section>
    )
}