<!--
@Author: dongwei
@Date:   2018-03-04 10:28:25
@Last modified by:   dongwei
@Last modified time: 2018-03-05 22:38:04
-->

<template lang="html">
    <div :class="$style.test">
        <h1>{{ title }}</h1>
        <p>abcdef</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "abcd",
    }
  },
}
</script>

<style lang="scss" module>
  .test{
    color: red;
    h1 {
      font-size:40px;
    }
  }
</style>
