import axios from "axios";

export default {
  // Gets all Products
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the Products with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the Products with the given id
  deleteProducts: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a Products to the database
  saveProducts: function(productsData) {
    return axios.post("/api/products", productsData);
  },
  testUserRouter: function(){
    return axios.get("/api/user/test");
  },
  login: function(userData){
    return axios.post("/api/user/login", userData);
  },
  logout: function(){
    return axios.get("/api/user/logout");
  },
  signup: function(userData){
    return axios.post("/api/user/signup", userData);
  },
  getUser: function(){
    return axios.get("/api/user/data");
  }
};
