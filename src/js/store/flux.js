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
		
		favoritos: [
			{
				uid:1,
				nombre: "Cortes",
			},
			{
				uid: 2,
				nombre: "Rafi",
			}
		]
	},
		actions: {
			agregarFavoritos: (nombre) => {
				console.log({nombre});
				const store = getstore();

				const auxFavoritos = [...store.favoritos];
				auxFavoritos.push({
					uid: auxFavoritos.length + 1,
					nombre,
				});
				console.log({ auxFavoritos})
				setStore({ favoritos: auxFavoritos});
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
