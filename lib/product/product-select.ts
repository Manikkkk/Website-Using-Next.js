import { db } from '@/lib/db';
import { products } from '@/lib/db/schema';

export async function getFeaturedProducts() {
    const productsData = await db
    .select()
    .from(products);

    return productsData;
}

export async function getRecentlyLaunchedProducts() {
    const productsData = await getFeaturedProducts();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    return productsData.filter((product) => 
        product.createdAt && new Date(product.createdAt.toISOString()) >= 
    oneWeekAgo);
}