<script setup lang="ts">
defineProps({
  homePage: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    requird: true,
  },
  name: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a v-if="homePage" :href="homePage" class="wg-member">
    <div class="photo">
      <img :src="photo" class="cover" />
    </div>

    <div class="name">{{ name }}</div>

    <div class="area">{{ area }}</div>
  </a>

  <div v-else class="wg-member">
    <div class="photo">
      <img :src="photo" class="cover" />
    </div>

    <div class="name">{{ name }}</div>

    <div class="area">{{ area }}</div>
  </div>
</template>

<style scoped>
.wg-member {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #f1f4f6;
  width: 236px;
  height: 340px;
  border-radius: 12px;
  overflow: hidden;
}

.photo {
  width: 100%;
}

.cover {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.name {
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #0b0717;

  padding-top: 20px;
  padding-left: 20px;
}

.area {
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 18px;
  line-height: 40px;
  letter-spacing: 0%;
  color: #0b0717;

  padding-top: 4px;
  padding-left: 20px;
}
</style>
