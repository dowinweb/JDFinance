<!--
@Author: dongwei
@Date:   2018-03-04 10:48:28
@Last modified by:   dongwei
@Last modified time: 2018-03-07 23:04:02
-->

<template lang="html">
    <div>
      <Heador />
      <Hslider />
      <Novice />
      <Borrow />
      <Money />
      <Product />
      <Life />
      <Footers />
      <Navbar />
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Hslider from './hslider.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'
import Footers from '../public/footer.vue'
import Navbar from '../public/navbar.vue'


export default {
  components: {
    Heador,
    Hslider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Footers,
    Navbar
  }
}
</script>

<style lang="scss" module>

</style>
