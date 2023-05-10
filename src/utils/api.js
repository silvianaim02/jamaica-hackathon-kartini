const api = (() => {
  const BASE_URL = 'https://62e9efae01787ec7121e79b9.mockapi.io';

  async function getAllArticles() {
    const response = await fetch(`${BASE_URL}/articles`, {
      //   method: 'GET',
      //   credentials: 'include',
      //   headers: {
      //     'Access-Control-Allow-Credentials': 'true',
      //   },
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });

    const responseJson = await response.json();

    // if (responseJson.status !== 'success') {
    //   return { error: true, data: null, msg: responseJson.msg };
    // }

    // return { error: false, data: responseJson.data, msg: responseJson.msg };

    return responseJson;
  }

  return {
    getAllArticles,
  };
})();

export default api;
