import { Bot, Cog, Compass, Link, Puzzle } from "lucide-react";
import {
    TbBrandFacebookFilled,
    TbBrandInstagramFilled,
    TbBrandTiktokFilled,
    TbBrandWhatsapp,
    TbBrandYoutubeFilled,
    TbMailFilled,
} from "react-icons/tb";

export const DEFAULT_WHATSAPP_MSG = encodeURIComponent("מה קורה? אשמח לדבר אתכם על העסק שלי");

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
        href: "/contact",
    },
];

export const SOCIALS = [
    {
        title: "barak@zapli.co.il",
        icon: TbMailFilled,
        href: "mailto:barak@zapli.co.il",
        color: "#D93025",
    },
    {
        title: "+972-50-753-7633",
        icon: TbBrandWhatsapp,
        href: `https://wa.me/972507537633?text=${DEFAULT_WHATSAPP_MSG}`,
        color: "#25D366",
    },
    {
        icon: TbBrandInstagramFilled,
        href: "https://www.instagram.com/roybarzilay1",
        color: "#833AB4",
    },
    {
        icon: TbBrandTiktokFilled,
        href: "https://www.tiktok.com/@roybarzilay1",
        color: "#EE1D52",
    },
    {
        icon: TbBrandYoutubeFilled,
        href: "https://www.youtube.com/@roybarzilay1",
        color: "#FF0000",
    },
    {
        icon: TbBrandFacebookFilled,
        href: "https://www.facebook.com/zapli.co.il",
        color: "#1877F2",
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
    {
        src: "/images/clients/vered.png",
        name: "ורד סילן",
    },
];

export const TEAM = [
    {
        src: "/images/team/roy.png",
        name: "רועי ברזילי",
        title: "מייסד ומפתח מערכות חכמות",
    },
    {
        src: "/images/team/michael.png",
        name: "מיכאל רבינוביץ'",
        title: "מפתח ומומחה תשתיות",
    },
    {
        src: "/images/team/barak.png",
        name: "ברק באטיטו",
        title: "אחראי שיווק וצמיחה עסקית",
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
