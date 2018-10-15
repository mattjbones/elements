<template>
    <div>
        <h2>Found {{ videos.length }} Video{{ videos.length !== 1 ? 's' : '' }} </h2>
        <ul>
            <video-item v-for="(video, index) in videos" 
                :key="index" 
                :video="video"
                :index="index"
            />
        </ul>
    </div>
</template>

<style scoped>
h2 {
  font-size: 12px;
}
ul {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: stretch;
}
</style>

<script src='./popup.js'></script>