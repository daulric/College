import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import { cookies } from "next/headers";

export function GET() {
    return new NextResponse("ok");
}

export async function POST(request) {
    const { name, email, password } = await request.json();

    try {

        if (!email || !password) throw "Missing Fields";

        const client = new PrismaClient();
        const cookieStore = await cookies();

        const created_data = await client.account.create({
            data: {
                email: email,
                username: name || "",
                password: password,
            }
        })

        cookieStore.set("userid", created_data.userid);

        return NextResponse.json({
            success: true,
        });

    } catch (err) {
        return NextResponse.json({
            success: false,
            message: err,
        })
    }

}

export async function PUT(request) {
    const {email, password} = await request.json();
    const client = new PrismaClient();
    const cookieStore = await cookies();

    try {
        if (!email || !password) throw "Missing Fields";

        const user = await client.account.findUnique({
            where: {
                email: email,
                password: password
            }
        })

        if (!user) throw "User Doesn't Exists";
        cookieStore.set("userid", user.userid);

        return NextResponse.json({
            success: true
        })

    } catch (err) {
        return NextResponse.json({
            success: false,
            message: err,
        })
    }

}