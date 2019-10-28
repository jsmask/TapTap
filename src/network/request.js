import axios from 'axios';
import router from '../router';
import { Indicator } from 'mint-ui';
import { BASEURL } from './../config';


function startLoading() {
    Indicator.open();
}

function endLoading() {
    Indicator.close();
}

const defaultOptions = {
    method: 'GET',
    params: {},
    url: "",
    isloading: true
}


const request = (options, isloading = true) => {
    const params = Object.assign({}, defaultOptions, options);

    const instance = axios.create({
        baseURL: BASEURL, //配置请求服务器路径
        timeout: 10000 //超时
    })

    instance.interceptors.request.use(options => {
        if (isloading) startLoading();
        return options;
    })

    instance.interceptors.response.use(res => {
        if (isloading) endLoading();
        return res.data;
    }, err => {
        if (isloading) endLoading();
        console.error(err)
    })

    return instance(params);
}

export default request;