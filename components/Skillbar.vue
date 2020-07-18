<template>
  <div class="skillbar">
    <div
      :class="[
        'bar-section',
        'start',
        { blue: level > 0 },
        { circle: level === 0 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: level > 1 },
        { circle: level === 1 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: level > 2 },
        { circle: level === 2 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: level > 3 },
        { circle: level === 3 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: level > 4 },
        { circle: level === 4 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: level > 5 },
        { circle: level === 5 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: level > 6 },
        { circle: level === 6 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: level > 7 },
        { circle: level === 7 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: level > 8 },
        { circle: level === 8 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        'end',
        { blue: level > 9 },
        { circle: level === 9 },
      ]"
    />
  </div>
</template>

<script>
export default {
  name: "Skillbar",
  props: {
    level: {
      type: Number,
      required: true
    }
  }
};
</script>
<style scoped>
.skillbar {
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 100%;
  justify-items: center;
  align-items: center;
  position: relative;
}

.bar-section {
  background-color: #e3e3e3;
  width: 100%;
  height: 6px;
}

.blue {
  background-color: var(--secondary-brand-colour);
}

.circle::after {
  content: "";
  width: 25px;
  height: 25px;
  border-radius: 15px;
  position: absolute;
  background-color: var(--secondary-brand-colour);
  top: 12px;
}

.start {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.end {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
