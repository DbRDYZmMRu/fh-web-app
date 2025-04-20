import { store} from "../../../global.js"
export function headerTemplate() {
  return `
   <header>
    <h1>Music & Poetry App</h1>
      <main>
        <div v-if="store.route === '/home'">
          <h2>Welcome to the Home Page</h2>
        </div>
        <div v-if="store.route === '/music'">
          <h2>Music Section</h2>
        </div>
        <div v-if="store.route === '/poetry'">
          <h2>Poetry Section</h2>
        </div>
        <div v-if="store.route === '/reader'">
          <h2>Reader Section</h2>
        </div>
        <div v-if="store.route === '/upcoming'">
          <h2>upcoming Page</h2>
        </div>
      </main>
  </header>
  `;
}