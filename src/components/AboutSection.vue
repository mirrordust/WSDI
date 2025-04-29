<script setup lang="ts"></script>

<template>
  <div class="content-container">
    <h2>About us</h2>

    <div class="text">
      <span class="name">The World Sustainable Development Institute (WSDI)</span><br />
      a global interdisciplinary institution based at HKUST, is dedicated to harmonizing human
      progress with planetary boundaries through science-driven, actionable solutions. Guided by the
      principles of inclusivity, institutional rigor, and green innovation, WSDI addresses
      humanity’s most urgent challenges—natural disasters, hunger, water scarcity, pollution, and
      biodiversity loss—while advancing renewable energy adoption, ecosystem resilience, and
      equitable resource access.
    </div>
    <div class="divider"></div>

    <div class="text">
      As a nexus for global collaboration, we unite researchers, policymakers, and industry leaders
      to bridge the gap between sustainability research and real-world implementation. Our work
      emphasizes scalable frameworks for disaster risk reduction, climate adaptation, and
      sustainable resource management, ensuring science transcends academic boundaries to empower
      communities worldwide.
    </div>
    <div class="divider"></div>

    <div class="text">
      Central to our mission is fostering cross-sector partnerships that align with the UN
      Sustainable Development Goals (SDGs). Through initiatives like the World Sustainability Annual
      Report (WSAR), we synthesize global insights to guide practical action, though our broader
      focus remains on institutional leadership and green transformation.
    </div>
    <div class="divider"></div>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .content-container {
    padding-left: 6.25%;
    padding-right: 6.25%;
  }

  h2 {
    font-weight: 500;
    font-size: 30px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #0b0717;
    padding-top: 20px;
  }

  .text {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
    color: #0b0717;
    padding-top: 20px;
  }

  .name {
    font-weight: 500;
    color: #0076d0;
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

  .text {
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 0;
    color: #0b0717;
    max-width: 900px;
    padding-top: 60px;
  }

  .name {
    font-weight: 600;
    color: #0076d0;
  }

  div.text:first-of-type {
    padding-top: 40px;
  }

  .divider {
    border-bottom: 1px solid #d7d7d7;
    width: 100%;
    height: 0;
    padding-top: 60px;
  }

  .content-container div.divider:last-of-type {
    padding-top: 108px;
  }
}
</style>
