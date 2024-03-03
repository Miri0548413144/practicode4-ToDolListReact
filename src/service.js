import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5114";

axios.interceptors.response.use(
  (response) => response,
   (error) => {
    console.error('Error in response:', error.response);

    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)

    const result = await axios.post(`/items`, { "name":name,"isComplete":false });
    return result.data;
  },

  setCompleted: async(id, name,isComplete)=>{
    console.log('setCompleted', {id, isComplete})

    const result = await axios.put(`/items/${id}`, { "name":name,"isComplete":isComplete });
    return result.data;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    
    await axios.delete(`/items/${id}`);
  }
};
