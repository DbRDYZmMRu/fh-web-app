import { reactive } from "./lib/petite-vue.js";

// Config Data to set the app's data and methods
const config = reactive({
  BASE_URL: '/',
  routeView: '', 
  route: "home",
  routeView: "null",
  cssFiles: [],
  jsFiles: [],
  pageComponents: [],
  renderCount: 0,
  IPAccess: false,
  workPlan: "is to get more modules",
  initialCountNo: 10,
  someValue: 'initial value',
  doNothing() {
    console.log("clixked");
  },
  
  
  // Page Resources like CSS and JS
  resources: {
    index: {
      path: '/home', 
      view: {
        primary: '../assets/templates/route/index.js',
      }, 
      images: {
        albumCover1: 'assets/images/logo.png',
        albumCover2: 'assets/images/albums/colourfullight.jpg',
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    },
    publications: {
      path: '/publications', 
      view: {
        primary: '../assets/templates/route/publications.js',
      }, 
      images: {
        albumCover1: 'assets/images/logo.png',
        albumCover2: 'assets/images/albums/colourfullight.jpg',
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    },
    
    musicpool: {
      path: '/musicpool', 
      view: {
        primary: '../assets/templates/route/musicpool.js',
      }, 
      images: {
        albumCover1: 'assets/images/logo.png',
        albumCover2: '../../assets/images/albums/colourfullight.jpg',
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    },
    bio: {
      path: '/bio', 
      view: {
        primary: '../assets/templates/route/bio.js',
      }, 
      images: {
        albumCover1: 'assets/images/logo.png',
        albumCover2: 'assets/images/albums/colourfullight.jpg',
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    }, 
    upcoming: {
      path: '/upcoming', 
      view: {
        primary: '../assets/templates/route/upcoming.js',
      }, 
      images: {
        albumCover1: 'assets/images/logo.png',
        albumCover2: 'assets/images/albums/colourfullight.jpg',
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    }, 
    cookies: {
      path: '/cookies', 
      view: {
        primary: '../assets/templates/route/cookies.js',
      }, 
      images: {
        albumCover1: 'assets/images/logo.png',
        albumCover2: 'assets/images/albums/colourfullight.jpg',
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    }, 
    notFound: {
      path: '/notFound', 
      view: {
        primary: '../assets/templates/route/notFound.js',
      }, 
      images: {
        albumCover1: 'assets/images/logo.png',
        albumCover2: 'assets/images/albums/colourfullight.jpg',
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    }
  }
});

export default config;
