<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: false,
  },
  image_link: {
    type: String,
    requird: true,
  },
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="inst-item">
    <div class="image">
      <img :src="image_link" class="cover" />
    </div>

    <div class="intro">
      <div class="name">{{ name }}</div>
    </div>
  </div>
</template>

<style scoped>
.inst-item {
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  width: 610px;
  border: 1px solid #dddfdd;
  align-items: center;
}

.image {
  height: 120px;
  width: 120px;
  margin: 24px;
}

.cover {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.intro {
  padding-top: 24px;
}

.name {
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 20px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #0b0717;
}

@media (min-width: 1024px) {
}
</style>
