/*
 * Copyright 2014-2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Axios from 'axios'
import router from '../router'
let axiosIns = Axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 60 * 1000
});
// axiosIns.defaults.baseURL = 'http://127.0.0.1:8081';
axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
// axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.responseType = 'json';
// axiosIns.defaults.baseURL = 'http:127.0.0.1:8080'
axiosIns.defaults.validateStatus = function () {
    return true
};
// http response interceptor
axiosIns.interceptors.response.use(
    response => {
        if (response.data && response.data.code === 302000) {
            
            router.push({
                path: '/login',
                query: { redirect: router.currentRoute.fullPath }
            })
        }
        if (response.data && (response.data.code === 202052 || response.data.code === 202053)) {
            router.push({
                path: "/login"
            })
        }
        return response;
    },
    error => {
        if (error =='Error: Network Error'){
            router.push({
                path: "/login"
            })
        }
        if (error.message.includes('timeout')) {
            if (localStorage.getItem('lang') === "en") {
                error.data = 'Timeout'
            } else {
                error.data = '请求超时'
            }
        }
        return Promise.reject(error)
    });

export default {
    axiosIns
}
/**post
 * @param options
 * @return {Promise}
 */
export function post(options) {
    return new Promise((resolve, reject) => {
        axiosIns(options).then(response => {
            resolve(response)
        })
            .catch(error => {
                reject(error)
            })
    })
};
/**get
 * @param options
 * @return {Promise}
 */
export function get(options) {
    return new Promise((resolve, reject) => {
        axiosIns(options).then(response => {
            resolve(response)
        })
            .catch(error => {
                reject(error)
            })
    })
};

/**patch
 * @param options
 * @return {Promise}
 */
export function patch(options) {
    return new Promise((resolve, reject) => {
        axiosIns(options).then(response => {
            resolve(response)
        })
            .catch(error => {
                reject(error)
            })
    })
};
/**put
 * @param options
 * @return {Promise}
 */
export function put(options) {
    return new Promise((resolve, reject) => {
        axiosIns(options).then(response => {
            resolve(response)
        })
            .catch(error => {
                reject(error)
            })
    })
};
/**delete
 * @param options
 * @return {Promise}
 */
export function deleted(options) {
    return new Promise((resolve, reject) => {
        axiosIns(options).then(response => {
            resolve(response)
        })
            .catch(error => {
                reject(error)
            })
    })
};
