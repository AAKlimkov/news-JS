interface OptionsInterfase {
  [key: string]: string;
}
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

class Loader {
  baseLink: string;
  options: {};
  constructor(baseLink: string, options: {}) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: string; options?: {} },
    callback: (data: drawSourcesInt) => void = () => {
      console.error('No callback for GET response');
    }
  ): void {
    console.log(endpoint);

    this.load({ method: 'GET', endpoint, callback, options });
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`
        );
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl({
    options,
    endpoint,
  }: {
    options: OptionsInterfase;
    endpoint: string;
  }): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;
    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });
    return url.slice(0, -1);
  }

  load({
    method,
    endpoint,
    callback,
    options = {},
  }: {
    method: string;
    endpoint: string;
    callback: (data: drawSourcesInt) => void;
    options?: {};
  }): void {
    fetch(this.makeUrl({ options, endpoint }), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
