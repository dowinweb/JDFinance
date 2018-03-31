<!--
@Author: dongwei
@Date:   2018-03-04 11:24:43
@Last modified by:   dongwei
@Last modified time: 2018-03-06 22:36:17
-->

<template lang="html">
  <section :class="[panelClass, cname]">
    <h4>-{{title}}-</h4>
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      panelClass: 'panel'
    }
  }
}
</script>

<style lang="scss">
@import '../../css/element.scss';
.panel {
  @include panel;
}
</style>
