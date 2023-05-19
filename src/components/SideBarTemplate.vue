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
import SideBar from './SideBar.vue';

export default {
  components: { SideBar },
  name: 'SideBarTemplate',
  data() {
    return {
      products: null,
      isOpenSideBar: false,
    };
  },
  methods: {
    closeSideBar() {
      this.isOpenSideBar = !this.isOpenSideBar;
    },
    async getJSON() {
      const data = await new Promise((resolve) => {
        resolve(import('@/assets/category_response.json').then((module) => Object.values(module)[39]));
      });
      this.products = data;
    },

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
