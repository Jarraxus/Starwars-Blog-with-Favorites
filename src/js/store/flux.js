const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
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

	  toggleFavorites: (favName) => {
        //get the global store and place it into a local array
        let newFavorites = getStore().favorites;
        let found = newFavorites.find(item => {
          if (item == favName) {
            return item
          }
        });
        if (found) {
                    newFavorites = newFavorites.filter(item => item != favName);
        } else {
          newFavorites = [...newFavorites, favName];
        }
        //reset the global store
        setStore({ favorites: newFavorites });
      },
    },
  };
};

export default getState;
