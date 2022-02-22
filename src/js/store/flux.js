const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [{name:""}],
      characters: [],
      planets: [],
      starships: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      saveFavorite: () => {},
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getData: (url, param) => {
        fetch(url)
          .then(response => response.json())
		  .then(dataJson => setStore ({[param]:dataJson.results}))
		  .catch(error => console.log(error));
	  },

	  addFavorites: (fav) => {
        //get the global store and place it into a local array
        const newFavorites = getStore().favorites;
		newFavorites.push(fav)
        //reset the global store
        setStore({ favorites: newFavorites });
      },

	  deleteFavorites: (fav) => {
        //get the global store and place it into a local array
        const newFavorites = getStore().favorites;
		newFavorites.filter((fav, i) => i != i);
        //reset the global store
        setStore({ favorites: newFavorites });
      },

      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
    //   changeColor: (index, color) => {
    //     //get the store
    //     const store = getStore();

    //     //we have to loop the entire demo array to look for the respective index
    //     //and change its color
    //     const demo = store.demo.map((elm, i) => {
    //       if (i === index) elm.background = color;
    //       return elm;
    //     });

    //     //reset the global store
    //     setStore({ demo: demo });
    //     setStore({ store: favorites });
    //   },
    },
  };
};

export default getState;
