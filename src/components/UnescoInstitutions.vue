<script setup lang="ts">
import { ref } from 'vue'
import { getLeadInstitutions, getCoreInstitutions, getAgencies } from '@/api/unesco_data'
import UnescoInstitutionItem from './UnescoInstitutionItem.vue'
import UnescoAgencyItem from './UnescoAgencyItem.vue'

const leadInstList = ref(getLeadInstitutions())
const coreInstList = ref(getCoreInstitutions())
const agencyList = ref(getAgencies())
</script>

<template>
  <div class="content-container">
    <h2>Institutions</h2>

    <h3 class="lead">2 Lead Institution</h3>
    <div class="lead-inst-container">
      <UnescoInstitutionItem
        v-for="inst in leadInstList"
        :key="inst.id"
        :image_link="inst.image"
        :name="inst.name"
        :contacts="inst.contacts"
        :class="inst.abbr"
      />
    </div>

    <h3 class="core">6 Core Institution</h3>
    <div class="core-inst-container">
      <UnescoInstitutionItem
        v-for="inst in coreInstList"
        :key="inst.id"
        :image_link="inst.image"
        :name="inst.name"
        :contacts="inst.contacts"
        :class="inst.abbr"
      />
    </div>

    <h3 class="agency">5 Partners and Agencies</h3>
    <div class="agency-container">
      <UnescoAgencyItem
        v-for="agency in agencyList"
        :key="agency.id"
        :image_link="agency.image"
        :name="agency.name"
        :class="agency.abbr"
      />
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>
.content-container {
  padding-left: 90px;
  padding-right: 90px;
}

h2 {
  font-family: Poppins;
  font-weight: 600;
  font-size: 48px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #0b0717;

  padding-top: 40px;
}

h3 {
  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0%;
  color: #0b0717;

  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 20px;
}

.agency {
  padding-top: 80px;
}

.lead-inst-container {
  display: flex;
  /* 行间距 列间距 */
  gap: 20px 40px;
  flex-wrap: wrap;
  align-items: center;
}

.core-inst-container {
  display: flex;
  gap: 20px 40px;
  flex-wrap: wrap;
  align-items: center;
}

.agency-container {
  display: flex;
  gap: 20px 40px;
  flex-wrap: wrap;
  align-items: center;
}

.bnu :deep(.name) {
  padding-right: 46px;
}

.iap :deep(.name) {
  padding-right: 36px;
}

.divider {
  border-bottom: 1.5px solid #dddfdd;
  width: 100%;
  height: 0;
  padding-top: 140px;
}
@media (min-width: 1024px) {
}
</style>
