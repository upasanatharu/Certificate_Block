import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// API.interceptors.request.use((req) => {
//     if(localStorage.getItem('profile')){
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }

//     return req;
// })

// export const fetchPost = (id) => API.get(`/posts/${id}`);
// export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
// export const fetchPostsbySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`) 
// export const createPost = (newPost) => API.post('/posts', newPost);
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/posts/${id}`);
// export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// export const signIn = (formData) =>{
//     // console.log('rahil');
//     return API.post('/user/signin', formData);
// } 
// export const signUp = (formData) => {
//     // console.log(formData);
//     return axios.post('http://localhost:5000/user/signup', formData)};

export const fetchUniversites = () => {
    console.log("inside fetchUni");
    return API.get('/universites');
}

export const updateUniversity = (updatedUniversity) => {
    console.log("inside UpdateUni");
    console.log(updatedUniversity);
    return API.patch('/universites', updatedUniversity);
}

export const UniversitySignUp = (formData) => {
    return API.post('/user/UniversitySignup', formData);
}

export const UniversitySignIn = (formData) => {
    console.log("chlaa chlaaa chlaaaaa chlaaaaaaaa");
    return API.post('/user/UniversitySignIn',formData);
};

export const OwnerSignUp = (formData) => {
    console.log("inside api function")
    console.log("still inside api function")
    return API.post('/OwnerUser/OwnerSignUp', formData);
}

export const OwnerSignIn = (formData) => {
    console.log("chlaa chlaaa chlaaaaa chlaaaaaaaa");
    return API.post('/OwnerUser/OwnerSignIn', formData);
};
export const GranteeSignIn = (formData) => {
    console.log("chlaa chlaaa chlaaaaa chlaaaaaaaa");
    return API.post('/OwnerUser/GranteeSignIn', formData);
};