import { store } from "../../global.js";
export function initDiv() {
  const mainDiv = `  
<div id="body">
  <!-- Header Section -->
  <div id="body-header">
    <header>
      <!-- Add header content here -->
      <h1>Website Title {{store.route}} </h1>
      
    </header>
  </div>

  <!-- Navigation Section -->
  <div id="body-navigation">
    <nav>
      <!-- Add navigation links here -->
      <ul>
        <li><button @click="path('/')">Home</button></li>
        <li><button @click="path('/musicpool')">Music</button></li>
        <li><button @click="path('/reader')">Reader</button></li>
        <li><button @click="path('/home')">Home II</button></li>
        <li><button @click="path('/upcoming')">Upcoming</button></li>
        <li><button @click="path('/your')">Undefined</button></li>
      </ul>
    </nav>
  </div>

  <!-- Main Content Section -->
  <div id="body-main">
    <main id="main-content">
      <!-- Dynamic content will be inserted here based on routes -->
  <main>
    <div v-if="store.route === 'home'">
      <h2>Welcome to the Home Page</h2>
    </div>
    <div v-if="store.route === 'music'">
      <h2>Music Section</h2>
    </div>
    <div v-if="store.route === 'poetry'">
      <h2>Poetry Section</h2>
    </div>
    <div v-if="store.route === 'reader'">
      <h2>Reader Section</h2>
    </div>
    <div v-if="store.route === 'upcoming'">
      <h2>upcoming Page</h2>
    </div>
  </main>

    </main>
  </div>

  <!-- Footer Section -->
  <div id="body-footer">
    <footer>
      <!-- Add footer content here -->
      <p>&copy; 2025 Your Company. All rights reserved.</p>
    </footer>
  </div>
</div>
  `;
  
  
  document.body.innerHTML += mainDiv;
}