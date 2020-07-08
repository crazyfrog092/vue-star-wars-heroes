<template>
	<div class="hero-card">
		<img class="w-100" :src="img">
		<div class="px-3 py-1">name: {{ name }}</div>
		<div class="px-3 py-1">homeworld: {{ homeworld }}</div>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		img: String,
		homeworld: String
	},
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.hero-card {
	margin-bottom: 30px;
	background-color: #ffc107;
}

</style>