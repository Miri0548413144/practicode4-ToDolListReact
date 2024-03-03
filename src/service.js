import axios from 'axios';

const apiUrl = "http://localhost:5114"

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`${apiUrl}/items`, { "name":name,"isComplete":false });
    return result.data;
    // return {};
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    //
    const result = await axios.put(`${apiUrl}/items/${id}`, { isComplete });
    return result.data;
    //return {};
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    await axios.delete(`${apiUrl}/items/${id}`);
   // return result.data;
  }
};
