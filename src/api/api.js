import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  credentials: 'include',
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json'
  }
});

export const authAPI = {
  register(login, email, password) {
    return instance.post(`auth/register`, {
      login,
      email,
      password
    });
  },
  login(email, password) {
    return instance.post(`auth/login`, {
      email,
      password
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
  refreshTokens() {
    return instance.get('auth/token');
  }
}
export const productsAPI = {
  getProducts(pageNumber, pageSize) {
    return instance.get(`products?page=${pageNumber}&size=${pageSize}`);
  },
  getProductInfo(productId) {
    return instance.get(`products/${productId}`)
  },
  addProduct(name, price, photo) {
    console.log(photo)
    const form = new FormData();
    form.append('name', name);
    form.append('price', price);
    form.append('photo', photo);
    form.append('photoSrc', photo.name)

    return instance.post('products', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}

export const customersAPI = {
  async getCustomerData() {
    try {
      return await instance.get(`customers/me`);
    } catch (e) {
      if (e.response.status === 403) {
        await authAPI.refreshTokens();
        return await instance.get(`customers/me`);
      }
    }
  },
  getCustomers(pageNumber, pageSize) {
    return instance.get(`customers?page=${pageNumber}&size=${pageSize}`);
  },
  getCustomerInfo(customerId) {
    return instance.get(`customers/${customerId}`);
  }
}

export const cartAPI = {
  createCart() {
    return instance.post('carts');
  },
  getCartProducts() {
    return instance.get('carts/my/products');
  },
  deleteCartProducts() {
    return instance.delete('carts/my/products');
  },
  async putCartProduct(product) {
    try {
      return await instance.put(`carts/my/products/${product.id}`, { product });
    } catch (e) {
      if (e.response.status === 404) {
        await this.createCart();
        return await instance.put(`carts/my/products/${product.id}`, { product });
      }
    }
  },
  deleteCartProduct(productId) {
    return instance.delete(`carts/my/products/${productId}`);
  }
}