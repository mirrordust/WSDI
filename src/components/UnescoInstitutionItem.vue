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
  role: {
    type: String,
    required: true,
  },
  contacts: {
    type: Array<string>,
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
      <div class="role">{{ role }}</div>
      <div class="contacts">
        <div v-for="(person, index) in contacts" :key="index" class="person">
          {{ person }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inst-item {
  border-radius: 16px;
  overflow: hidden;
  width: min(610px, 100%);
  border: 1px solid #dddfdd;
}

.image {
  height: 160px;
  width: 160px;
  margin: 24px;
}

.cover {
  width: 160px;
  height: 160px;
  object-fit: contain;
}

.intro {
  /* padding-top: 24px; */
}

.name {
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 20px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #0b0717;

  /* 只给机构名字加右padding, 邮件地址不要 */
  padding-right: 24px;
}

.role {
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #2c67ae;

  padding-top: 16px;
}

.person {
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #7f7f7f;
}

@media (min-width: 1024px) {
  .inst-item {
    display: flex;
    align-items: center;
  }
}
</style>
