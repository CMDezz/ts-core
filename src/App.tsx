import React from "react";
import { useActStates, useActActions } from "./state/Sample";
function App() {
  const action = useActActions();
  const state = useActStates();

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    action.actUpdateSampleName(e.target.value);
  };
  return (
    <div className="App">
      <p>this is sameple text : {state.sampleName}</p>
      <label htmlFor="sample">Enter sample text: </label>
      <input name="sample" type="text" onChange={onChangeText} />
    </div>
  );
}

export default App;
