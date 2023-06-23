import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import iconSVG, { svgType } from "./svg";

interface LinkBlockProps {
    href: string;
    img?: string;
    link?: boolean;
}

function LinkBlock({ href, img }: LinkBlockProps) {
    const { asPath } = useRouter();
    const t = (asPath === href) ? 'color' : 'gray';
    const [type, setType] = useState<svgType>(t);
    const [down, setDown] = useState(false);
    let id = {};
    if (asPath === href) id = { id: 'select' };
    const imgElement = (
        <div
            {...id}
            onMouseDown={() => {
                setDown(true);
                setType('white');
            }}
            onMouseUp={() => {
                setDown(false);
                setType('gray');
            }}
            onMouseOver={() => setType(down ? 'white' : 'gray')}
            onMouseLeave={() => {
                setDown(false);
                setType(t);
            }}
        >
            <div>
                <img
                    src={`/api/icon?name=${(img || href).slice(1)}&type=${type}`}
                    draggable={false}
                    alt={href}
                />
            </div>
        </div>
    );
    return (<Link href={href}>{imgElement}</Link>);
}

export default function MainCode({ before, children }: {
    before?: React.ReactNode,
    children: React.ReactNode,
}) {
    return (
        <>
            <div id='head'>
                <LinkBlock href='/' img='/icon' />
                <LinkBlock href='/edit' />
                <LinkBlock href='/view' />
                <LinkBlock href='/message' />
                <LinkBlock href='/individual' />
            </div>
            {before}
            <div id='headMargin'>
                {children}
            </div>
        </>
    );
}