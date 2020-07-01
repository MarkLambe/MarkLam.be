<template>
  <div class="body">
    <div class="header-area">
      <Header />
    </div>
    <div v-if="false">
      <div class="timeline">
        <Timeline />
      </div>
      <div class="introduction">
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

.introduction {
  padding-bottom: 125px;
}

.skillset {
  padding-bottom: 125px;
}

.additional-info {
  padding-bottom: 125px;
}

.cv {
  padding-bottom: 125px;
}
</style>
