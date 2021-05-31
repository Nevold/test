import './style.css';
import { App } from './app/app';

const app = document.createElement('div');
app.classList.add('root');
document.body.append(app);

const rootNode = document.querySelector('div');
new App(rootNode).render();
