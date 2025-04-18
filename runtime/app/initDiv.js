import { store } from "../../global.js";
export function initDiv() {
  const appDiv = document.createElement('div');
  appDiv.id = 'app';
  
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Hello World';
  
  appDiv.appendChild(paragraph);
  
  document.body.appendChild(appDiv);
}