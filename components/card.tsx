import style from '@/styles/Index.module.scss';

interface CardProps {
    name: string;
    content: JSX.Element;
    profile: string;
    img: string;
}

export default function Card({ name, content, profile, img }: CardProps) {
    let contentText: string = content.props.children;
    if (contentText.length > 140) contentText = contentText.slice(0, 140) + '...';
    let contentArray: string[] = contentText.split(' ');
    return (
        <div>
            <div className={style.info}>
                <p className={style.name}>{name}</p>
                <img src={profile} alt='profile' />
            </div>
            <div className={style.content}>
                <>
                    {contentArray.map((v, i) => {
                        return <p key={i}>{v}<br /></p>;
                    })}
                </>
            </div>
            <div className={style.img}>
                <img src={img} alt='content' />
                <div className={style.icons}>
                    <img src='/icons/star.svg' alt='star' />
                    <img src='/icons/like.svg' alt='like' />
                    <img src='/icons/say.svg' alt='say' />
                </div>
            </div>
        </div>
    );
}