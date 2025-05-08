<script setup lang="ts"></script>

<template>
  <div class="content-container">
    <!-- 封面图 -->
    <div class="cover-image">
      <img src="/images/unesco_cover.png" class="cover" />
    </div>
    <div class="txt1">
      UNESCO International Decade of Sciences for Sustainable Development Endorsed
    </div>
    <div class="txt2">
      Seamless Prediction and Services for Sustainable Natural and Built Environment (SEPRESS)
      Program (2025 - 2032)
    </div>
    <!-- Abstract -->
    <h2>Abstract</h2>
    <p class="txt">
      The SEPRESS initiative is tailored to <span>strengthen trust in science</span> by offering
      reliable weather and subseasonal climate prediction services. It aims
      <span>to bridge the gap between scientific advancements and societal needs</span> through an
      <span>equitable and transparent "research-to-operation" (R2O) process</span>. SEPRESS will
      support projects that are committed to <span>open science</span> principles and
      <span>enhance knowledge synthesis</span>.
    </p>
    <p class="txt">
      The initiative is designed to develop services specifically tailored to meet the diverse needs
      for accurate weather and climate predictions across various sectors and regions. This approach
      supports
      <span
        >sustainable development and assists communities in adapting to climate change and the
        escalating risks posed by natural disasters</span
      >. The SEPRESS initiative places particular emphasis on empowering societies in key areas
      where progress towards achieving the Sustainable Development Goals (SDGs) remains
      insufficient. These include human health, food security, sustainable water management, clean
      energy, climate action, and economic growth. Additionally, SEPRESS will foster
      <span>global collaboration</span> by bringing together countries and regions under the common
      cause of climate resilience and sustainable natural and built environment. This initiative
      will also foster a culture of sharing science and technology, allowing less developed regions
      to benefit directly.
    </p>
    <p class="txt">
      The program will establish a platform to host annual forums, roundtable discussions, and field
      surveys, engaging a diverse array of stakeholders including policymakers, industry leaders,
      and members of the public such as farmers. Such inclusive engagement is pivotal for achieving
      the objectives of the International Decade of Science for Sustainable Development (2024-2033).
      By doing so, SEPRESS ensures that the benefits of improved predictive services are distributed
      globally, thereby enhancing resilience and advancing sustainable practices across all sectors.
    </p>

    <div class="divider"></div>
  </div>
</template>

<style scoped>
.content-container {
  padding-left: 90px;
  padding-right: 90px;
}

.cover-image {
  padding-top: 40px;
  padding-bottom: 16px;
}

.cover {
  width: 100%;
  object-fit: cover;
}

.txt1 {
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0%;
  color: #7f7f7f;
}

.txt2 {
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0%;
  color: #7f7f7f;
}

h2 {
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 48px;
  /* line-height: 100%; */
  letter-spacing: 0%;

  padding-top: 50px;
}

.txt {
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0%;
  color: #0b0717;

  padding-right: 300px;
  padding-top: 40px;
}

p.txt:first-of-type {
  padding-top: 20px;
}

.txt > span {
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0%;
  color: #0b0717;
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
