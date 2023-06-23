import titles from "./i18n/config";

export default function getTitle(lo: string, path: string): string {
    return titles.title[lo] + (path !== '/' ? ` - ${titles[path.slice(1)][lo]}` : '');
}