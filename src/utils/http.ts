import axios from 'axios';
// import reduxState from '@/redux/index'

const instance = axios.create({
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    // const {token} =(reduxState as any).getState().userInfo
    // config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const {status}=error.response??{}
    // if(status === 401) {
    //   window.location.href='/login'
    // }
    
    return Promise.reject(error);
  }
);

export default instance;
