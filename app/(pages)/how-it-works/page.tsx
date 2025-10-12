"use client";

import { gsap } from "gsap";
import { AlertTriangle, ArrowLeft, Shield, Sparkles, Workflow } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function WhatsAppAutomationPage() {
    const root = React.useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            gsap.from(".fade-in", { opacity: 0, y: 10, duration: 0.5, ease: "power2.out", stagger: 0.06 });
        },
        { scope: root }
    );

    return (
        <div ref={root} dir="rtl" className="mx-auto max-w-3xl px-4 py-12 text-right [&_p,&_ol,&_ul]:font-rubik">
            <article className="space-y-8">
                <header className="space-y-3 fade-in text-center">
                    <p className="text-xs text-muted-foreground">
                        זאפלי מאת רועי ברזילי • אוטומציות קטנות לוואטסאפ אישי
                    </p>
                    <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                        איך להפוך את הוואטסאפ האישי שלך לאוטומטי
                    </h1>
                    {/* <p className="text-muted-foreground">
                        אם את/ה פרילנסר/ית או בעל/ת עסק קטן, סביר להניח שאת רוב העבודה את/ה עושה בוואטסאפ. בדיוק בשביל
                        זה אנחנו בונים אוטומציות קטנות שמפנות זמן, מצמצמות טעויות, ומשאירות את השיחה אנושית. זה לא
                        צ׳אטבוט ולא שיווק המוני - אלא דברים קטנים שעוזרים ביום-יום.
                    </p> */}
                </header>

                <section className="space-y-3 border-t pt-4 fade-in">
                    <p className="text-foreground">
                        בגדול, מה שמאפשר להפוך את הוואטסאפ שלך לאוטומטי הוא העקרון שהעבודה שלך מלאה{" "}
                        <em>ברגעים חוזרים</em>: לקוח כותב "היי", מבקש מחירון, שואל על זמינות, או צריך תזכורת. במקום
                        שתקליד שוב ושוב, אנחנו מגדירים תגובות קצרות וידידותיות שמופעלות רק כשהן באמת רלוונטיות. תחשבו על
                        זה כעל עוזר אישי שלוחץ במקומך על אותם כפתורים מוכרים — שולח קישור ליומן, מצרף לינק תשלום, או
                        עושה סדר ברקע.
                    </p>
                    <p className="text-muted-foreground">
                        אנחנו לא מחליפים אותך ולא מנהלים שיחה ארוכה במקומך. המערכת רק דואגת שהדברים הקטנים יקרו בזמן:
                        תשובה ראשונית מנומסת שלא תלך לאיבוד, קישור נכון בלי טעויות, ותזכורת עדינה שלא מביכה אף אחד. הכל
                        נשאר אנושי, מותאם לנוסח שלך, וקל לעצירה או שינוי בכל רגע.
                    </p>
                </section>

                <section className="space-y-3 fade-in">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" /> למי זה מתאים?
                    </h2>
                    <p className="text-muted-foreground">
                        לכל מי שמרגיש/ה שההתכתבויות אוכלות לו את היום: מטפלים, מאמנים, מעצבים, מתקינים, טכנאיות, יועצים
                        ועוד. אם חוזרים אליך שוב ושוב עם אותן שאלות/בקשות - כנראה שאפשר להפוך חלק מזה לאוטומטי ועדיין
                        להישאר אישי.
                    </p>
                </section>

                <section className="space-y-3 fade-in">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Workflow className="h-5 w-5 text-primary" /> איך זה עובד בפועל?
                    </h2>
                    <ol className="list-decimal pr-5 space-y-1 text-muted-foreground">
                        <li>
                            <strong>מזהים מה מעכב אותך</strong>: אישורי קבלה, תיאום פגישות, שליחת מחירים, גבייה.
                        </li>
                        <li>
                            <strong>בוחרים טריגר קטן</strong>: מילה/משפט שמפעיל את המערכת.
                        </li>
                        <li>
                            <strong>מחברים לכלים קיימים</strong>: יומן Google, טופס קצר, לינק תשלום, או גיליון.
                        </li>
                        <li>
                            <strong>כותבים הודעה אנושית</strong>: משפט-שניים, ברור ומנומס. לא שיחה רובוטית.
                        </li>
                        <li>
                            <strong>מפעילים את המערכת</strong>: בודקים כמה תסריטים, מודדים, ומשפרים.
                        </li>
                    </ol>
                </section>

                <section className="space-y-3 fade-in">
                    <h2 className="text-2xl font-semibold">דוגמאות קטנות שעושות הבדל גדול</h2>
                    <ul className="list-disc pr-5 space-y-1 text-muted-foreground">
                        <li>
                            <strong>מענה ראשוני מיידי</strong>: תגובה קצרה אוטומטית לאחר שמישהו פנה אלייך ואין לך זמן
                            לענות.
                        </li>
                        <li>
                            <strong>מענה לשאלות חוזרות</strong>: תגובה אוטומטית בנויה מראש לשאלות שחוזרות על עצמן.
                        </li>
                        <li>
                            <strong>העברת מסמכים</strong>: העברה אוטומטית של מסמכים מהלקוח לעוזר/ת (מקבוצה אחת לאחרת).
                        </li>
                        <li>
                            <strong>תזכורת עדינה</strong>: שעה לפני פגישה - הודעה קצרה לאישור/ביטול.
                        </li>
                        <li>
                            <strong>תיוג שיחות</strong>: "מתעניין"/"סגור" נכנס אוטומטית לגיליון לקוחות.
                        </li>
                    </ul>
                </section>

                <section className="space-y-3 fade-in">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" /> בטיחות וחוקיות - בגובה העיניים
                    </h2>
                    <p className="text-muted-foreground">
                        חשוב להיות גלויים: אוטומציה בחשבון אישי אינה ערוץ מסחרי רשמי ועשויה לסתור את מדיניות WhatsApp.
                        לכן אנחנו בונים <strong>רק אוטומציות קטנות</strong>, בנפח נמוך, שמיועדות לשירות - לא לשיווק
                        המוני. בלי רשימות תפוצה, בלי שליחת הודעות אגרסיבית, ועם אלמטים אנושיים (כמו עיכוב אקראי של שליחת
                        הודעות, ניסוח טבעי, וכ'ו).
                        <br />
                        זה הקאץ' והחיסרון היחידי לשירות מהסוג המיוחד הזה.
                    </p>
                    <p className="text-muted-foreground">
                        המטרה היא <em>לשמור על החשבון</em>: לעבוד בזהירות, לבדוק תרחישים מראש, ולהשתמש במידה המדויקת
                        שאנחנו צריכים כדי לחסוך לנו זמן ביום-יום.
                    </p>
                    <blockquote className="border-r-2 pr-4 text-sm text-muted-foreground">
                        טיפ: עדיף להתחיל באוטומציה אחת שמרגישה הכי בטוחה ורלוונטית.
                    </blockquote>
                </section>

                <section className="space-y-3 fade-in">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-primary" /> מתי זה פחות מתאים
                    </h2>
                    <p className="text-muted-foreground">
                        אם את/ה מחפש/ת שליחה המונית, דיוור, או צא׳טבוט משוחח - זה לא הכלי ולא הסגנון. אנחנו מתמקדים
                        בפשטות ובבטיחות של עסק קטן.
                    </p>
                </section>

                <section className="space-y-3 fade-in">
                    <h2 className="text-2xl font-semibold">שאלות נפוצות</h2>
                    <Accordion type="multiple" className="w-full" defaultValue={["item-1"]}>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>זה חוקי? ומה עם תנאי שימוש?</AccordionTrigger>
                            <AccordionContent>
                                <p className="mt-2 text-muted-foreground">
                                    וואטסאפ לא מאפשרת אוטומציות חיצוניות באופן רשמי, אבל אנחנו עובדים בזהירות ובאופן
                                    שמרני מאוד – רק על תהליכים קטנים, פנימיים ובנפח נמוך. אין פה ספאם, לא הודעות המוניות
                                    ולא בוטים. כל פתרון נבדק מראש כך שלא יסכן את החשבון שלך.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>צריך חשבון וואטסאפ עסקי?</AccordionTrigger>
                            <AccordionContent>
                                <p className="mt-2 text-muted-foreground">
                                    לא חובה בכלל. רוב הלקוחות עובדים עם החשבון האישי שלהם – בדיוק כמו היום. המטרה היא לא
                                    להכניס מערכת חדשה, אלא להפוך את מה שכבר עובד לך – ליותר חכם ואוטומטי.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>זה יציב?</AccordionTrigger>
                            <AccordionContent>
                                <p className="mt-2 text-muted-foreground">
                                    כן. דווקא בגלל שהאוטומציות קטנות וממוקדות – הן הרבה יותר יציבות. אין עומס, אין שרשרת
                                    תהליכים מסובכת, וכל מערכת מקבלת ניטור בסיסי והתראות אם משהו משתבש. בפועל – זה פשוט
                                    עובד.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                <section className="space-y-3 fade-in">
                    <h2 className="text-2xl font-semibold">רוצה להתחיל בקטן?</h2>
                    <p className="text-muted-foreground">
                        לשיחת ייעוץ קצרה (10-15 דק') אפשר לכתוב לי לי ב-
                        <Link
                            className="text-primary underline underline-offset-2"
                            href="https://wa.me/972527088557"
                            target="_blank"
                            rel="noreferrer"
                        >
                            WhatsApp
                        </Link>{" "}
                        או{" "}
                        <Link
                            className="text-primary underline underline-offset-2"
                            href="https://roybarzilay.youcanbook.me"
                            target="_blank"
                            rel="noreferrer"
                        >
                            לתאם ביומן
                        </Link>{" "}
                        - מה שנוח.
                    </p>
                    <p className="text-xs text-muted-foreground">
                        *המידע כאן כללי בלבד ואינו ייעוץ משפטי. מומלץ לפעול בזהירות ובהתאם למדיניות המשתנה של וואטסאפ.
                    </p>
                    <p className="inline-flex items-center gap-2 text-sm text-foreground/80">
                        תודה שקראת עד הסוף <ArrowLeft className="h-4 w-4" /> נתראה בוואטסאפ :)
                    </p>
                </section>
            </article>
        </div>
    );
}
