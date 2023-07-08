import Fetch from "@api/fetch";
import { HOST_API } from "@api/host";

const ControllerName = "SampleApi";
const ControllerUri = HOST_API + "/" + ControllerName;

const SampleApi = {
  GetAll: async () => {
    const resp = await Fetch.GET(`${ControllerUri}/GetAll`);
    return resp;
  },
};
export default SampleApi;
