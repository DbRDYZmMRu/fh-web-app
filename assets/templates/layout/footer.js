import { baseDiv } from "../../../runtime/app/baseDiv.js";

const headerDiv = document.createElement('div');
    const headerTemplate = `
    <h2>Dynamic HTML Block</h2>
    <p>This is a paragraph of text.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  `;

  headerDiv.innerHTML = headerTemplate;
  baseDiv.appendChild(headerDiv);

