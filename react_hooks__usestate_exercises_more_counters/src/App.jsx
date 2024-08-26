// You can work here or download the template
// Your components go here

import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      {
        <>
          <h1>Counter One</h1>
          <Counter />
          <h1>Counter Two</h1>
          <Counter />
          <h1>Counter Three</h1>
          <Counter />
        </>
      }
    </div>
  );
};

export default App;
