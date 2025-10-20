import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";

function ContactSection() {
    return (
        <section id="contact" className="py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">איך אפשר להתחיל?</h2>
                    <p className="mt-4 font-rubik">
                        דברו איתנו ונקבע שיחת ייעוץ קצרה כדי להבין בדיוק מה העסק שלכם צריך.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
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
            </div>
        </section>
    );
}

export { ContactSection };
