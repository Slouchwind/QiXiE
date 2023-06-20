import style from '@/styles/Index.module.scss';
import { useState } from "react";

export default function ImgBar({ imgs }: { imgs: string[] }) {
    const [num, setNum] = useState(0);
    setTimeout(() => setNum(num + 1), 3000);
    const selectBar = imgs.map((_, i) => <div id={(num + 1) % 3 === i ? style.select : ''} key={i} />);
    return (
        <div id={style.imgBar}>
            <div><img src={imgs[num % 3]} alt={`img-bar-${imgs[num % 3]}`} /></div>
            <div id={style.front} >
                <img src={imgs[(num + 1) % 3]} alt={`img-bar-${imgs[(num + 1) % 3]}`} />
                <div id={style.selectBar}>{selectBar}</div>
            </div>
            <div><img src={imgs[(num + 2) % 3]} alt={`img-bar-${imgs[(num + 2) % 3]}`} /></div>
        </div>
    );
}