'use strict';
import {
  getActionMessage,
  GET_TAGS,
  getPayloadFromResponse
} from './messages';
const message = message => console.log(`Background: ${message}`);
let activeVideoTags;
const getTagsFromTab = tabId =>
  chrome.tabs.sendMessage(tabId, getActionMessage(GET_TAGS), response => {
    if (!response) return;
    const videoTags = getPayloadFromResponse(response);
    videoTags.map(video => message(JSON.stringify(video, undefined, '  ')));
    activeVideoTags = videoTags;
    if (videoTags.length > 0) {
      chrome.pageAction.show(tabId);
      chrome.pageAction.setTitle({
        tabId,
        title: `Found ${videoTags.length} videos`
      });
    }
  });

chrome.tabs.onActivated.addListener(activeInfo => getTagsFromTab(activeInfo.tabId));
chrome.runtime.onInstalled.addListener(details => message('previousVersion', details.previousVersion));
chrome.tabs.onUpdated.addListener(tabId => getTagsFromTab(tabId));

//accessor for popup.js - should move to storage
window.getActiveVideoTags = () => {
  return activeVideoTags;
};

/*
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    message(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    const {
      action,
      videoTags
    } = request;
    message(`action ${action}`);
    message(`videoTags ${videoTags}`);

  });
*/
/*
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // triggered on page reload
  // listen to status = complete to rerun video code
  message(`onupdated ${JSON.stringify(changeInfo)}`);
});
*/