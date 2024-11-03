import Auth from "./login"

export const metadata = {
    title: "Login",
    description: "Login Portal"
}

export default function PAGE() {
    return (
        <>
            <Auth/>
        </>
    )
}