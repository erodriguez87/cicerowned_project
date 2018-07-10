import axios from "axios";

export default {
  // Gets all beers
  getBeers: function() {
    return axios.get("/api/beers");
  },

  // Gets the beer with the given id
  getBeersId: function(id) {
    return axios.get("/api/beers/" + id);
  },

  
  // Deletes the beer with the given id
  deleteBeer: function(id) {
    return axios.delete("/api/beers/" + id);
  },
  
  
  // Gets the beer by family name
  getBeersByStyle: function() {
    return axios.get("/api/styles");
  },

  // Users
  findAllUsers: function(id) {
    return axios.get("/api/users");
  },

  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  // Deletes the user with the request id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },

  updateUser: function(id) {
    return axios.put("/api/users/"  + id);
  },

  loadUserbyId: function(id) {
    return axios.get("/api/users/"  + id);
  }
};