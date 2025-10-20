import { Metadata } from "next";

export const metadata: Metadata = {
    title: "זאפלי | צרו קשר",
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return children;
}
