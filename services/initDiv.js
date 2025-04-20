import { store } from "../../global.js";
export function initDiv() {
  const mainDiv = `  
  
   <header>
    <h1>Music & Poetry App</h1>
    <nav>
      <button @click="path('/')">Home</button>
      <button @click="path('/musicpool')">Music</button>
      <button @click="path('/reader')">Reader</button>
      <button @click="path('/home')">Home II</button>
      <button @click="path('/upcoming')">Upcoming</button>
      <button @click="path('/your')">Undefined</button>      
    </nav>
  </header>

  
  <p>{{store.someValue}} is okay</p>
  <p>{{store}} is okay</p>
  <input v-model="store.someValue" type="text" name="" id="" value="" />
  
  <p @click="store.getDate()">click here</p>
  
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
  
    <p>Main App: IP Access is {{ store.IPAccess ? 'Enabled' : 'Disabled' }}</p>
  <p>{{ store.workPlan }}</p>
  <button @click="store.toggleIPAccess()">Toggle IP Access</button>
  
  
  


  `;
  
  
  document.body.innerHTML += mainDiv;
}



