import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SliceState {
  sampleName: string;
}

const initialState: SliceState = {
  sampleName: "",
};

const Slice = createSlice({
  name: "SampleSlice",
  initialState,
  reducers: {
    updateSampleName: (
      state: SliceState,
      { payload }: PayloadAction<string>
    ) => {
      state.sampleName = payload;
      return state;
    },
  },
});

export const { updateSampleName } = Slice.actions;

export const SampleActions = Slice.actions;

export const SliceName = Slice.name;

export default Slice.reducer;
