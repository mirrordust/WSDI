<script setup lang="ts">
import { ref } from 'vue';
import { getMembers } from '@/api/fake';

import MemberItem from './MemberItem.vue';

const members = ref(getMembers())
</script>

<template>
  <div class="content-container">
    <h2>Members</h2>

    <div class="grid">
      <MemberItem v-for="member in members" :home-page="member.homePage" :key="member.id">
        <template #photo>
          <img :src="member.photo" class="cover">
        </template>
        <template #name>{{ member.name }}</template>
        {{ member.intro }}
      </MemberItem>
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>
.divider {
  border-bottom: 1px solid #D7D7D7;
  width: 100%;
  height: 0;
}

h2 {
  font-weight: 600;
  font-size: 48px;
  /* line-height: 100%; */
  letter-spacing: 0;
  color: #0B0717;
}

.grid {
  display: grid;
  grid-row-gap: 30px;
  grid-column-gap: 20px;
  row-gap: 30px;
  column-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(400px, auto);
}

.cover {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media (min-width: 1024px) {
  .content-container {
    padding-left: 6.25%;
    padding-right: 6.25%;
  }

  .divider {
    padding-top: 100px;
  }

  h2 {
    padding-top: 60px;
  }

  .grid {
    padding-top: 30px;
  }
}
</style>
