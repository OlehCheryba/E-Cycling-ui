import axios from 'axios';

export const authAPI = {
  me() {
    return fetch(`http://localhost:3000/auth/me`, {
      withCredentials: true,
      credentials: 'include'
    })
      .then(res => res.json());
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
  }
}