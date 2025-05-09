import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useLocationStore = defineStore('location', () => {
  const hasChinese = ref({
    unesco: true,
    index: false,
  })

  const keys = computed(() => Object.keys(hasChinese.value).length)

  return { hasChinese, keys }
})
