<script setup lang="ts"></script>

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
@media (max-width: 1024px) {
  .an-agency {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: #f1f4f6;
    padding: 20px;
    margin: 5px auto;
  }

  .roc-img {
    max-width: 100px;
    max-height: 100px;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
  }

  .roc-name {
    font-weight: 600;
    font-size: 26px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #0b0717;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

@media (min-width: 1024px) {
  .an-agency {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: #f1f4f6;
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
    color: #0b0717;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
