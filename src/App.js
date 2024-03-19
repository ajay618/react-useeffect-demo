import { useState } from "react";
import Fcomponent from "./Fcomponent";

function App() {
  const [ flag , setFlag] = useState(true)
  return (
    <div className="App">
      <button onClick={ () => setFlag(!flag)}>Toggle</button>
      {flag ? <Fcomponent/>  : ""}
    </div>
  );
}

export default App;
