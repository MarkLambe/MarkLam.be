<template>
  <div class="body">
    <div class="header-area">
      <Header />
    </div>
    <div class="timeline">
      <Timeline />
    </div>
    <div class="introduction-area">
      <Introduction />
    </div>
    <div class="skillset-section">
      <Skillset />
    </div>
    <div class="additional-info">
      <AdditionalInfo />
    </div>
    <div class="cv">
      <MyCv />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Mark Lambe",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Mark Lambe Software Developer"
        },
        { name: "keywords", content: "Mark, Lambe, Software, Developer" }
      ]
    };
  }
};
</script>

<style scoped>
.header-area {
  padding-bottom: 125px;
}

.timeline {
  padding-bottom: 125px;
}

.introduction-area {
  padding-bottom: 125px;
}

.skillset-section {
  padding: 125px 0;
}

.additional-info {
  margin-bottom: 0px;
}

@media screen and (min-width: 1750px) {
  .additional-info {
    margin-bottom: 200px;
  }
}

@media screen and (min-width: 2000px) {
  .additional-info {
    margin-bottom: 400px;
  }
}

@media screen and (min-width: 2750px) {
  .additional-info {
    margin-bottom: 600px;
  }
}

.cv {
  padding-bottom: 50px;
}

@media only screen and (max-width: 800px) {
  .header-area {
    padding-bottom: 25px;
  }
  .timeline {
    padding-bottom: 0;
  }
  .introduction-area {
    padding-bottom: 175px;
  }
  .additional-info {
    padding-bottom: 175px;
  }
}
</style>
