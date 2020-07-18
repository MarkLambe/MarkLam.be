<template>
  <div class="skillset">
    <div class="header">
      <span>
        My Technical Skillset
        <img
          src="~/assets/Skills_Label.png"
          class="label-image"
          alt="An illustrated description which says 'Just a rough guide'"
        />
      </span>
    </div>
    <div class="skills-section skills-one">
      <div class="skill main-skill">
        <span class="skill-name">Javascript</span>
        <Skillbar :level="8" />
      </div>
      <div class="skill sub-skill">
        <span class="skill-name">Node</span>
        <Skillbar :level="7" />
      </div>
      <div class="skill sub-skill">
        <span class="skill-name">VueJS</span>
        <Skillbar :level="9" />
      </div>
      <div class="skill sub-skill">
        <span class="skill-name">React</span>
        <Skillbar :level="7" />
      </div>
      <div class="skill sub-skill">
        <span class="skill-name">Angular</span>
        <Skillbar :level="6" />
      </div>
      <div class="skill main-skill">
        <span class="skill-name">CSS</span>
        <Skillbar :level="8" />
      </div>
      <div class="skill main-skill">
        <span class="skill-name">HTML</span>
        <Skillbar :level="8" />
      </div>
    </div>
    <div class="skills-section skills-two">
      <div class="skill main-skill">
        <span class="skill-name">Python</span>
        <Skillbar :level="6" />
      </div>
      <div class="skill sub-skill">
        <span class="skill-name">Django</span>
        <Skillbar :level="6" />
      </div>
      <div class="skill main-skill">
        <span class="skill-name">Databases</span>
        <Skillbar :level="7" />
      </div>
      <div class="skill sub-skill">
        <span class="skill-name">MySQL</span>
        <Skillbar :level="8" />
      </div>
      <div class="skill sub-skill">
        <span class="skill-name">Mongo DB</span>
        <Skillbar :level="6" />
      </div>
      <div class="skill main-skill">
        <span class="skill-name">Unit Testing</span>
        <Skillbar :level="8" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skillset"
};
</script>
<style scoped>
.skillset {
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    "header header header"
    "skills1 . skills2";
  padding: 0 var(--content-borders);
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--h2-font-size);
  grid-area: header;
  padding-bottom: 30px;
  position: relative;
}

.label-image {
  position: absolute;
  width: 250px;
  height: auto;
  top: -175px;
}

.skills-section {
  display: flex;
  flex-direction: column;
}

.skills-one {
  grid-area: skills1;
}
.skills-two {
  grid-area: skills2;
}

.skill {
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 50px;
}

.main-skill {
  font-size: var(--h3-font-size);
  padding-top: 30px;
}

.sub-skill {
}

.skill-name {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
