<script setup lang="ts">
defineProps({
  image: {
    type: String,
    requird: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="news-item">
    <div class="image">
      <img :src="image" class="cover" />
    </div>
    <div class="title">{{ title }}</div>
    <div class="date">{{ date }}</div>
  </div>
</template>

<style scoped>
.news-item {
  /* text-decoration: none; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 270px;
  /* height: 340px; */
  border-top: 1.5px solid #dddfdd;
}

.image {
  margin-top: 20px;
  width: 100%;
}

.cover {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.title {
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 20px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #0b0717;

  padding-top: 20px;
}

.date {
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #7f7f7f;

  padding-top: 20px;
}
</style>
