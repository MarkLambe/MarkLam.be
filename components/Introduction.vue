<template functional>
  <div class="introduction">
    <div class="content">
      <div class="image-area">
        <img
          v-lazy="
            'https://marklambe-site-content.s3-eu-west-1.amazonaws.com/Budapest.jpeg'
          "
          class="main-image"
          alt="A photo of Laura and I in Budapest"
        />
        <img
          v-lazy="
            'https://marklambe-site-content.s3-eu-west-1.amazonaws.com/Budapest_Label.png'
          "
          class="image-label"
          alt="An illustrated description of the photo which says 'Laura and I in Budapest'"
        />
      </div>
      <div class="text-area">
        <div class="intro-header">¡Hola! I’m Mark!</div>
        <div class="intro-body">
          <p>
            I’ve been writing code for fourteen years, primarily for the web,
            and I’ve become pretty good at it.
          </p>
          <p>
            I’ve worked with big companies, small companies, and individuals to
            create great web-apps and sites.
          </p>
          <p>
            I’m a nerd when it comes to software-development processes and I
            believe good team organisation leads to great software.
          </p>
          <p>
            My contact details and skillset are described below, and my full CV
            is just a bit further down ☺️
          </p>
        </div>
      </div>
    </div>
    <div class="background">
      <svg>
        <clipPath id="introClipPath" clipPathUnits="objectBoundingBox">
          <path d="M0 0.8 L0.8 0.8 L1 1 L1 0 L0.3 0.3 L0 0.3Z" />
        </clipPath>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction"
};
</script>
<style scoped>
.introduction {
  position: relative;
  display: grid;
  padding: 0px var(--content-borders);
  height: 1300px;
}

.content {
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.image-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  max-width: 600px;
}
.main-image {
  width: 100%;
  height: auto;
  border-radius: 25px;
}

.image-label {
  width: 75%;
  height: auto;
  z-index: 5;
}
.text-area {
  width: 50%;
}

.intro-header {
  font-size: var(--h2-font-size);
  font-weight: bold;
}

.intro-body {
  font-size: var(--body-font);
}

.background {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-brand-colour);
  z-index: 1;
  clip-path: url(#introClipPath);
}

@media only screen and (max-width: 1200px) {
  .introduction {
    height: 1500px;
  }
  .content {
    flex-direction: column-reverse;
  }

  .image-area {
    width: 80%;
  }

  .text-area {
    width: 100%;
    padding-bottom: 40px;
  }
}
</style>
