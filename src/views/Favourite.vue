<template>
  <div>
		<b-row>
			<b-col v-for="item in heroesData" :key="item.id" cols="12" sm="6" md="4" lg="3">
		  	<HeroCard
		  		@del-event="searchFavourite"
		  		:id="item.id"
		  		:img="item.img" 
		  		:name="item.name" 
		  		:homeworld="item.homeworld"
		  		:isFavourite="true"
		  	/>
	  	</b-col>
		</b-row>
  </div>
</template>

<script>
import HeroCard from '@/components/HeroCard.vue'

export default {
name: 'favourite',
  components: {
    HeroCard
  },
  mounted() {
  	this.searchFavourite()
  },
  methods: {
  	searchFavourite() {
  		if (localStorage.getItem('heroes')) {
				this.heroesData = JSON.parse(localStorage.getItem('heroes'))
			}
  	}
  },
  data() {
    return {
    	heroesData: []
    }
  }
}
</script>
