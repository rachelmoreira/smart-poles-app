import axios from "axios";
import { API_BASE_URL } from "../shared/Config";

// export const getCondominiums = () => {
//     return axios({
//         url: `${API_BASE_URL}/api/condominiums`,
//         method: 'get',
//     });
// }

export const CondominiumService = {
  getCondominiums: function () {
    return axios({
      url: `${API_BASE_URL}/api/condominiums`,
      method: "get",
    });
  },
  getMetrics: function (id,metric) {
    return axios({
      url: `${API_BASE_URL}/api/metrics?condominiumCode=${id}&metricName=${metric}`,
    //   url: `${API_BASE_URL}/api/metrics?condominiumCode=123&metricName=temperature`,
      method: "get",
    });
  },
};
