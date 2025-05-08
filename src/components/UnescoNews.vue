<script setup lang="ts">
import UnescoNewsItem from './UnescoNewsItem.vue'
</script>

<template>
  <div class="content-container">
    <h2>News</h2>

    <div class="all-news">
      <UnescoNewsItem
        image="/images/unesco_news/kickoff_meeting.png"
        title="SEPRESS Kickoff Meeting, Online"
        date=" April 21, 2025"
      />
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>
.content-container {
  padding-left: 6.25%;
  padding-right: 6.25%;
}

h2 {
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 48px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #0b0717;

  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 60px;
}

.all-news {
  padding-left: 30px;
}

.divider {
  border-bottom: 1.5px solid #dddfdd;
  width: 100%;
  height: 0;
  padding-top: 262px;
}

@media (min-width: 1024px) {
}
</style>
