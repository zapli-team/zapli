import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";

import { styles } from "./utils/consts";

export function GuideAdminEmailTemplate({
    firstName,
    lastName,
    email,
    timeWaster,
}: {
    firstName: string;
    lastName: string;
    email: string;
    timeWaster?: string;
}) {
    return (
        <Html>
            <Head />
            <Preview>
                New guide download: {firstName} {lastName}
            </Preview>
            <Body style={styles.main}>
                <Container style={styles.container}>
                    <Heading style={styles.h1}>🎯 מישהו חדש נרשם בטופס לקבלת המדריך</Heading>

                    <Section style={styles.infoSection}>
                        <Text style={styles.label}>שם מלא:</Text>
                        <Text style={styles.value}>
                            {firstName} {lastName}
                        </Text>
                    </Section>

                    <Section style={styles.infoSection}>
                        <Text style={styles.label}>דוא"ל:</Text>
                        <Text style={styles.value}>
                            <Link href={`mailto:${email}`} style={styles.emailLink}>
                                {email}
                            </Link>
                        </Text>
                    </Section>

                    {timeWaster && (
                        <>
                            <Hr style={styles.hr} />
                            <Section style={styles.infoSection}>
                                <Text style={styles.label}>מה שמבזבז להם הכי הרבה זמן:</Text>
                                <Section style={styles.timeWasterBox}>
                                    <Text style={styles.timeWasterText}>{timeWaster}</Text>
                                </Section>
                            </Section>
                        </>
                    )}
                </Container>
            </Body>
        </Html>
    );
}

export async function GuideSenderEmailTemplate({ firstName }: { firstName: string }) {
    return (
        <Html dir="rtl">
            <Head />
            <Preview>המדריך המלא ל-5 אוטומציות שיחסכו לך 5-10 שעות בשבוע | זאפלי</Preview>
            <Body style={styles.main}>
                <Container style={styles.container}>
                    <Heading style={styles.h1}>היי {firstName || "שם"} 👋</Heading>

                    <Text style={styles.text}>המדריך שלך כאן! לחץ על הכפתור למטה כדי להוריד אותו:</Text>

                    <Section style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            href="https://zapli.co.il/downloads/מדריך - 5 משימות שכל בעל עסק צריך לבצע אוטומטית השבוע.pdf"
                        >
                            📥 הורד את המדריך המלא
                        </Button>
                    </Section>

                    <Text style={styles.text}>
                        <strong>בתוך המדריך תמצא:</strong>
                    </Text>

                    <Section style={styles.list}>
                        <Text style={styles.listItem}>✅ 5 אוטומציות שאפשר להטמיע היום</Text>
                        <Text style={styles.listItem}>✅ הכלים המדויקים (רובם חינמיים)</Text>
                        <Text style={styles.listItem}>✅ הוראות צעד אחר צעד בעברית</Text>
                        <Text style={styles.listItem}>✅ טיפים למעקב ושיפור מתמשך</Text>
                    </Section>

                    <Section style={styles.tipBox}>
                        <Text style={styles.tipText}>
                            💡 <strong>טיפ חשוב:</strong> תתחיל מאוטומציה אחת. לא צריך לעשות הכל בבת אחת.
                        </Text>
                    </Section>

                    <Text style={styles.text}>בהצלחה עם ההטמעה!</Text>

                    <Text style={styles.signature}>
                        רועי ברזילי,
                        <br />
                        זאפלי
                    </Text>

                    <Hr style={styles.hr} />

                    <Section style={styles.footer}>
                        <Text style={styles.footerText}>
                            <strong>צריך עזרה עם ההטמעה?</strong>
                        </Text>
                        <Text style={styles.footerText}>
                            אם אתה רוצה שנעזור לך להגדיר את המערכות האלה (או לבנות משהו מותאם אישית), בוא נדבר.
                        </Text>
                        <Link href="https://zapli.co.il/contact" style={styles.footerLink}>
                            צרו איתנו קשר ←
                        </Link>
                    </Section>

                    <Hr style={styles.hr} />

                    <Section style={styles.companyInfo}>
                        <Text style={styles.companyText}>
                            <strong>זאפלי</strong> - מערכות חכמות וכלי AI לפרילנסרים ובעלי עסקים קטנים
                        </Text>
                        <Text style={styles.companyText}>
                            <Link href="https://zapli.co.il" style={styles.link}>
                                zapli.co.il
                            </Link>
                            {" | "}
                            <Link href="mailto:roy@zapli.co.il" style={styles.link}>
                                roy@zapli.co.il
                            </Link>
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}
