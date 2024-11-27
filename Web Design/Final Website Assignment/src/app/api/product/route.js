import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import { unstable_noStore } from "next/cache";

export async function GET() {
    unstable_noStore();
    const client = new PrismaClient();
    
    const items = await client.product.findMany({
        orderBy: {
            productid: "asc"
        }
    });

    const updated_items = items.map(product => ({
        ...product,
        Price: parseFloat(product.Price),
    }))

    return NextResponse.json({
        success: true,
        products: updated_items,
    })
}