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
    <div class="skillset">
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
export default {};
</script>

<style scoped>
.header-area {
  padding-bottom: 25px;
}

.timeline {
  padding-bottom: 125px;
}

.introduction-area {
  padding-bottom: 125px;
}

.skillset {
  padding-bottom: 125px;
}

.additional-info {
  padding-bottom: 200px;
}

.cv {
  padding-bottom: 125px;
}

@media only screen and (max-width: 1200px) {
  .introduction-area {
    padding-bottom: 400px;
  }
  .additional-info {
    padding-bottom: 400px;
  }
}
</style>
