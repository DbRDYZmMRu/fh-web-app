Auto-Adding Components
To automatically add all components from the `template.js` file and render them, you can modify the code as follows:

```
import { store } from "../../global.js";
import { templates } from './templates.js';

// Create the base div
export const baseDiv = document.createElement('div');
baseDiv.id = 'body';
document.body.appendChild(baseDiv);

function renderComponents() {
  let html = '';
  Object.keys(templates).forEach((componentId) => {
    store.pageComponents.push(componentId);
    html += templates[componentId].template;
  });
  store.pageComponents = [...new Set(store.pageComponents)];
  baseDiv.innerHTML = html;
}

// Initial render
renderComponents();
```

Explanation
1. *Auto-add components*: The `renderComponents` function now iterates over all components in the `templates` object and adds them to the `store.pageComponents` array.
2. *Remove duplicates*: The `store.pageComponents` array is updated to remove any duplicate component IDs.

This code will automatically add all components from the `template.js` file and render them.

If you want to keep the `addComponent` function for dynamic component addition, you can modify the code as follows:

```
function addComponent(componentId) {
  if (!store.pageComponents.includes(componentId)) {
    store.pageComponents.push(componentId);
  }
  renderComponents();
}

function renderComponents() {
  let html = '';
  store.pageComponents.forEach((componentId) => {
    html += templates[componentId].template;
  });
  baseDiv.innerHTML = html;
}

// Auto-add all components initially
Object.keys(templates).forEach((componentId) => {
  addComponent(componentId);
});
```

This way, you can still dynamically add components using the `addComponent` function.











function addComponent(componentId) {
  if (!store.pageComponents.includes(componentId)) {
    store.pageComponents.push(componentId);
    renderComponents();
  } else {
    renderComponents();
  } 
}

function renderComponents() {
  const element = document.getElementById('body');
  let html = '';
  store.pageComponents.forEach((componentId) => {
    html += templates[componentId].template;
  });
  element.innerHTML = html;

}

// Initial render
renderComponents();

// Add innerBody component
addComponent('innerBody');
