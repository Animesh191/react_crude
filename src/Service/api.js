import axios from 'axios';

const url='http://127.0.0.1:1000/users';

export const getusers=async()=>{
    return  await axios.get(url);
}

export  const adduser=async(user)=>{
    return await axios.post(url,user);
}
export const edituser=async(id,user)=>{
    return await axios.put(`${url}/${id}`,user);
}

export  const getCurUser=async(id)=>{
    return await axios.get(`${url}/${id}`);
}

export const deleteUser=async(id)=>{
    return await axios.delete(`${url}/${id}`);
}