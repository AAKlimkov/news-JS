import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '315ad7202ce24c5fb2bce08b8cb1fb32',
            pageSize: 10 // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
