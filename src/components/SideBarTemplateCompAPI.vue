<template>
    <v-btn
       class="ma-2 open-btn"
       color="orange-darken-2"
       @click="closeSideBar()"
       v-if="!isOpenSideBar"
     >
       Open menu
       <v-icon
         end
         icon="mdi-arrow-right"
       ></v-icon>
     </v-btn>
   <SideBar :closeSideBar="closeSideBar" v-if="isOpenSideBar">
     <div class="main-menu">
     <MenuItemVue v-for="item in products" :key="item.id" :items="item"/>
     </div>
   </SideBar>
</template>

<script>
import UseSideBarTemplate from '@/hooks/menuItemHooks';
import SideBar from './SideBar.vue';

export default {
  components: { SideBar },
  name: 'SideBarTemplate',
  setup() {
    const {
      closeSideBar, getJSON, products, isOpenSideBar,
    } = UseSideBarTemplate();
    return {
      closeSideBar,
      getJSON,
      products,
      isOpenSideBar,
    };
  },
  mounted() {
    this.getJSON();
  },

};
</script>

<style scoped lang="scss">
.main-menu{
 position: relative;
 width: 300px;
 height: 500px;
 overflow-x:visible;
}
.open-btn{
 position: fixed;
 left: 0;
}
</style>
