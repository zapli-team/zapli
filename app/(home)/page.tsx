import { Star } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { CLIENTS } from "./utils/consts";

export default function HomePage() {
    return (
        <section className="h-full flex items-center justify-center">
            <div className="container text-center px-10">
                <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
                    <h1 className="text-4xl font-extrabold lg:text-6xl">וואטסאפ אוטומטי לעצמאים ועסקים קטנים</h1>
                    <p className="text-balance text-muted-foreground lg:text-lg">
                        רוב האנשים חושבים שאוטומציות אפשריות רק בחשבון וואטסאפ עסקי – אבל זה כבר לא נכון .<br />
                        אנחנו מפתחים פתרונות חכמים שעובדים על וואטסאפ אישי, בצורה יציבה ובטוחה, בלי צורך לשנות את תהליך
                        העבודה שלכם .
                    </p>
                </div>
                <Button asChild className="mt-10 text-xl font-bold px-12 py-7">
                    <Link href="/how-it-works">איך זה עובד?</Link>
                </Button>
                <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
                    <span className="mx-4 inline-flex items-center -space-x-2">
                        {CLIENTS.map((client) => (
                            <Avatar key={client.src} className="size-10 border" title={client.title}>
                                <AvatarImage src={client.src} alt={client.title} />
                            </Avatar>
                        ))}
                    </span>
                    <div className="mt-2 flex flex-col items-center">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} className="size-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-left font-medium text-muted-foreground">+7 שנים ניסיון</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
