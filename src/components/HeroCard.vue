<template>
	<div class="hero-card">
		<div v-if="!isFavourite" class="like" @click="addInFavourite(id)">❤️</div>
		<div v-else class="like" @click="delFromFavourite(id), $emit('del-event')">💔</div>
		<img class="w-100" :src="img">
		<div class="px-3 py-1">name: {{ name }}</div>
		<div class="px-3 py-1">homeworld: {{ homeworld }}</div>
	</div>
</template>

<script>
export default {
	props: {
		id: Number,
		name: String,
		img: String,
		homeworld: String,
		isFavourite: Boolean
	},
	methods: {
		addInFavourite(id) {
			const heroData = {
				id: id,
				name: this.name, 
				img: this.img, 
				homeworld: this.homeworld
			}
			this.$store.dispatch('add', heroData)
		},
		delFromFavourite(id) {
			this.$store.dispatch('del', id)

		}
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
	position: relative;
}
.like {
	position: absolute;
	top: 0;
	right: 0;
	padding: 5px;
	cursor: pointer;
	-webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
	transition: all .2s ease-in-out;
	&:hover {
		transform: scale(1.3);
	}
	&:active {
		transition: all 0s ease-in-out;
		transform: scale(2.5);
	}
}
</style>