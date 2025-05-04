<script setup lang="ts">
import { ref } from 'vue'
import { getMembers } from '@/api/data'
import MemberItem from './MemberItem.vue'

const memberList = ref(getMembers())
</script>

<template>
  <div class="content-container">
    <h2>Members</h2>

    <div class="grid">
      <MemberItem v-for="member in memberList" :home-page="member.homePage" :key="member.id">
        <template #photo>
          <img :src="member.photo" class="cover" />
        </template>
        <template #name>{{ member.name }}</template>
        {{ member.intro }}
      </MemberItem>
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-column-gap: 20px;
  column-gap: 20px;
  grid-row-gap: 30px;
  row-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
  grid-auto-rows: minmax(400px, auto);
  padding-top: 30px;
}

.cover {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .content-container {
    padding-left: 6.25%;
    padding-right: 6.25%;
  }

  h2 {
    font-weight: 500;
    font-size: 26px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #0b0717;
    padding-top: 20px;
  }

  .divider {
    border-bottom: 1px solid #d7d7d7;
    width: 100%;
    height: 0;
    padding-top: 30px;
  }
}

@media (min-width: 1024px) {
  .content-container {
    padding-left: 6.25%;
    padding-right: 6.25%;
  }

  h2 {
    font-weight: 600;
    font-size: 48px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #0b0717;
    padding-top: 60px;
  }

  .divider {
    border-bottom: 1px solid #d7d7d7;
    width: 100%;
    height: 0;
    padding-top: 100px;
  }
}
</style>
