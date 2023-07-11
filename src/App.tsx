import React from "react";
import { useActStates, useActActionsThunk } from "./state/Sample";
import "./App.scss";
import { unwrapResult } from "@reduxjs/toolkit";
function App() {
  const action = useActActionsThunk();
  const state = useActStates();

  const onChangeText = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const resp = await action.updateSampleNameAsync(e.target.value);
    console.log("-- ", unwrapResult(resp));
  };
  return (
    <div className="App">
      <p>this is sameple text : {state.sampleName}</p>
      <label htmlFor="sample">Enter sample text: </label>
      <input
        disabled={state.loading}
        name="sample"
        type="text"
        onChange={onChangeText}
      />
      {state.error && <p className="text-danger">{state.error}</p>}
    </div>
  );
}

export default App;
