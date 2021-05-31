import { Component } from '../app.api';

export class Page implements Component {
  private readonly page: HTMLElement;

  constructor(root: Element | null) {
    this.page = document.createElement('div');
  }

  render(): Element {
    return this.page;
  }
}
