import React from "react";

import { Navbar } from "@/components/navbar";

export default function PagesLayout({ children }: React.PropsWithChildren) {
    return (
        <main className="h-full">
            <Navbar />
            <div className="py-10">{children}</div>
        </main>
    );
}
