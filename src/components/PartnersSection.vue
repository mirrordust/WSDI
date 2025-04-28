<script setup lang="ts">
import PartnerItem from './PartnerItem.vue';
</script>

<template>
  <div class="content-container">
    <h2>
      Regions and Countries
      <br> of Partners and agencies
    </h2>

    <div class="grid">
      <PartnerItem class="agency-china">
        <template #icon>
          <img src="/images/agency/china.png" class="cover" />
        </template>
        <template #name>China</template>
        <ul class="detail-list">
          <li>Beijing Normal University,</li>
          <li>Institute of Atmospheric Sciences at the Chinese Academy of Sciences,</li>
          <li>Tsinghua University, </li>
          <li>Dalian Maritime University, </li>
          <li>Zhejiang University, </li>
          <li>Nanjing University of Information Science & Technology,</li>
          <li>Lanzhou University</li>
        </ul>
      </PartnerItem>

      <PartnerItem class="agency-tanzania">
        <template #icon>
          <img src="/images/agency/tanzania.png" class="cover" />
        </template>
        <template #name>Tanzania</template>
        <ul class="detail-list">
          <li>Tanzania Commission for Science and Technology</li>
        </ul>
      </PartnerItem>

      <PartnerItem class="agency-nepal">
        <template #icon>
          <img src="/images/agency/nepal.png" class="cover" />
        </template>
        <template #name>Nepal</template>
        <ul class="detail-list">
          <li>Department of Hydrology and Meteorology, Nepal</li>
        </ul>
      </PartnerItem>

      <PartnerItem class="agency-thailand">
        <template #icon>
          <img src="/images/agency/thailand.png" class="cover" />
        </template>
        <template #name>Thailand</template>
        <ul class="detail-list">
          <li>Phuket Rajabhat University</li>
        </ul>
      </PartnerItem>

      <PartnerItem class="agency-egypt">
        <template #icon>
          <img src="/images/agency/egypt.png" class="cover" />
        </template>
        <template #name>Egypt</template>
        <ul class="detail-list">
          <li>National Water Research Center, Egypt</li>
        </ul>
      </PartnerItem>

      <PartnerItem class="agency-pakistan">
        <template #icon>
          <img src="/images/agency/pakistan.png" class="cover" />
        </template>
        <template #name>Pakistan</template>
        <ul class="detail-list">
          <li>Pakistan Meteorological Department</li>
        </ul>
      </PartnerItem>
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
  grid-column-gap: 26px;
  row-gap: 30px;
  column-gap: 26px;
  grid-template-areas:
    "China Tanzania"
    "China Nepal"
    "Thailand Egypt"
    "Pakistan .";
}

.agency-china {
  grid-area: China;
}

.agency-tanzania {
  grid-area: Tanzania;
}

.agency-nepal {
  grid-area: Nepal;
}

.agency-thailand {
  grid-area: Thailand;
}

.agency-egypt {
  grid-area: Egypt;
}

.agency-pakistan {
  grid-area: Pakistan;
}

.cover {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.detail-list {
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0;
  color: #0B0717;
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
    padding-top: 60px;
  }
}
</style>
