export const getVideoTagData = () => {
  const videoTags = document.getElementsByTagName('video');
  const videoTagCount = videoTags.length;
  const processed = [];
  for (let i = 0; i < videoTagCount; i++) {
    const {
      playbackRate,
      id,
      volume,
      currentTime,
      currentSrc,
      controls,
      paused,
      duration
    } = videoTags.item(i);
    processed.push({
      controls,
      currentSrc,
      currentTime,
      duration,
      playbackRate,
      id,
      volume,
      paused
    });
  }
  return processed;
};