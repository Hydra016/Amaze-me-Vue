<template>
   <div class="content-container">
	<div class="content">
		<div v-if="products" v-for="product in products">
            <Card :product="product" />
        </div>
	</div>
</div>

</template>

<script setup>
    const { products } = defineProps(['products'])
</script>
