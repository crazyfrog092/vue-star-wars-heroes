<template>
  <div>
  	<b-row>
	  	<b-col cols="12" sm="7" md="6" lg="4" class="ml-auto d-flex align-items-center mb-3">
	  		<div class="mr-2">Search: </div>
		  	<b-form-input v-model="searchForm" v-on:keyup.enter="changeForm()" @change="changeForm()"/>	
	  	</b-col>
  	</b-row>
		<b-row>
			<b-col v-for="item in heroesData.heroes" :key="item.id" cols="12" sm="6" md="4" lg="3">
		  	<HeroCard
		  		:id="item.id"
		  		:img="item.img" 
		  		:name="item.name" 
		  		:homeworld="item.homeworld"
		  		:isFavourite="false"
		  	/>
	  	</b-col>
		</b-row>
		<b-pagination
			class="pagination-dark"
			align="right"
	    v-model="currentPage"
	    :total-rows="countPages"
	    :per-page="perPage"
	  >
		</b-pagination>
  </div>
</template>

<script>
import HeroCard from '@/components/HeroCard.vue'

export default {
  name: 'home',
  components: {
    HeroCard
  },
  mounted() {
  	this.search(1)
  },
  watch: {
  	currentPage() {
  		this.search(this.currentPage, this.searchFormLazy)
  	},
  	searchFormLazy() {
  		this.currentPage = 1
  		this.search(this.currentPage, this.searchFormLazy)
  	}
  },
  methods: {
  	changeForm() {
  		this.searchFormLazy = this.searchForm
  	},
  	async search(page, searchValue) {
  		this.heroesData = await this.$store.dispatch('search', {page, searchValue})
  		this.countPages = this.heroesData.count
  	}
  },
  data() {
    return {
    	heroesData: {},
  		perPage: 10,
    	currentPage: 1,
    	countPages: null,
    	searchForm: '',
    	searchFormLazy: ''
    }
  }
}
</script>

<style lang="scss">
.pagination-dark .page-item .page-link {
	background-color: #343a40 !important;
	border-color: #6c757d !important;
	&:focus {
		box-shadow: 0 0 0 0.2rem rgba(108, 117, 125,.25) !important;
	}
}
.form-control:focus {
	border-color: #6c757d !important;
	box-shadow: 0 0 0 0.2rem rgba(108, 117, 125,.25) !important;
}
</style>
