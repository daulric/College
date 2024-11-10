import PAGE from "./receipt_client";

export default function RECEIPT({params}) {
    return (
        <PAGE orderid={params.orderid}/>
    )
}