import { store } from "../../../global.js"
export function navigationTemplate() {
  return `
   <header>
    <nav>
      <button @click="path('/')">Home</button>
      <button @click="path('/musicpool')">Music</button>
      <button @click="path('/reader')">Reader</button>
      <button @click="path('/home')">Home II</button>
      <button @click="path('/upcoming')">Upcoming</button>
      <button @click="path('/your')">Undefined</button>      
    </nav>
  </header>

  `;
}