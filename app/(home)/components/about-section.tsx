import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { TEAM } from "@/utils/consts";

function AboutSection() {
    return (
        <section id="about" className="py-24 md:py-48 bg-background">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-medium">אנחנו צוות קטן עם תשוקה לטכנולוגיה ועסקים</h2>
                        <div className="mx-4 inline-flex items-center -space-x-2">
                            {TEAM.map((member) => (
                                <Tooltip key={member.src}>
                                    <TooltipTrigger asChild>
                                        <Avatar className="size-10 border">
                                            <AvatarImage src={member.src} alt={member.name} />
                                        </Avatar>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        <p>
                                            <span className="font-semibold">{member.name}</span> {member.title}
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4 font-rubik">
                        <p>
                            אנחנו צוות קטן של מומחי פיתוח ואוטומציה, שעוזר לעצמאים ועסקים קטנים בישראל לעבוד חכם עם
                            טכנולוגיות AI בלי כאב ראש.
                        </p>
                        <p>
                            עם ניסיון רב שנים בפיתוח תוכנה, אינטגרציות ומערכות אוטומציה, אנחנו בונים פתרונות פשוטים
                            וחכמים שמייעלים את העבודה היומיומית וחוסכים זמן ובלאגן.
                        </p>
                        <p>
                            אנחנו מאמינים שטכנולוגיה צריכה לשרת אותך – לא להעמיס עליך. לכן כל מערכת שאנחנו בונים היא
                            ברורה, נוחה לתחזוקה, ומתאימה בדיוק לאופן שבו אתה עובד.
                        </p>
                        <Button asChild variant="secondary" size="sm" className="gap-1 pl-1.5 mt-6">
                            <Link href="/contact">
                                <span>לקביעת פגישה</span>
                                <ChevronLeft className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { AboutSection };
