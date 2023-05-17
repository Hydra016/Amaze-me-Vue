<template>
    <Header :dontShowHeaderImage="true" />
    <Head>
        <Title>Amaza Me | {{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
    </Head>
    <div class='single-item-container'>
      <img class='single-item-image' :src="product.image" alt="product" />
      <div class='single-item-details-container'>
        <span class='single-item-heading'>{{ product.title }}</span>
        <span class='single-item-description'>{{ product.description }}</span>
        <span class='single-item-price'>$ {{ product.price }}</span>
        <NuxtLink class='single-item-button' to="/">
        Buy Now
        </NuxtLink>
      </div>
      </div>
      <Footer /> 
</template>

<script setup>
const { id } = useRoute().params
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`)

</script>

<style lang="scss" scoped></style>