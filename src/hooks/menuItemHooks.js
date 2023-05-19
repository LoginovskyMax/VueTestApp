import { ref } from 'vue';

export default function UseSideBarTemplate() {
  const products = ref(null);
  const isOpenSideBar = ref(false);

  const closeSideBar = () => {
    isOpenSideBar.value = !isOpenSideBar.value;
  };
  const getJSON = async () => {
    const data = await new Promise((resolve) => {
      resolve(import('@/assets/category_response.json').then((module) => Object.values(module)[39]));
    });
    products.value = data;
  };
  return {
    closeSideBar, getJSON, products, isOpenSideBar,
  };
}
