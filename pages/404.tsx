import { NextSeo } from "next-seo";
import MainCode from "@/components/main";

export default function NotFound() {
    return (
        <MainCode>
            <NextSeo
                title='404 Not Found'
            />
            <p style={{ textAlign: 'center' }}>404 Not Found</p>
        </MainCode>
    );
}