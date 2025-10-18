import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { NAVIGATION, SOCIALS } from "@/utils/consts";

function Footer() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link href="/" aria-label="go home" className="mx-auto block size-fit">
                    <Logo />
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm tracking-wide">
                    {NAVIGATION.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150"
                        >
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div dir="ltr" className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {SOCIALS.map((social) => (
                        <Link
                            key={social.href}
                            href={social.href}
                            className="text-muted-foreground hover:text-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <social.icon size={20} />
                        </Link>
                    ))}
                </div>
                <span className="text-muted-foreground block text-center text-sm">
                    {" "}
                    זאפלי {new Date().getFullYear()} © כל הזכויות שמורות.
                </span>
            </div>
        </footer>
    );
}

export { Footer };
