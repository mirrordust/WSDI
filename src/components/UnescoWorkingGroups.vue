<script setup lang="ts">
import { getUnescoMembers } from '@/api/unesco_data'
import { ref } from 'vue'
import UnescoWGItem from './UnescoWGItem.vue'

const memberList = ref(getUnescoMembers())
</script>

<template>
  <div class="content-container">
    <h2>Working Groups</h2>

    <div class="members">
      <UnescoWGItem
        v-for="member in memberList"
        :key="member.id"
        :home-page="member.homePage"
        :photo="member.photo"
        :name="member.name"
        :area="member.intro"
      />
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>
.content-container {
  padding-left: 6.25%;
  padding-right: 6.25%;
}

h2 {
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 48px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #0b0717;

  padding-top: 40px;
  padding-bottom: 60px;
}

.members {
  display: grid;
  grid-column-gap: 20px;
  column-gap: 20px;
  grid-row-gap: 20px;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
  grid-auto-rows: minmax(340px, auto);
}

.divider {
  border-bottom: 1.5px solid #dddfdd;
  width: 100%;
  height: 0;
  padding-top: 100px;
}

@media (min-width: 1024px) {
}
</style>
