//Components
import Link from "next/link";
import { NextSeo } from "next-seo";
import MainCode from "@/components/main";
import ImgBar from "@/components/imgBar";
import Card from "@/components/card";

//Style
import style from '@/styles/Index.module.scss';

//Methods
import { useRouter } from "next/router";
import getTitle from "@/components/title";

export default function Index() {
    const { locale, defaultLocale = 'zh-CN', asPath } = useRouter();
    const lo = locale || defaultLocale;
    return (
        <MainCode>
            <NextSeo
                title={getTitle(lo, asPath)}
            />
            <ImgBar imgs={[
                'https://schale.gg/images/background/BG_ReceptionRoom.jpg',
                'https://slouchwind.tk/background-small.jpg',
                'https://slouchwind.tk/background-small.jpg',
            ]} />
            <Link href='/view' id={style.more}>更多&gt;&gt;</Link>
            <br />
            <div className={style.card}>
                <Card
                    name='石壕吏'
                    content={<>暮投石壕村，有吏夜捉人。老翁逾墙走，老妇出门看。吏呼一何怒！妇啼一何苦！听妇前致词：三男邺城戍。一男附书至，二男新战死。存者且偷生，死者长已矣！室中更无人，惟有乳下孙。有孙母未去，出入无完裙。老妪力虽衰，请从吏夜归。急应河阳役，犹得备晨炊。夜久语声绝，如闻泣幽咽。天明登前途，独与老翁别。</>}
                    profile='https://slouchwind.tk/background-small.jpg'
                    img='https://slouchwind.tk/background-small.jpg'
                />
                <Card
                    name='出师表'
                    content={<>先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。</>}
                    profile='https://slouchwind.tk/background-small.jpg'
                    img='https://slouchwind.tk/background-small.jpg'
                />
                <Card
                    name='你干嘛'
                    content={<>你干嘛，哈哈，诶呦！！</>}
                    profile='https://slouchwind.tk/background-small.jpg'
                    img='https://slouchwind.tk/background-small.jpg'
                />
                <Card
                    name='测试'
                    content={<>
                        1
                        2
                        3
                        4
                        5
                        66666666666666666666666
                        777777777777777777777777777777
                        8888888888888888888888888888888888888
                        99999999999999999999999999999999999999999
                    </>}
                    profile='https://slouchwind.tk/background-small.jpg'
                    img='https://slouchwind.tk/background-small.jpg'
                />
            </div>
        </MainCode>
    );
}