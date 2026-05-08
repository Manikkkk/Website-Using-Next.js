import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import { 
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
 } from "@/components/ui/card";

interface product {
    id: number;
    title: string;
    description: string | null;
    category: string | null;
    imageUrl: string | null;
    link: string | null;
}

export default function ProductCard({ product }: { product: product }) 
{
        return <Link href={`/products/${product.id}`}>
            <Card className="group card-hover transition-all duration-200 hover:bg-indigo-50 hover:border-indigo-400 hover:shadow-lg border-solid border-gray-400 min-h-[160px]">  
                <CardHeader className="flex-1">
                    <div className="flex items-start gap-4">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{product.title}</CardTitle>
                    </div>
                    <CardDescription>{product.description}</CardDescription>
                    </div>
                    </div>
                </CardHeader>
                <CardFooter>
                    <div className="flex items-center gap-2">
                    {product.category && <Badge variant="destructive">{product.category}</Badge>}
                    </div>
                </CardFooter>
            </Card>
        </Link>
}