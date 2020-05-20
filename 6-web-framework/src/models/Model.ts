import { AxiosPromise, AxiosResponse } from 'axios';

export interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface Events {
  on(eventName: string, fn: () => void): void;
  trigger(eventName: string): void;
}

export interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  get = this.attributes.get; // This short syntax on works when we have contructor(private attributes: ModelAttributes<T>){} because attributes gets initialize first before this line of code. Otherwise, we should use TS getter
  on = this.events.on;
  trigger = this.events.trigger;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');
    if (typeof id !== 'number') throw new Error('Cannot fetch without an id');

    this.sync
      .fetch(id)
      .then((response: AxiosResponse) => this.set(response.data))
      .catch(() => this.trigger('error'));
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse) => this.trigger('save'))
      .catch(() => this.trigger('error'));
  }
}
