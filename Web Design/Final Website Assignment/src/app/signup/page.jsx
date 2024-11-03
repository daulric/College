import Auth from "./signup"

export const metadata = {
    title: "Sign Up",
    description: "Signup Portal"
}

export default function PAGE() {
    return (
        <>
            <Auth/>
        </>
    )
}