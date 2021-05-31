import { Component } from './app.api';
import { Page } from './pages/page';

export class App implements Component {
  private readonly application: Element;

  constructor(private readonly root: Element | null) {
    this.application = document.createElement('div');
    this.application.classList.add('app-wrapper');
  }

  render(): void {
    this.root?.append(this.application);
    this.application.append(new Page(this.application).render());
  }
}
