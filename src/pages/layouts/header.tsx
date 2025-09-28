import Link from "next/link"
import React from "react"

// bg-[url("/roof.png")]

export default function Header() {
    return (
        <header className="w-full pt-2.5">
            <nav className="custom-container rounded-xl bg-[var(--firstColor)] bg-cover py-2 text-center backdrop-blur-3xl">
                <Link href="/" className="inline-block text-[var(--secondColor)] text-3xl p-4 rounded-2xl">TaskWaR</Link>
            </nav>
        </header>
    )
}
