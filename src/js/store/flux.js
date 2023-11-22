const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			films: [],
			planets: [],
			species: [],
		},
		actions: {
			fetchCharacters: async () => {

				const store = getStore();

				const response = await fetch("https://www.swapi.tech/api/people/");
				const data = await response.json();
				console.log(data);

				const updatedStore = {
					characters: data.results
				};
				setStore(updatedStore);

			},
			fetchFilms: async () => {

				const store = getStore();

				const response = await fetch("https://www.swapi.tech/api/films/");
				const data = await response.json();
				console.log(data);

				const updatedStore = {
					films: data.results
				};
				setStore(updatedStore);
			},
			fetchPlanets: async () => {

				const store = getStore();

				const response = await fetch("https://www.swapi.tech/api/planets/");
				const data = await response.json();
				console.log(data);

				const updatedStore = {
					planets: data.results
				};
				setStore(updatedStore);
			},
			fetchSpecies: async () => {

				const store = getStore();

				const response = await fetch("https://www.swapi.tech/api/species/");
				const data = await response.json();
				console.log(data);

				const updatedStore = {
					species: data.results
				};
				setStore(updatedStore);
			}
		}
	};
};

export default getState;
