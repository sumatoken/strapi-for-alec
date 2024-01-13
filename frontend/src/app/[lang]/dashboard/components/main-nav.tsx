import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Link
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Dashboard
            </Link>
            <Link
                href="/content/blogs"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Blogs
            </Link>
            <Link
                href="/content/strategies"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Strategies
            </Link>
            <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                About
            </Link>
        </nav>
    )
}