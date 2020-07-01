<template>
  <nuxt />
</template>

<style>
:root {
  /* Colours */
  --main-text-color: #474747;
  --light-text-color: #737373;
  --main-brand-colour: #fcdbf8;
  --secondary-brand-colour: #83deff;

  /*Layout */
  --content-borders: 100px;

  /* Font */
  --h1-font-size: 54px;
  --h2-font-size: 42px;
  --h3-font-size: 28px;
  --body-font: 20px;

  color: var(--main-text-color);
  font-size: var(--body-font);
  font-family: "Roboto";
  font-weight: 400;
}

body {
  margin: 0;
}

@media only screen and (max-width: 1200px) {
  :root {
    --h1-font-size: 40px;
    --h2-font-size: 30px;
    --h3-font-size: 20px;
    --body-font: 16px;
  }
}

@media only screen and (max-width: 800px) {
  :root {
    --h1-font-size: 28px;
    --h2-font-size: 24px;
    --h3-font-size: 18px;
    --body-font: 14px;
  }
}
</style>
