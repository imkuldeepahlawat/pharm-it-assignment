import axios from "axios";
import { useSnackbar } from "notistack";
// https://pharmit.onrender.com
const url = `http://127.0.0.1:8082`;
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
export const deleteAction = async (data) => {
  try {
    console.log(data);
    const response = await axios.delete(`${url}/products/${data}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
