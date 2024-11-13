import CartClient from "./cart_client";

export const metadata = {
    title: "Cart",
    description: "View Cart"
}

export default function PAGE() {
    return (
        <>
            <CartClient />
        </>
    )
}