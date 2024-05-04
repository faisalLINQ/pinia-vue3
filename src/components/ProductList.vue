<script setup lang="ts">
import { useProductsStore } from '../store/products';

const productsStore = useProductsStore()
</script>

<template>
  <div class="main">
    <div class="product" v-for="product of productsStore.products" :key="product.id">
      <img :src="product.image" />
      <div class="product-name">{{ product.name }}</div>
      <div class="product-price">${{ product.price }}</div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
}

.product {
  border: 1px solid rgb(58, 57, 57);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
  width: 300px;
  height: 300px;
}

.product img {
  width: 200px;
  height: 200px;
}

.product-name {
  font-size: 17px;
  color: white;
}

.product-price {
  font-size: 25px;
  color: white;
  font-weight: bold;
}
</style>
