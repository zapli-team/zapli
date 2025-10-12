import Link from "next/link";
import { TbBrandInstagramFilled, TbBrandTiktokFilled, TbMailFilled } from "react-icons/tb";

import { Logo } from "@/components/ui/logo";
import { cn } from "@/utils/funcs";

interface NavbarProps extends React.ComponentProps<"div"> {}

function Navbar({ className, ...props }: NavbarProps) {
    return (
        <div
            dir="ltr"
            className={cn("flex w-full items-center sm:justify-center py-4 px-6 font-rubik gap-6", className)}
            {...props}
        >
            <Link href="/" title="עמוד הבית" className="absolute right-6">
                <Logo />
            </Link>
            <Link href="mailto:roy@brzly.com" className="flex items-center gap-2">
                <TbMailFilled size={20} />
                <span className="hidden sm:inline-flex">roy@brzly.com</span>
            </Link>
            |
            <Link href="https://www.instagram.com/roybarzilay1/" target="_blank" rel="noreferrer">
                <TbBrandInstagramFilled size={20} />
            </Link>
            |
            <Link href="https://www.tiktok.com/@roybarzilay1" target="_blank" rel="noreferrer">
                <TbBrandTiktokFilled size={20} />
            </Link>
        </div>
    );
}

export { Navbar };
