<template>
    <div class="card" v-if="product">
    <div class="card-img">
      <img class="item-img" :src="`${product.image}`" alt="product" />
    </div>
    <div class="card-details">
      <h2>{{product.title}}</h2>
      <div class="card-price-rate">
        <p>$ {{product.price}}</p>
        <p>{{product.rating.rate}}</p>
      </div>
    </div>
    <NuxtLink class="button-outlined" :to="`/${product.category}/${product.id}`">
      View Product
    </NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>
