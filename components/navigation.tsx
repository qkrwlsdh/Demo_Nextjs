"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    // console.log(document.cookie)
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="about-us">About Us</Link> {path === "/about-us" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="payment-ready">Payment Ready</Link> {path === "/payment-ready" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="payment-cancel">Payment Cancel</Link> {path === "/payment-cancel" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="payment-fail">Payment Fail</Link> {path === "/payment-fail" ? "🔥" : ""}
                </li>
            </ul>
        </nav>
    )
}