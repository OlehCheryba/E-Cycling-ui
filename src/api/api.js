import axios from 'axios';

export const authAPI = {
  me() {
    return axios.get(`http://localhost:3000/auth/me`, {
      withCredentials: true,
      credentials: 'include'
    })
  },
  login(email, password) {
    return fetch(`http://localhost:3000/auth/login`, {
      headers: {
        'Content-type': 'application/json'
      },  
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    })
  },
  logout() {
    return fetch(`http://localhost:3000/auth/login`, {
      method: 'DELETE',
      withCredentials: true,
      credentials: 'include'
    })
  },
  
}
export const productsAPI = {
  getProducts(pageNumber, pageSize) {
    return fetch(`http://localhost:3000/products?page=${pageNumber}&size=${pageSize}`, {
      withCredentials: true,
      credentials: 'include'
    })
      .then(res => res.json());
  },
  getProductInfo(productId) {
    return fetch(`http://localhost:3000/products/${productId}`, {
      withCredentials: true,
      credentials: 'include'
    })
      .then(res => res.json());
  },
  addProduct(name, price) {
    return fetch('http://localhost:3000/products', {
      headers: {
        'Content-type': 'application/json'
      },  
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
      body: JSON.stringify({
        name,
        price
      })
    })
      .then(res => res.json());
  }
}

export const customersAPI = {
  getCustomers(pageNumber, pageSize) {
    return fetch(`http://localhost:3000/customers?page=${pageNumber}&size=${pageSize}`, {
      withCredentials: true,
      credentials: 'include'
    })
      .then(res => res.json());
  },
  getCustomerInfo(customerId) {
    return fetch(`http://localhost:3000/customers/${customerId}`, {
      withCredentials: true,
      credentials: 'include'
    })
      .then(res => res.json());
  }
}