import { News } from '.';

export interface NewsPage {
    seo: BaseMetaData;
    title: string;
    news: News[];
}
