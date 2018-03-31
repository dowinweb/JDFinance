<!--
@Author: dongwei
@Date:   2018-03-04 11:24:37
@Last modified by:   dongwei
@Last modified time: 2018-03-04 22:13:58
-->

<template lang="html">
  <div :class="[btnClass, cname]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      btnClass: "btn",
    }
  }
}
</script>

<style lang="scss">
@import "../../css/element.scss";
.btn {
  @include btn;
}
</style>
