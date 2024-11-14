import PAGE from "./receipt_client";

export const metadata = {
    title: "Receipt",
    description: "Receipt for the user",
}
export default async function RECEIPT({params}) {
    const { receiptid } = await params;

    return (
        <>
        <PAGE receiptid={receiptid}/>
        </>
    )
};