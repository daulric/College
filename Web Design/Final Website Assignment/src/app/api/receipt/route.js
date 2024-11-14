import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const receipt_id = searchParams.get('receipt_id');
    const client = new PrismaClient();

    try {
        if (!receipt_id) throw "No Receipt Provided";

        const receipt_client = await client.receipt.findUnique({
            where: {
                receiptid: receipt_id,
            }
        });
        if (!receipt_client) throw "Receipt Not Found";

        const order_info = await client.order.findUnique({
            where: {
                orderid: receipt_client.orderid,
            },
        });
        if (!order_info) throw "Order Not Found";

        const user = await client.account.findUnique({
            where: {
                userid: order_info.userid,
            },
        });
        if (!user) throw "User Not Found";

        return NextResponse.json({
            success: true,
            data: {
                receipt_info: receipt_client,
                order_info: order_info,
                user: {...user, password: null},
            }
        });

    } catch(e) {
        return NextResponse.json({
            success: false,
            message: e,
        });
    } finally {
        await client.$disconnect();
    }

}

export async function POST(request) {
    const client = new PrismaClient();

    try {
        const { orderid } = await request.json();

        if (!orderid) throw "No Order ID provided";

        const is_in_receipt_db = await client.receipt.findFirst({
            where: {
                orderid: orderid,
            }
        });

        if (is_in_receipt_db) throw "Order Was Already Checked out";

        const data = await client.receipt.create({
            data: {
                orderid: orderid,
            },
        });

        return NextResponse.json({
            success: true,
            data: data,
        });

    } catch(e) {
        return NextResponse.json({
            success: false,
            message: e,
        })
    } finally {
        await client.$disconnect();
    }

}