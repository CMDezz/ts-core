import axios, { AxiosResponse } from "axios";

interface ResponseData {
  Code: number;
  Item: unknown;
  Message: string;
  ItemError?: unknown;
}

/**
 * @description : need to implement api for FormData
 */
const Fetch = {
  GET: async (url: string) => {
    return await axios.get(url).then((resp: AxiosResponse<ResponseData>) => {
      const data: ResponseData = resp.data;
      return data;
    });
  },
  POST: async <dataType>(url: string, data: dataType) => {
    return await axios
      .post(url, data)
      .then((resp: AxiosResponse<ResponseData>) => {
        const data: ResponseData = resp.data;
        return data;
      });
  },
  PUT: async <dataType>(url: string, data: dataType) => {
    return await axios
      .put(url, data)
      .then((resp: AxiosResponse<ResponseData>) => {
        const data: ResponseData = resp.data;
        return data;
      });
  },
  DELETE: async <dataType>(url: string, data: dataType) => {
    return await axios
      .delete(url, { data })
      .then((resp: AxiosResponse<ResponseData>) => {
        const data: ResponseData = resp.data;
        return data;
      });
  },
};
//     POST:,
//     PUT,
//     DELETE,
// }
export default Fetch;
