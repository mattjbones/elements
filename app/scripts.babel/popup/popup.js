import VideoItem from './video/item/VideoItem.vue';
export default {
  data() {
    return {
      videos: []
    };
  },
  components: {
    VideoItem
  },
  created() {
    this.getVideos();
  },
  methods: {
    getVideos() {
      if (chrome && chrome.runtime && chrome.runtime.getBackgroundPage) {
        chrome.runtime.getBackgroundPage(page => {
          const activeVideoTags = page.getActiveVideoTags();
          this.videos = activeVideoTags;
        });
      } else {
        this.videos.push({
          id: "a video",
          src: "some src"
        });
        this.videos.push({
          id: "another",
          src: "some src"
        });
        this.videos.push({
          id: "a video",
          src: "some src"
        });
        this.videos.push({
          id: "a video",
          src: "some src"
        });
        this.videos.push({
          id: "another",
          src: "some src"
        });
        this.videos.push({
          id: "a video",
          src: "some src"
        });
        this.videos.push({
          id: "another",
          src: "some src"
        });
        this.videos.push({
          id: "a video",
          src: "some src"
        });
        this.videos.push({
          id: "another",
          src: "some src"
        });
      }
    }
  }
};