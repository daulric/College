import PAGE from "./receipt_client";

export default function RECEIPT({params: {orderid}}) {
    return (
        <PAGE orderid={orderid}/>
    )
}