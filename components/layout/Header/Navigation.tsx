import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="flex items-center justify-between gap-6 w-107.5">
           
            <Link href="/" className="text-lg font-medium hover:text-primary">
                Home
            </Link>
            
            <Link href="/shop" className="text-lg font-medium hover:text-primary">
                Shop
            </Link>

            <Link href="/about" className="text-lg font-medium hover:text-primary">
                About
            </Link>

            <Link href="/contact" className="text-lg font-medium hover:text-primary">
                Contact
            </Link>
        </nav>
    );
}