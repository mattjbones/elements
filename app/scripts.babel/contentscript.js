'use strict';

import {
  isAction,
  getActionResponse,
  GET_TAGS
} from './messages';
import {
  getVideoTagData
} from './tagger';

const message = message => console.log(`ContentScript: ${message}`);
message('Allo, Allo!');

chrome.runtime.onMessage.addListener(
  (message, sender, sendResponse) => {
    if (isAction(GET_TAGS, message)) {
      const videoTags = getVideoTagData();
      sendResponse(getActionResponse(GET_TAGS, videoTags));
    }
  });

/*
// TODO - content script push of tags?
chrome.runtime.sendMessage({
  greeting: "hello"
}, () => {
  message('sendMessage');
});
*/
/*
document.onload = () => chrome.runtime.sendMessage({
  action: "pageload",
  videoTags: getVideoTagData()
});
*/