<template>
  <div class="content-container">
    <h1>World Sustainable Development Institute</h1>

    <div class="background-box">
      <img src="/images/background.png" class="cover" />
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 6.25%;
    padding-right: 6.25%;
  }

  h1 {
    font-weight: 400;
    font-size: 28px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #0b0717;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0 auto;
    text-align: center;
  }

  .cover {
    height: 100%;
    width: 100%;
    object-fit: cover;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 6.25%;
    padding-right: 6.25%;
  }

  h1 {
    font-weight: 500;
    font-size: 48px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #0b0717;
    padding-top: calc(90px - 2%);
    padding-bottom: 80px;
  }

  .cover {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .divider {
    border-bottom: 1px solid #d7d7d7;
    width: 100%;
    height: 0;
    padding-top: 80px;
  }
}
</style>
