import Link from "next/link";
import { useRouter } from "next/router";

interface LinkBlockProps {
    href: string;
    img?: string;
    link?: boolean;
}

function LinkBlock({ href, img }: LinkBlockProps) {
    const { asPath } = useRouter();
    let selected = asPath === href;
    let id = {};
    if (selected) id = { id: 'select' };
    const imgElement = (
        <img
            src={'/icons' + (img || href) + (selected ? '' : '-gray') + '.svg'}
            alt={href}
            {...id}
        />
    );
    return (<Link href={href}>{imgElement}</Link>);
}

export default function MainCode({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div id='head'>
                <LinkBlock href='/' img='/icon' />
                <LinkBlock href='/edit' />
                <LinkBlock href='/view' />
                <LinkBlock href='/message' />
                <LinkBlock href='/individual' />
            </div>
            <div id='headMargin'>
                {children}
            </div>
        </>
    );
}