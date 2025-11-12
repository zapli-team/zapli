import React from "react";

import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function HomeLayout({ children }: React.PropsWithChildren) {
    return (
        <main className="h-full">
            <Background />
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
