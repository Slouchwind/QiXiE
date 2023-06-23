//Components
import { NextSeo } from "next-seo";
import MainCode from "@/components/main";

//Style
import style from '@/styles/View.module.scss';

//i18n
import { useLocale } from "@/components/i18n";
import view from "@/components/i18n/config/view";

//Methods
import getTitle from "@/components/title";

export default function View() {
    const { lo, asPath } = useLocale(view);
    return (
        <MainCode>
            <NextSeo
                title={getTitle(lo, asPath)}
            />
        </MainCode>
    );
}