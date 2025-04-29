<script setup lang="ts">
import IconViewMore from './icons/IconViewMore.vue'
</script>

<template>
  <div class="content-container">
    <div class="grid">
      <div class="grid-1-1">
        <div class="flex">
          <h2>Highlight</h2>

          <div class="text">
            UNESCO endorsed HKUST WSDI's
            <span class="program">
              SEamless PREdiction and Services for Sustainable Natural and Built Environments
              (SEPRESS) Program 2025 - 2032
            </span>
            under International Decade of Sciences for Sustainable Development (IDSSD)
          </div>

          <div>
            <a href="#" class="view-more-link">
              View more
              <IconViewMore class="svg" />
            </a>
          </div>
        </div>
      </div>

      <div class="grid-1-2">
        <div class="background-box">
          <img src="/images/highlight/unesco.png" class="cover" />
        </div>
      </div>
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

  .program {
    font-weight: 500;
  }

  .view-more-link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0;
    color: #ffffff;
    background: #0076d0;
    padding: 0 5px;
    margin: 5px auto;
  }

  .cover {
    height: 100%;
    width: 100%;
    object-fit: contain;
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

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    justify-items: center;
    align-items: center;
    padding-top: 120px;
  }

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  h2 {
    font-weight: 600;
    font-size: 48px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #0b0717;
  }

  .text {
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 0;
    color: #0b0717;
    padding-top: 40px;
    padding-bottom: 32px;
  }

  .program {
    font-weight: 700;
  }

  .view-more-link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0;
    color: #ffffff;
    background: #0076d0;
    /* 上边下边 | 左边右边 */
    padding: 12px 24px;
  }

  .cover {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .divider {
    border-bottom: 1px solid #d7d7d7;
    width: 100%;
    height: 0;
    padding-top: 132px;
  }
}
</style>
