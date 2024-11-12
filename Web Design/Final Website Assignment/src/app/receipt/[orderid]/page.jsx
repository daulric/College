import PAGE from "./receipt_client";

export default async function RECEIPT({params}) {
    const { orderid } = await params;

    return (
        <PAGE orderid={orderid}/>
    )
};