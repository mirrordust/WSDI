<template>
  <div class="content-container">
    <h2>Upcoming Events</h2>

    <div class="flex">
      <a href="https://cemlu.people.ust.hk/CWWF2025.html" class="image">
        <img src="/images/event/cwwf.png" class="cover" />
      </a>

      <div class="name">CWWF</div>

      <div class="intro">2025</div>
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
    font-size: 26px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #0b0717;
    padding-top: 20px;
  }

  .cover {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .name {
    padding-top: 20px;
    font-weight: 500;
    font-size: 24px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #0b0717;
  }

  .intro {
    padding-top: 8px;
    font-weight: 400;
    font-size: 20px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #0b0717;
  }

  .divider {
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

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 40px;
  }

  .cover {
    width: 100%;
    object-fit: cover;
  }

  .name {
    padding-top: 20px;
    font-weight: 500;
    font-size: 32px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #0b0717;
  }

  .intro {
    padding-top: 8px;
    font-weight: 400;
    font-size: 20px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #0b0717;
  }

  .divider {
    width: 100%;
    height: 0;
    padding-top: 164px;
  }
}
</style>
