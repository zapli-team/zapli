"use client";

import { AboutSection } from "./components/about-section";
import { ContentSection } from "./components/content-section";
import { HeaderSection } from "./components/header-section";
import { HowSection } from "./components/how-section";

export default function AutomationGuidePage() {
    return (
        <>
            <HeaderSection />
            <ContentSection />
            <HowSection />
            <AboutSection />
        </>
    );
}
