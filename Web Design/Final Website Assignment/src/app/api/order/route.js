import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const user_id = Number(searchParams.get("userid"));
    const is_active = searchParams.get("is_purchased") === "true" ? true : false;

    const client = new PrismaClient();
    const user_orders = await client.order.findMany({
        where: {
            userid: user_id,
            is_checkedout: is_active === null ? false : is_active
        }
    });

    return NextResponse.json({
        success: true,
        orders: user_orders,
    });

}

export async function POST(request) {

    try {
        const { userid, product } = await request.json();

        if (!userid) throw "No User ID Provided";
        if (!product) throw "No Product Provided";

        const client = new PrismaClient();

        console.log("huh");
        
        const user_order = await client.order.findFirst({
            where: {
                userid: userid,
                is_checkedout: false,
            }
        });

        if (!user_order  || user_order.is_checkedout === true) {
            console.log("item created!")
            await client.order.create({
                data: {
                    userid: userid,
                    items: [product],
                }
            })
        } else {
            console.log("updating order");
            let updated_items = [...user_order.items];

            if (updated_items.length !== 0) {
                updated_items.map(item => {
                    if (item.productid !== product.productid) {
                        console.log("no matches; item addedd");
                        updated_items.push(product);
                    }
                });
            } else {
                updated_items.push(product);
            }

            await client.order.update({
                where: {
                    orderid: user_order.orderid,
                    userid: user_order.userid,
                },

                data: {
                    items: {
                        set: updated_items,
                    }
                }
            }).then((item) => console.log(item))
            .catch((e) =>  {
                throw `Prisma Error; ${e}`
            })

            console.log("updated order")
        }

        return NextResponse.json({
            success: true,
            message: "Item Added"
        })

    } catch (e) {
        return NextResponse.json({
            success: false,
            message: e,
        })
    }

}