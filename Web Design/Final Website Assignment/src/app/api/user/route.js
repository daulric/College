import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const cookieStore = await cookies();
        const userid = Number(cookieStore.get('userid').value);
        const client = new PrismaClient();

        const user = await client.account.findUnique({
            where: {
                userid: userid
            }
        })

        if (!user) throw "user not found"

        return NextResponse.json({
            success: true,
            user: user,
        })

    } catch (e) {
        return NextResponse.json({
            success: false,
            message: e
        })
    }
}