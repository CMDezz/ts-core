import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SampleState {
  sampleName: string;
}

const initialState: SampleState = {
  sampleName: "",
};

const SampleSlice = createSlice({
  name: "SampleSlice",
  initialState,
  reducers: {
    updateSampleName: (state, action: PayloadAction<string>) => {
      state["sampleName"] = action.payload;
      return state;
    },
  },
});

export default SampleSlice;
