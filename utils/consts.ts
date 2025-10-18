import { Bot, Cog, Compass, Link, Puzzle } from "lucide-react";
import {
    TbBrandFacebookFilled,
    TbBrandInstagramFilled,
    TbBrandTiktokFilled,
    TbBrandWhatsapp,
    TbBrandYoutubeFilled,
    TbMailFilled,
} from "react-icons/tb";

export const NAVIGATION = [
    {
        title: "ראשי",
        href: "/#hero",
    },
    {
        title: "פתרונות",
        href: "/#services",
    },
    {
        title: "עלינו",
        href: "/#about",
    },
    {
        title: "צרו קשר",
        href: "/#contact",
    },
];

export const SOCIALS = [
    {
        title: "roy@zapli.co.il",
        icon: TbMailFilled,
        href: "mailto:roy@zapli.co.il",
    },
    {
        title: "+972-52-708-8557",
        icon: TbBrandWhatsapp,
        href: "https://wa.me/972527088557",
    },
    {
        icon: TbBrandInstagramFilled,
        href: "https://www.instagram.com/roybarzilay1/",
    },
    {
        icon: TbBrandTiktokFilled,
        href: "https://www.tiktok.com/@roybarzilay1",
    },
    {
        icon: TbBrandYoutubeFilled,
        href: "https://www.youtube.com/@roybarzilay1",
    },
    {
        icon: TbBrandFacebookFilled,
        href: "https://www.facebook.com/roybarzilay1/",
    },
];

export const CLIENTS = [
    {
        src: "/images/clients/noni.png",
        name: "נוני שושתרי",
    },
    {
        src: "/images/clients/yaakov.png",
        name: "יעקב סאטלר",
    },
    {
        src: "/images/clients/ori.png",
        name: "אורי חרך",
    },
    {
        src: "/images/clients/revital.png",
        name: "רויטל ליליאן",
    },
    {
        src: "/images/clients/moshe.png",
        name: "משה טלית",
    },
];

export const TEAM = [
    {
        src: "/images/team/barak.png",
        name: "ברק באטיטו",
        title: "אחראי שיווק וצמיחה עסקית",
    },
    {
        src: "/images/team/michael.png",
        name: "מיכאל רבינוביץ'",
        title: "מפתח ומומחה תשתיות",
    },
    {
        src: "/images/team/roy.png",
        name: "רועי ברזילי",
        title: "מייסד ומפתח מערכות חכמות",
    },
];

export const SERVICES = [
    {
        icon: Cog,
        title: "אוטומציה של תהליכי עבודה",
        description:
            "נבנה עבורך תהליכים חכמים שמבצעים פעולות אוטומטיות במקומך – מעקב לידים, תיאומי פגישות, שליחת תזכורות, הפקת דוחות ועוד.",
    },
    {
        icon: Bot,
        title: "שילוב מערכות AI בעסק",
        description:
            'נשלב בינה מלאכותית כדי לחסוך לך זמן: בוטים לשירות לקוחות, עוזרים חכמים לדוא"ל, סיכום פגישות, יצירת תוכן, ועוד.',
    },
    {
        icon: Link,
        title: "חיבור בין מערכות וכלים קיימים",
        description: "נחבר בין WhatsApp, Gmail, Excel, CRM ועוד – כדי שכל המידע יעבוד יחד ויחסוך כאב ראש.",
    },
    {
        icon: Puzzle,
        title: "פיתוח מערכות בהתאמה אישית",
        description:
            "נפתח עבורך פתרונות בהתאמה אישית – ממשקים, לוחות בקרה, או מערכות ניהול פנימיות – פשוטים, נוחים ויעילים.",
    },
    {
        icon: Compass,
        title: "ייעוץ ויישום חכם",
        description:
            "ננתח את תהליכי העבודה שלך, נמליץ על כלים חכמים וניישם אותם יחד, כך שתוכל לנהל את העסק בלי להזדקק לטכנאי צמוד.",
    },
];
