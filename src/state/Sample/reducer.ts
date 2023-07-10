import { createSlice, PayloadAction, isPending } from "@reduxjs/toolkit";
import { updateSampleNameAsync } from "./thunks";

export interface SliceState {
  sampleName: string;
  loading: boolean;
  error: string | undefined;
}

export interface ErrorState {
  message: string | undefined;
}

const initialState: SliceState = {
  sampleName: "",
  loading: false,
  error: "",
};

const Slice = createSlice({
  name: "SampleSlice",
  initialState,
  reducers: {
    //none sync actions
    updateSampleName: (
      state: SliceState,
      { payload }: PayloadAction<string>
    ) => {
      state.sampleName = payload;
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(updateSampleNameAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.sampleName = payload;
        return state;
      })
      .addCase(updateSampleNameAsync.pending, (state, { payload }) => {
        state.loading = true;
      });
    //rejected build riêng comp để toast error
    // nếu có xử lý dựa trên rejected thì thêm progress ở đây

    // .addCase(updateSampleNameAsync.rejected, (state, action) => {
    //   state.loading = false;
    //   if (action.payload) {
    //     state.error = action.payload.message;
    //   } else {
    //     state.error = action.error.message
    //       ? action.error.message
    //       : "Something happened!";
    //   }
    // });
    // .addMatcher(
    //   (action: PayloadAction<unknown>) => isPending(action),
    //   state => {
    //     state.loading = true;
    //     return state;
    //   }
    // );
  },
});

export const SampleActions = Slice.actions;

export const SliceName = Slice.name;

export default Slice.reducer;
