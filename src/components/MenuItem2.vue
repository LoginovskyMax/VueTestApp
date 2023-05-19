<template>
      <div class="conteiner">
      <ul class="category">
       <li class="category__item" @mouseenter="showSubMenu()">
        <div class="category__item_block">
            <img v-if="imgUrl" :src="imgUrl" :alt="altUrl" width="25">
            <p>{{ items.name }}</p>
        </div>
        <v-icon icon="mdi-chevron-right" v-if="hasChildren"/>
       </li>
      </ul>
      <div v-if="hasChildren && clickedCategoryId === items.id" class="conteiner__menu"
      >
        <MenuItemVue v-for="el in items.children" :key="el.id" :items="el" :clickId="clickId"/>
        </div>
      </div>
  </template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'MenuItemVue2',
  props: ['items', 'clickId'],

  data() {
    return {
      show: false,
    };
  },
  methods: {
    showSubMenu() {
      if (this.clickedCategoryId === this.clickId) {
        this.setIdThird(this.items.id);
      } else {
        this.hasChildren && this.setIdSecond(this.items.id);
      }
    },
    ...mapMutations({
      setIdSecond: 'setIdSecond',
    }),
  },
  computed: {
    hasChildren() {
      return this.items.children && this.items.children.length > 0;
    },
    clickedCategoryId() {
      return this.$store.state.clickedSecondCategoryId;
    },
    clickedThirdCategoryId() {
      return this.$store.state.clickedThirdCategoryId;
    },
    imgUrl() {
      if (this.items.categoryImages !== null) {
        return this.items.categoryImages.image.fileUrl;
      }
      return false;
    },
    altUrl() {
      if (this.items.categoryImages !== null) {
        return this.items.categoryImages.image.alt;
      }
      return null;
    },
  },
  unmounted() {
    this.setIdSecond(0);
  },
};
</script>

  <style lang="scss" scoped>
  .conteiner{
    width: 300px;
  &__menu{
    width: 300px;
    position: absolute;
    right: -320px;
    top: 0;
  }
}
  .category{
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0;
    padding: 0;
    &__item{
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    padding: 5px 10px;
    &:hover{
        background-color: wheat;
        cursor: pointer;
    }
    &_block{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;

        p{
            overflow: hidden;
            white-space: nowrap;
            text-overflow:ellipsis;
            width: 250px;
            height: 30px;
            text-align: left;
        }
    }
  }
  }
  .lastcategory{
    width: 300px;
    position: absolute;
    left: 650px;
}
  </style>
