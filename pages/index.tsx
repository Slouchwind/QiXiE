//Components
import { NextSeo } from "next-seo";
import MainCode from "@/components/main";

//Style
import styles from '@/styles/Index.module.scss';

//i18n
import { useLocale } from "@/components/i18n";
import index from "@/components/i18n/config/indexConfig";

//Methods
import getTitle from "@/components/title";

export default function Home() {
    const { lo, asPath } = useLocale(index);
    return (
        <MainCode>
            <NextSeo
                title={getTitle(lo, asPath)}
            />
            <div id={styles.back} />
            <div id={styles.content}>
                <img src='/text.svg' />
                <div id={styles.hr} />
                <button>Get Started</button>
            </div>
        </MainCode>
    );
}