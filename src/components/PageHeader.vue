<script setup lang="ts">
import IconUst from './icons/IconUst.vue'

import { ref, onMounted, onUnmounted, computed } from 'vue'
// import { useLocationStore } from '@/stores/location'

// const locationStore = useLocationStore()
const scrollY = ref(0)
const opacity = ref(0)

const handleScroll = () => {
  const currentY = window.scrollY || document.documentElement.scrollTop
  scrollY.value = currentY
  opacity.value = Math.min(currentY / 200, 1)
}

const hasScrolled = computed(() => {
  return scrollY.value > 20 ? true : false
})

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header class="header" :class="{ 'has-bg': hasScrolled, 'header-small': hasScrolled }">
    <div class="left">
      <a href="https://www.ust.hk" class="flex-item ust" style="text-decoration: none">
        <IconUst class="svg svg-ust" />
      </a>
    </div>

    <div class="right">
      <!-- <div v-if="locationStore.hasChinese.unesco">English</div> -->
    </div>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 2px solid #dddfdd;
}

@media (max-width: 1024px) {
  .header {
    padding-left: 4%;
    padding-top: 4%;
    padding-bottom: 2%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .svg {
    display: block;
    width: 100%;
    height: auto;
  }
}

@media (min-width: 1024px) {
  .header {
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 40px;
    padding-bottom: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      transform: translateY(-20px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .has-bg {
    background-color: #ffffff;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
  }

  .header-small {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .svg {
    /* SVG元素是一个inline类型的标签,
     * 浏览器会为标签之间的换行和空格, 生成一个看不见的空文本节点,
     * 这个空的文本节点占据了位置, 增加了一个看不见的高度 */
    display: block;
    /* 让svg随着屏幕尺寸缩放 */
    width: 100%;
    height: auto;
  }

  .right {
    display: flex;
  }
}
</style>
