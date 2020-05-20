import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
  constructor(
    protected parent: Element,
    protected collection: Collection<T, K>
  ) {}

  protected abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');

    for (let model of this.collection.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    }

    this.parent.append(templateElement.content);
  }
}
