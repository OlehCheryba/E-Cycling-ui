import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  credentials: 'include',
  baseURL: 'http://localhost:3000/',
  headers:     {
    'Content-type': 'application/json'
  }
});

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password) {
    return instance.post(`auth/login`, {
      email,
      password
    })
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}
export const productsAPI = {
  getProducts(pageNumber, pageSize) {
    return instance.get(`products?page=${pageNumber}&size=${pageSize}`)
  },
  getProductInfo(productId) {
    return instance.get(`products/${productId}`)
  },
  addProduct(name, price) {
    return instance.post('products', {
      name,
      price
    })
  }
}

export const customersAPI = {
  getCustomers(pageNumber, pageSize) {
    return instance.get(`customers?page=${pageNumber}&size=${pageSize}`)
  },
  getCustomerInfo(customerId) {
    return instance.get(`customers/${customerId}`)
  }
}

export const cartAPI = {
  getItems() {
    return JSON.parse(localStorage.getItem('cart') || '{}');
  },
  addItem(itemId) {
    const items = JSON.parse(localStorage.getItem('cart') || '{}');
    items[itemId] = (items[itemId] || 0) + 1;
    localStorage.setItem('cart', JSON.stringify(items));
  }
}