//Components
import { NextSeo } from "next-seo";
import MainCode from "@/components/main";

//Style
import style from '@/styles/View.module.scss';

//Methods
import { useRouter } from "next/router";
import getTitle from "@/components/title";

export default function View() {
    const { locale, defaultLocale = 'zh-CN', asPath } = useRouter();
    const lo = locale || defaultLocale;
    return (
        <MainCode>
            <NextSeo
                title={getTitle(lo, asPath)}
            />
        </MainCode>
    );
}