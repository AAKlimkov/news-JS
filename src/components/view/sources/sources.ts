import './sources.css';

interface DataInt {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

class Sources {
  draw(data: Array<DataInt>): void {
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const sourceItemTemp = document.querySelector(
      '#sourceItemTemp'
    ) as HTMLTemplateElement;

    data.forEach((item: DataInt) => {
      const sourceClone = sourceItemTemp.content.cloneNode(
        true
      ) as HTMLTemplateElement;

      sourceClone.querySelector('.source__item-name').textContent = item.name;
      sourceClone
        .querySelector('.source__item')
        .setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources').append(fragment);
  }
}

export default Sources;
