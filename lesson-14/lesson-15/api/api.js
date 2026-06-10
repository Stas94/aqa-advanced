import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    validateStatus: () => true,
});

export async function postsWithCustomHeaders(cusotmHeaders, postId) {
    return axiosInstance.request({
        method: "GET",
        url: `/posts/${postId}`,
        headers: cusotmHeaders,
    });
}

export async function fetchTodo(id) {
    return axiosInstance.request({
        method: "GET",
        url: `/todos/${id}`,
    })
}