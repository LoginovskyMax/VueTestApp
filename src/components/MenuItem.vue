<template>
    <div class="conteiner">
        <ul class="category">
           <li class="category__item"
           @mouseenter="showSubMenu()"
          >
          <div class="category__item_block">
            <img :src="imgUrl" :alt="altUrl" width="25">
           <p>{{ items.name }}</p>
          </div>
          <v-icon icon="mdi-chevron-right" v-if="hasChildren"/>
          </li>
        </ul>
        <Teleport to="body">
            <div v-if="hasChildren && isThirdCategory" class="conteiner__menu"
            :class="{lastcategory:clickedThirdCategoryId===items.id}">
            <MenuItemVue2 v-for="el in items.children"
                         :key="el.id"
                         :items="el"
                         :clickId="items.id"/>
            </div>
        </Teleport>

    </div>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
  name: 'MenuItemVue',
  props: ['items', 'clickId'],
  methods: {
    showSubMenu() {
      if (this.clickedCategoryId === this.clickId) {
        this.setIdThird(this.items.id);
      } else {
        this.hasChildren && this.setId(this.items.id);
      }
    },
    ...mapMutations({
      setId: 'setId',
      setIdThird: 'setIdThird',
      setIdSecond: 'setIdSecond',
    }),
  },
  computed: {
    hasChildren() {
      return this.items.children && this.items.children.length > 0;
    },
    clickedCategoryId() {
      return this.$store.state.clickedCategoryId;
    },
    clickedThirdCategoryId() {
      return this.$store.state.clickedThirdCategoryId;
    },
    isThirdCategory() {
      if (this.clickedCategoryId === this.clickId) {
        return this.clickedThirdCategoryId === this.items.id;
      }
      return this.clickedCategoryId === this.items.id;
    },
    imgUrl() {
      if (this.items.categoryImages !== null) {
        return this.items.categoryImages.image.fileUrl;
      }
      return '';
    },
    altUrl() {
      if (this.items.categoryImages !== null) {
        return this.items.categoryImages.image.alt;
      }
      return null;
    },
  },
  unmounted() {
    this.setIdThird(0);
  },
};
</script>

<style lang="scss" scoped>
.conteiner{
    width: 300px;
  &__menu{
    width: 300px;
    position: absolute;
    left: 350px;
    top: 60px;
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
    left: 1000px;
}
</style>
