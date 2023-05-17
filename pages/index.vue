<template>
    <div>
        <Header />
        <h1 class='category-heading'>All Products</h1>
        <Content :products="products" />
        <Footer />
    </div>
</template>

<script setup>
   const {data: products} = await useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped>

</style>