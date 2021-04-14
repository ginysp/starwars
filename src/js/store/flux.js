const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			home: [],
			details: [],
			baseURL: "https://www.swapi.tech/api/",
			newURL: "https://3000-red-tern-dqzbcae7.ws-us03.gitpod.io",
			favorites: [],
			login: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				//fetch("https://www.swapi.tech/api/")
				//.then()
				//.then(data => setStore({ foo: data.bar }));

				fetch("https://www.swapi.tech/api/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						setStore({ home: Object.entries(data.result) });
						//console.log(store.home);
					})

					.catch(err => {
						console.log("error", err);
					});
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
			},
			getAllData: value => {
				const store = getStore();
				fetch(`${store.baseURL}${value}`, {
					method: "GET",

					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						setStore({ [value]: data.results || data.result });
						//console.log(store.home);
					})

					.catch(err => {
						console.log("error", err);
					});
			},
			getAllDetails: (value, id) => {
				const store = getStore();
				fetch(`${store.baseURL}${value}/${id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						setStore({ details: data.results || data.result });
						//	console.log("dataresult ", Object.keys(details));
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			addFavorite: name => {
				const store = getStore();

				store.favorites.includes(name)
					? setStore({ favorites: store.favorites })
					: setStore({ favorites: store.favorites.concat(name) }); //push no funciona preguntar porq
				console.log(store.favorites);
			},

			deleteFavorites: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore({ favorites: store.favorites });
				fetch(`${store.newURL}/favorites/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer	${token}`
					},
					body: {
						name: JSON.stringify(store.favorites[0])
					}
				}).then(resp => {
					//console.log("respuesta", resp.json());
					return resp.json();
				});
			},

			getToken: () => {
				let store = getStore();
				let token = localStorage.getItem("token");
				console.log(token);
				if (token && token.length > 0) {
					console.log("entre");
					setStore({ login: true });
				} else {
					console.log("entre al else");
					setStore({ login: false });
				}
				console.log(store.login);
			},
			deleteToken: () => {
				let store = getStore();
				setStore({ login: false });
				localStorage.removeItem("token");
				window.location.reload();
			},
			getFavorites: () => {
				console.log("entre a los favorites");
				const store = getStore();
				let token = localStorage.getItem("token");
				fetch(`${store.newURL}/favorites/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer	${token}`
					}
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						setStore({ favorites: data });
						console.log("dataresult", store);
					})

					.catch(err => {
						console.log("error", err);
					});
			},
			loginValidation: (username, password) => {
				console.log(username, password);
				const store = getStore();
				console.log(store.newURL);
				fetch(`${store.newURL}/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: username,
						password: password
					})
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						//setStore({ token: data.results || data.result });
						console.log("dataresult", data);
						localStorage.setItem("token", data.access_token);
						window.location.reload();
					})

					.catch(err => {
						console.log("error", err);
					});
			}
		}
	};
};

export default getState;
