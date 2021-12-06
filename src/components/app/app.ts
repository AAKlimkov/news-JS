import AppController from '../controller/controller';
import { AppView } from '../view/appView';

interface DataInt {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
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

class App {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    document.querySelector('.sources').addEventListener('click', (e) => {
      this.controller.getNews({ e, callback: (data: drawNewsInt | drawNewsInt) => this.view.drawNews(data) }      );
    });
    this.controller.getSources((data: drawSourcesInt) => {
      this.view.drawSources(data);
    });
  }
}

export default App;
