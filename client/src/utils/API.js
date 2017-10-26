import axios from "axios";

export default {
  getHouses: function() {
    return axios.get("/api/house");
  },
  getHouse: function(id) {
    return axios.get("/api/house/" + id);
  },
  createHouse: function(houseData) {
    return axios.post("/api/house", houseData);
  },
    deleteHouse: function(id) {
    return axios.delete("/api/house/" + id);
  },
    login: function(userData) {
        return axios.post("/api/login", userData);
    },
    logout: function() {
        return axios.get("/api/logout");
    },
    register: function(userData) {
        return axios.post("/api/register", userData);
    }
};

