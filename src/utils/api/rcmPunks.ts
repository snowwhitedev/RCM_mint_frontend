import axios from 'axios'

import { setupInterceptorsTo } from 'config/axios/axiosInterceptors'

const AXIOS_BASE_URL = process.env.REACT_APP_API_BASE_URL
// const AXIOS_BASE_URL = 'http://localhost:8081'
const specificAxios = setupInterceptorsTo(axios.create())

export const fetchSignature = async (userAddress: any, amount: number) => {
  const body = { userAddress, amount }
  try {
    const { data } = await specificAxios.post(`${AXIOS_BASE_URL}/api/get-signature`, body)
    if (data.success === false) {
      return {
        status: false,
        message: 'Something went wrong',
        signature: '',
        deadline: '',
      }
    }
    return { status: true, message: 'success', signature: data.data.signature, deadline: data.data.deadline }
  } catch (e: any) {
    console.log('fetchSignature error', e.response)
    return {
      status: false,
      message: e.response?.data?.message ? e.response?.data?.message : 'Something went wrong',
      signature: '',
      deadline: '',
    }
  }
}
