"use cache";
import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "../products/product-card";
import EmpltyState from "../common/empty-state";
import { getRecentlyLaunchedProducts } from "@/lib/product/product-select";

export default async function RecentlyLunchedProducts() {
    const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();

    return (
        <section className="py-20">
            <div className="wrapper">
                <SectionHeader
                title="Recent Projects"
                description="A look at our latest work. From startups to enterprises, see how TechTokha delivers impactful digital solutions."
                icon={RocketIcon}
                />

                {recentlyLaunchedProducts.length > 0 ? (
                <div className="grid-wrapper">
                    {recentlyLaunchedProducts.map((product) => 
                     <ProductCard key={product.id} product={product}/>
                    )}
                 </div>
                ) : (
                    <EmpltyState message="New projects coming soon. Stay tuned!" icon={CalendarIcon} />
                )}
            </div>
        </section>
    )
}