import SectionHeader from "@/components/common/section-header";
import { ArrowRightIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/product/product-select";

// const FeaturedProducts = [
//     {
//         id: 1,
//         name: "Brand Identity Design",
//         description: "Complete branding package — logo, colors, typography & guidelines",
//         tags: ["Branding", "Design"],
//         votes: 1200,
//         isFeatured: true,
//     },
//     {
//         id: 2,
//         name: "Custom Web Development",
//         description: "Scalable, fast and modern websites built with Next.js & Tailwind",
//         tags: ["Web Dev", "Next.js"],
//         votes: 980,
//         isFeatured: false,
//     },
//     {
//         id: 3,
//         name: "UI/UX Design System",
//         description: "User-centered design systems that improve product experience",
//         tags: ["UI/UX", "Figma"],
//         votes: 860,
//         isFeatured: true,
//     },
//     {
//         id: 4,
//         name: "Mobile App Development",
//         description: "Cross-platform mobile apps for iOS and Android using React Native",
//         tags: ["Mobile", "React Native"],
//         votes: 910,
//         isFeatured: false,
//     },
//     {
//         id: 5,
//         name: "AI Integration Services",
//         description: "Integrate AI & automation into your existing business workflows",
//         tags: ["AI", "Automation"],
//         votes: 1050,
//         isFeatured: true,
//     },
//     {
//         id: 6,
//         name: "SEO & Digital Marketing",
//         description: "Data-driven SEO strategies that grow your organic traffic",
//         tags: ["SEO", "Marketing"],
//         votes: 780,
//         isFeatured: false,
//     },
// ]                               

export default async function FeatureProducts() {
    const featuredProducts = await getFeaturedProducts();
    return(
        <section className="py-20 bg-muted/20">
            <div className="wrapper">
                <div className="flex items-center justify-between mb-8">
                <SectionHeader title="Our Services"
                icon={StarIcon} 
                description="Explore what TechTokha offers — from design to development, we've got you covered."
                />
                <Button variant="outline" asChild className="hidden sm:flex">
                    <Link href="/products">
                    View All <ArrowRightIcon 
                    className="size-4"/>
                    </Link>
                </Button>
                </div>
                <div className="grid-wrapper">
                    {featuredProducts.map((product) => 
                        <ProductCard key={product.id} product={product}/>
                    )}
                </div>
            </div>
        </section>
    )
}