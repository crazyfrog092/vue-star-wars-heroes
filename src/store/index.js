import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  	async search({}, {page, searchValue}) {
  		let res = await fetch(`https://swapi.dev/api/people/?page=${page}${searchValue?'&search=':''}${searchValue?searchValue:''}`)
  		res = await res.json()
  		const result = {}
  		result.heroes = {}
  		result.count = res.count
  		for (const [i, v] of res.results.entries()) {
	    	result.heroes[i] = {}
  			result.heroes[i].id = parseInt(v.url.match(/\d+/))
  			result.heroes[i].name = v.name
  			result.heroes[i].img = `https://starwars-visualguide.com/assets/img/characters/${result.heroes[i].id}.jpg`
  			let homeworld = await fetch(v.homeworld)
  			homeworld = await homeworld.json()
  			result.heroes[i].homeworld = homeworld.name
		  }
  		return result
  	},
  	add({}, heroData) {
  		let heroes = {}
			if (localStorage.getItem('heroes')) {
				heroes = JSON.parse(localStorage.getItem('heroes'))
			}
			heroes[heroData.id] = heroData
			const heroesJson = JSON.stringify(heroes)
			localStorage.setItem('heroes', heroesJson)
  	},
  	del({}, id) {
  		if (localStorage.getItem('heroes')) {
				let heroes = JSON.parse(localStorage.getItem('heroes'))
				delete heroes[id]
				const heroesJson = JSON.stringify(heroes)
				localStorage.setItem('heroes', heroesJson)
			}
  	}
  },
  modules: {
  }
})
