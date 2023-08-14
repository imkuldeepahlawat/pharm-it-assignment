import axios from "axios";
import { useSnackbar } from "notistack";
// 

const url = `https://pharmit.onrender.com`;
// const url = `http://127.0.0.1:8082`;
// get all list
export const getAction = async (endpoint) => {
  try {
    const response = await axios.get(`${url}${endpoint}`);

    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
// add new product
export const postAction = async (data, endpoint) => {
  try {
    const response = await axios.post(`${url}${endpoint}`, data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    enqueueSnackbar("An error occurred while fetching data.", {
      variant: "error",
    });
    return null;
  }
};
// data changing
export const putAction = async (data, endpoint) => {
  try {
    const response = await axios.put(`${url}${endpoint}`, data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
// data delete
export const deleteAction = async (id) => {
  try {
    await axios.delete(`${url}/products/${id}`);
  } catch (error) {
    console.log(error);
  }
};
