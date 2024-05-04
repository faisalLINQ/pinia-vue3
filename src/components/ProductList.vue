<script setup lang="ts">
import { useProductsStore } from '../store/products';
import { useCartStore } from '../store/cart';

const productsStore = useProductsStore()
const cartStore = useCartStore()
</script>

<template>
  <div>
    <div class="main">
      <div class="product" v-for="product of productsStore.products" :key="product.id">
        <img :src="product.image" />
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">${{ product.price }}</div>
        <div class="button-group">
          <button @click="cartStore.subtractProductFromCart(product)">-</button>
          {{ cartStore.products[product.id]?.quantity || '0' }}
          <button @click="cartStore.addProductToCart(product)">+</button>
        </div>
      </div>
    </div>
    <div class="price-div">Total price: ${{ cartStore.totalCartPrice || '0' }}</div>
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
  height: 320px;
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

button {
  font-size: 20px;
}

.price-div {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: white;
  font-size: 20px;
}

.button-group {
  margin-bottom: 5px;
}
</style>
