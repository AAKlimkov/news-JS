import AppLoader from './appLoader';
interface DataInt {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}
interface drawSourcesInt {
  id: string;
  sources: Array<DataInt>;
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

class AppController extends AppLoader {
  getSources(callback: (data: drawSourcesInt | drawNewsInt) => void): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews({
    e,
    callback,
  }: {
    e: Event;
    callback: (data: drawSourcesInt | drawNewsInt) => void;
  }): void {
    console.log(e);

    let target = e.target as HTMLTemplateElement;
    const newsContainer = e.currentTarget as HTMLTemplateElement;
    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLTemplateElement;
    }
  }
}

export default AppController;
