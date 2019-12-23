<template>
    <div class="content">
        <Index></Index>
        <Sub></Sub>
        <Swipper></Swipper>
        <SubTo></SubTo>
        <SwipperToing></SwipperToing>
        <Reveal></Reveal>
        <SwipperTo></SwipperTo>
    </div>

</template>

<script>

import Index  from "../components/index.vue"
import Sub  from "../components/sub.vue"     
import SubTo  from "../components/subTo.vue"                                                              
import Swipper  from "../components/swipper.vue" 
import SwipperTo  from "../components/swipperTo.vue" 
import SwipperToing  from "../components/swipperToing.vue" 
import Reveal  from "../components/reveal.vue"
export default {
   components:{
        Index,
        Sub,
        SubTo,
        Swipper,
        SwipperTo,
        SwipperToing,
        Reveal
   }
}
</script>
<style lang="less" scoped>
.content{
    margin:  0 auto;
}
</style>