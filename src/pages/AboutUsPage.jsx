import { useEffect } from "react";
import { Box } from "@mui/material";
import AboutUs from "../components/about/AboutUs";
import FaqSection from "../components/about/FaqSection";
import CtaSection from "../components/home/CtaSection";

function AboutUsPage() {
    useEffect(() => {
        // Update page title
        document.title = "Om oss | Rogaland Hage & Byggeservice";
    }, []);

    return (
        <Box component="section">
            <AboutUs />
            <FaqSection />
            <CtaSection />
        </Box>
    );
}

export default AboutUsPage;
