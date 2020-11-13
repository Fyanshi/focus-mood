/* eslint-disable */
import axios from "@/api/axios.js";





/**
 *  代办
 */
export const login = data => {
    return axios.request({
        method: 'get',
        url: '/api/login',
        data: data,
    })
}