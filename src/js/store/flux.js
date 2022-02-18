const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getPeople: () => {
        fetch("https://swapi.dev/api/people/", { method: "GET" })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("results from flux " + data.results);
            setStore({ people: data.results });
            return data.results;
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
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
    },
  };
};

export default getState;
