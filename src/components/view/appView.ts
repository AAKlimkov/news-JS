import News from './news/news';
import Sources from './sources/sources';

interface DataInt {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}
interface NewsInterface {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}
interface drawNewsInt {
  articles: Array<NewsInterface>;
  status: string;
  totalResults: number;
}
interface drawSourcesInt {
  id: string;
  sources: Array<DataInt>;
}

export class AppView {
  news: News;
  sources: Sources;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: drawNewsInt): void {
    console.log(data);

    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }
  drawSources(data: drawSourcesInt): void {
    console.log(data);
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
