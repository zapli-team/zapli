import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { SOCIALS } from "@/utils/consts";

import { ContactForm } from "./contact-form";

export default function ContactPage() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">צרו איתנו קשר</h1>
                <p className="mt-4 text-center flex items-center justify-center gap-2 font-rubik">
                    קחו חצי דקה למלא את הטופס ונחזור אליכם בוואטסאפ <ChevronDown className="size-3" />
                </p>

                <Card className="mx-auto mt-12 max-w-full p-8 shadow-md sm:p-16 bg-foreground/10 backdrop-blur-3xl">
                    <div
                        dir="ltr"
                        className="flex items-center justify-center font-rubik gap-6 border-b border-border/25 pb-6"
                    >
                        {SOCIALS.slice(0, 2).map((social) => (
                            <Link
                                key={social.href}
                                href={social.href}
                                className="relative flex items-center gap-2 hover:text-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <social.icon size={20} />
                                {social.title && <span className="hidden md:inline-flex text-sm">{social.title}</span>}
                            </Link>
                        ))}
                    </div>
                    <ContactForm />
                </Card>
            </div>
        </section>
    );
}
