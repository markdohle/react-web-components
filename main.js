function App() {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch('./movies.json');
      const json = await response.json();
      setData(json);
      setLoaded(true);
    }
    getData();
  }, []);
  console.log('loaded:', loaded, 'data:', data);

  return (
    <>
      <div className="container">
        <div className="col-sm">
          {loaded &&
          //data is set to the json file
          //data.movies gets a handle on the movies array in the data.
          //.map method creates a new array by calling a specific function on each item in the data array. 
            data.movies.map((item, i) => (
              // Step 3 - Rename '<nexttech-movie' to match the name of your new React Component in 'movies.js'
              <Movie
                // Do NOT remove this key attribute
                key={i}
                // Step 2 - Replace all of the attributes below with a single `data` attribute that have `movie` assigned as the value
                data={item}
              />
            ))}
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
