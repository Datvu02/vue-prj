import axios from 'axios'
// import store from "../store";
// import router from "../router";

const baseUrl = 'http://vuecourse.zent.edu.vn';

export const apiAxios = axios.create({
  baseURL:`${baseUrl}/api`,
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
})
export default {
  getProductList (url) {
    return apiAxios({
      method: 'get',
      url: url,
    })
  },
  saveProduct (data) {
      return apiAxios({
          method: 'post',
          url: '/products',
          data
      })
  },
  updateProduct (data, id) {
    
    return apiAxios({
        method: 'post',
        url: '/products/' + id,
        data: data
    })
  },
  destroyProduct (id) {
    
    return apiAxios({
        method: 'delete',
        url: '/products/' + id,
    })
  }
}
