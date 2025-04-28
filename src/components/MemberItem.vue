<script setup lang="ts">
defineProps({
  homePage: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <a v-if="homePage" :href="homePage" class="a-member">
    <div class="photo">
      <slot name="photo"></slot>
    </div>

    <div class="name">
      <slot name="name"></slot>
    </div>

    <div class="intro">
      <slot></slot>
    </div>
  </a>

  <div v-else class="a-member">
    <div class="photo">
      <slot name="photo"></slot>
    </div>

    <div class="name">
      <slot name="name"></slot>
    </div>

    <div class="intro">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.a-member {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #f1f4f6;
  width: 300px;
  height: 400px;
}

.photo {
  width: 100%;
}

.name {
  padding-top: 20px;
  padding-left: 20px;
  font-weight: 600;
  font-size: 32px;
  /* line-height: 100%; */
  letter-spacing: 0;
  color: #0b0717;
}

.intro {
  padding-top: 4px;
  padding-left: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 40px;
  letter-spacing: 0;
  color: #0b0717;
}
</style>
