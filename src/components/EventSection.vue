<script setup lang="ts"></script>

<template>
  <div class="an-event">
    <div class="image">
      <slot name="image"></slot>
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
.an-event {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 406px;
}

.image {
  width: 100%;
  height: 230px;
  overflow: hidden;
}

.name {
  padding-top: 18px;
  font-weight: 500;
  font-size: 32px;
  /* line-height: 100%; */
  letter-spacing: 0;
  color: #0b0717;
}

.intro {
  padding-top: 8px;
  font-weight: 400;
  font-size: 20px;
  /* line-height: 100%; */
  letter-spacing: 0;
  color: #0b0717;
}

@media (min-width: 1024px) {
}
</style>
