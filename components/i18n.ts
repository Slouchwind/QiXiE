export type i18nObj = {
    'zh-CN': string,
    'zh-TW': string,
    [x: string]: string,
}

export type i18nContents = { [x: string]: i18nObj }

export function fillBlank(i18n: string, ...fills: (string | undefined)[]): string {
    let text = i18n;
    fills.forEach((v, i) => text = text.replace(`$${i}`, v || ''));
    return text;
}

export const titles: i18nContents = {
    title: {
        'zh-CN': '齐谐者',
        'zh-TW': '齊諧者',
    },
    view: {
        'zh-CN': '浏览',
        'zh-TW': '瀏覽',
    },
}