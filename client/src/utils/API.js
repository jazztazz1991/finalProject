import axios from "axios";

export default {
  getHouses: function() {
    return axios.get("/api/house");
  },
  getHouse: function(id) {
    return axios.get("/api/house/" + id);
  }
};

