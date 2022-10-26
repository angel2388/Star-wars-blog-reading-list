const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
		favoritos: [],
		// favoritos: [
		// 	{
		// 		uid:1,
		// 		nombre: "Cortes",
		// 	},
		// 	{
		// 		uid: 2,
		// 		nombre: "Rafi",
		// 	}
		// ]
	},
		actions: {
			agregarFavoritos: (obj) => {
				const store = getStore();
				const auxFavoritos = [...store.favoritos];
				auxFavoritos.push({
					uid: auxFavoritos.length + 1,
					nombre: obj.name,
				});
				console.log({ auxFavoritos})
				setStore({ favoritos: auxFavoritos});
			},
			eliminarFavoritos(obj) {
				console.log({obj})
				const store = getStore()
				const auxFavoritos = store.favoritos.filter((favorito) => {
					return favorito.uid !== obj.uid
				})
				console.log({ auxFavoritos })
				setStore({ favoritos: auxFavoritos })
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
