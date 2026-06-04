import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    validateStatus: () => true
});

export async function createPost(postData) {
    return await axiosInstance.request({
        method: 'POST',
        url: '/posts',
        data: postData
    });
}

export async function getPostById(postId) {
    return await axiosInstance.request({
        method: 'GET',
        url: `/posts/${postId}`
    });
}

export async function getPosts() {
    return await axiosInstance.request({
        method: 'GET',
        url: '/posts'
    });
}

export async function getPostComments(postId) {
    return await axiosInstance.request({
        method: 'GET',
        url: `/posts/${postId}/comments`
    });
}

export async function deletePost(postId) {
    return await axiosInstance.request({
        method: 'DELETE',
        url: `/posts/${postId}`
    });
}