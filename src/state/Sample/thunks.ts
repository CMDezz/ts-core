import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkActionMap } from "../commons";

const SampleApi = (data: string): Promise<string> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //   const random = Math.random();
      //   if (random < 0.1) {
      return res(data);
      //   }
      //   if (random < 0.6) {
      //     return res({ message: "" });
      //   }
      //   if (random < 1) {
      //     return res({ message: "Cant fetch the name" });
      //   }
    }, 1000);
  });
};

interface errorState {
  message: string;
}

export const updateSampleNameAsync = createAsyncThunk<
  string, //output thunk return
  string, //input thunk data
  { rejectValue: errorState } //type of reject value
>("SampleSlice", (data: string) => {
  return SampleApi(data)
    .then(res => res)
    .catch(err => {
      console.log("err ", err);
      return err;
    });
});

const ThunkActions: ThunkActionMap = {
  updateSampleNameAsync,
};
export default ThunkActions;
