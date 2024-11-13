import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const user_id = Number(searchParams.get("userid"));
    const orderid = searchParams.get("orderid");
    const is_active = searchParams.get("is_purchased") === "true" ? true : false;

    const client = new PrismaClient();

    if (orderid) {
        const order_data = await client.order.findUnique({
            where: {
                orderid: orderid,
            }
        });

        return NextResponse.json({
            success: true,
            orders: order_data
        })
    }

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

};

export async function POST(request) {
    const client = new PrismaClient();

    try {
        const { userid, product } = await request.json();

        if (!userid) throw "No User ID Provided";
        if (!product) throw "No Product Provided";

        product.Quantity = 1;
        
        const user_order = await client.order.findFirst({
            where: {
                userid: userid,
                is_checkedout: false,
            }
        });

        if (!user_order  || user_order.is_checkedout === true) {
            await client.order.create({
                data: {
                    userid: userid,
                    items: [product],
                }
            })
        } else {

            let updated_items = [];
            user_order.items.forEach((item) => {
                if (!updated_items.some(item2 => item2.productid === item.productid)) {
                    updated_items.push(item);
                }
            });

            if (updated_items.length !== 0) {
                let exists_product = updated_items.some(item => item.productid === product.productid);
                if (!exists_product) {
                    updated_items.push(product);
                }
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
            })
            .catch((e) =>  {
                throw `Prisma Error; ${e}`
            })

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
    } finally {
        await client.$disconnect();
    }

};

// Updates the state of the Order eg. Quantity;
export async function PUT(request) {
    const client = new PrismaClient();
    try {
        const { order: updated_order, orderid, userid, checked_out } = await request.json();

        if (!orderid || !userid) throw "Missing Requirements";

        await client.$transaction(async () => {
            if (updated_order) {
                await client.order.update({
                    data: {
                        items: {
                            set: updated_order,
                        },
                    },
                    where: {
                        userid: userid,
                        orderid: orderid,
                    },
                });
            } else if (checked_out === true) {
                await client.order.update({
                    where: {
                        userid: userid,
                        orderid: orderid,
                    },

                    data: {
                        is_checkedout: true,
                    }
                })
            };
          });

        return NextResponse.json({
            success: true,
            message: "Order updated successfully",
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

export async function DELETE(request) {
    const client = new PrismaClient();
   
    try {
        const { searchParams } = new URL(request.url);
        const user_id = Number(searchParams.get("userid"));
        const product_id = Number(searchParams.get("product_id"));
        const order_id = searchParams.get("order_id");
       
        if (!user_id || isNaN(user_id)) {
            return NextResponse.json({
                success: false,
                message: "Invalid user ID"
            }, { status: 400 });
        }
       
        if (!product_id || isNaN(product_id)) {
            return NextResponse.json({
                success: false,
                message: "Invalid product ID"
            }, { status: 400 });
        }
       
        if (!order_id) {
            return NextResponse.json({
                success: false,
                message: "Order ID is required"
            }, { status: 400 });
        }

        // Find the order
        const order_db = await client.order.findUnique({
            where: {
                orderid: order_id
            }
        });

        if (!order_db) {
            return NextResponse.json({
                success: false,
                message: "Order not found"
            }, { status: 404 });
        }

        // Verify the order belongs to the user
        if (order_db.userid !== user_id) {
            return NextResponse.json({
                success: false,
                message: "Order does not belong to this user"
            }, { status: 403 });
        }

        const items_list = order_db.items.filter(item => item.productid !== product_id);

        // Update the order
        await client.order.update({
            where: {
                orderid: order_id
            },
            data: {
                items: items_list
            }
        });

        await client.$disconnect();
       
        return NextResponse.json({
            success: true,
            message: 'Item successfully removed from order'
        }, { status: 200 });
       
    } catch (error) {
        await client.$disconnect();
       
        return NextResponse.json({
            success: false,
            message: 'Internal server error',
            error: error.message
        }, { status: 500 });
    }
}