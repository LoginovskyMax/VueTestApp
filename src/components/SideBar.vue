<template>
  <div class="wrapper">
  <div class="side-bar overflow-y-auto">
    <div class="side-bar__header">
        <v-btn
        class="ma-2"
        variant="text"
        icon="mdi-close"
        @click="closeSideBar()"
      ></v-btn>
    <h2>AyanMarket.kz</h2>
    </div>
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'SideBar',
  props: ['closeSideBar'],
};
</script>

<style lang="scss" scope>
 .wrapper{
        position:fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        display: flex;
        align-items: flex-start;
        justify-content: left;
        background-color: rgba(0, 0, 0, 0.137);
    }
.side-bar{
    height: 100vh;
    width: 350px;
    &__header{
        display: flex;
        align-items: center;
        justify-content: start;
    }
}
</style>
