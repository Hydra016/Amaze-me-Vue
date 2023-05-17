<template>
    <div>
        <Header />
        <h1 class='category-heading'>{{ category }}</h1>
        <Content :products="products" />
        <Footer />
    </div>
</template>

<script setup>
const { category } = useRoute().params
const { data: products } = await useFetch(`https://fakestoreapi.com/products/category/${category}`)

useHead({
    title: `AmazeMe | ${category}`,
    meta: [
    {name: 'description', content: 'Everything about Nuxt 3'}
    ]
})
</script>

<style lang="scss" scoped></style>