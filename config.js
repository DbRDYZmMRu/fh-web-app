import { reactive } from "./lib/petite-vue.js";

const config = reactive({
  BASE_URL: '/',
  route: "home",
  routeView: "null",
  cssFiles: [],
  jsFiles: [],
  pageComponents: [],
  myCount: 0,
  IPAccess: false,
  workPlan: "is to get more modules",
  initialCountNo: 10,
  someValue: 'initial value',
  doNothing() {
    console.log("clixked");
  },
  resources: {
    albumsPage: {
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
      images: {
        upcomingAlbumCover: 'path/to/upcoming-album-cover.jpg',
      },
      media: {
        upcomingSong: 'path/to/upcoming-song.mp3',
      },
      json: {
        upcomingData: 'path/to/upcoming-data.json',
      }
    }
  }
});

export default config;
