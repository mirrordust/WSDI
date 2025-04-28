<script setup lang="ts">
</script>

<template>
  <div class="an-agency">
    <div class="roc-img">
      <slot name="icon"></slot>
    </div>

    <div class="roc-name">
      <slot name="name"></slot>
    </div>

    <div class="poa">
      <!-- <ul>
            <li></li>
        </ul> -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.an-agency {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #F1F4F6;
  padding: 32px;
}

.roc-img {
  /* width: 126px; */
  /* height: 126px; */
  max-width: 126px;
  max-height: 126px;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
}

.roc-name {
  font-weight: 600;
  font-size: 40px;
  /* line-height: 100%; */
  letter-spacing: 0;
  color: #0B0717;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
