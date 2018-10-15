import EImage from '../image/EImage.vue';
import ElementDetails from './details/ElementDetails.vue';

export default {
  name: "VideoItem",
  components: {
    ElementDetails,
    EImage
  },
  props: {
    index: {
      default: () => 0,
      required: true
    },
    video: {
      default: () => {}
    }
  }
};