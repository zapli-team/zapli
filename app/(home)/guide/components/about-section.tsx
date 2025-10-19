import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";

function AboutSection() {
    return (
        <section id="about" className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">מי אנחנו?</h2>
                <p className="text-muted-foreground mb-6 font-rubik">
                    אנחנו צוות ישראלי קטן שבונה מערכות חכמות וכלי AI לפרילנסרים ובעלי עסקים קטנים. אנחנו מתמחים
                    באוטומציות פשוטות שבאמת עובדות — בלי שטויות תאגידיות ובלי סיבוכים מיותרים.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg" className="font-semibold tracking-wide gap-1">
                        <Link href="/contact">
                            דברו איתנו
                            <ChevronLeft className="size-3" />
                        </Link>
                    </Button>

                    <Button asChild size="lg" variant="outline" className="font-semibold tracking-wide gap-1">
                        <Link href="https://wa.me/972527088557" target="_blank" rel="noreferrer">
                            ישירות בוואטסאפ
                            <FaWhatsapp />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export { AboutSection };
