const BASE_URL = 'https://brainy-erin-peacock.cyclic.app/api/v1';

const api = {
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
    console.log(id);
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
};

export default api;

// const api = (() => {
//   const BASE_URL = 'https://62e9efae01787ec7121e79b9.mockapi.io';

//   async function getAllArticles() {
//     const response = await fetch(`${BASE_URL}/articles`, {
//       //   method: 'GET',
//       //   credentials: 'include',
//       //   headers: {
//       //     'Access-Control-Allow-Credentials': 'true',
//       //   },
//       method: 'GET',
//       headers: { 'content-type': 'application/json' },
//     });

//     const responseJson = await response.json();

//     // if (responseJson.status !== 'success') {
//     //   return { error: true, data: null, msg: responseJson.msg };
//     // }

//     // return { error: false, data: responseJson.data, msg: responseJson.msg };

//     return responseJson;
//   }

//   return {
//     getAllArticles,
//   };

//   async function getArticleById(id) {
//     const response = await fetch(`${BASE_URL}/articles/${id}`, {
//       method: 'GET',
//       headers: { 'content-type': 'application/json' },
//     });

//     const responseJson = await response.json();
//     return responseJson;
//   }
//   return {
//     getArticleById,
//   }
// })();

// export default api;
