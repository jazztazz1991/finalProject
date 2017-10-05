import axios from "axios";

export default {
  // Gets all books
  getHouses: function() {
    return axios.get("/api/house");
  },
  // Gets the book with the given id
  getHouse: function(id) {
    return axios.get("/api/house/" + id);
  }
};

