import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { SOCIALS } from "@/utils/consts";
import { cn } from "@/utils/funcs";

function Navbar({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex items-center justify-between w-full py-4 px-6", className)} {...props}>
            <Link href="/" title="עמוד הבית">
                <Logo />
            </Link>
            <nav dir="ltr" className="flex items-center justify-center font-rubik gap-12">
                {SOCIALS.map((social) => (
                    <Link
                        key={social.href}
                        href={social.href}
                        className="relative flex items-center gap-2"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <social.icon size={20} />
                        {social.title && <span className="hidden sm:inline-flex">{social.title}</span>}
                    </Link>
                ))}
            </nav>
            <Button asChild className="font-semibold tracking-wide gap-1">
                <Link href="#">
                    צרו קשר
                    <ChevronLeft className="size-3" />
                </Link>
            </Button>
        </div>
    );
}

export { Navbar };
