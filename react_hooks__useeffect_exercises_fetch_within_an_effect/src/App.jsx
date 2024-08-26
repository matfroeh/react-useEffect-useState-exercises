// Fetch within an Effect
// Create a simple React component that fetches data from an API and displays it on the screen. You can use any of these options:
// JSON Placeholder: https://jsonplaceholder.typicode.com
// PokeAPI: https://pokeapi.co/ (only 150 items)
// Use an effect to fetch the data
// Store data in state
// Display data and style it as you see fit.
import FetchPhotos from "./components/FetchPhotos";

const App = () => {

  return (
    <div>
      <FetchPhotos />
    </div>
  );
};

export default App;
