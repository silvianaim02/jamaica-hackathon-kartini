const BASE_URL = 'https://brainy-erin-peacock.cyclic.app/api/v1';

const api = {
  async login({ email, password }) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      return { error: true, data: null, msg: responseJson.msg };
    }

    return { error: false, data: responseJson.data };
  },

  async register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      return { error: true, data: null, msg: responseJson.msg };
    }

    return { error: false, data: responseJson.data };
  },

  async postArticle({ title, category, body }) {
    const response = await fetch(`${BASE_URL}/articles`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify({ title, category, body }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      return { error: true, data: null, msg: responseJson.msg };
    }

    return { error: false, data: responseJson.data };
  },

  async showMe() {
    const response = await fetch(`${BASE_URL}/users/showMe`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Credentials': 'true',
      },
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      return { error: true, data: null, msg: responseJson.msg };
    }

    return { error: false, data: responseJson.data, msg: responseJson.msg };
  },

  async getAllArticles() {
    const response = await fetch(`${BASE_URL}/articles`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Credentials': 'true',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  },

  async getArticleById(id) {
    const response = await fetch(`${BASE_URL}/articles/${id}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Credentials': 'true',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  },

  async getLogout() {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Credentials': 'true',
      },
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      return { error: true, data: null, msg: responseJson.msg };
    }

    return { error: false, msg: responseJson.msg };
  },
};

export default api;
