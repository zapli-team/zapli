import React from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function HomeLayout({ children }: React.PropsWithChildren) {
    return (
        <main className="h-full">
            <Navbar className="absolute top-0" />
            {children}
            <Footer />
        </main>
    );
}
