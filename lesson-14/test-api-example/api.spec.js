import { postsWithCustomHeaders, fetchTodo } from '../lesson-15/api/api';

describe('API Tests', () => {
    test('має повертати 404 для неіснуючого ID', async () => {
        const todoId = 432;
        const resp = await fetchTodo(todoId);

        expect(resp.status).toBe(404);
    });

    test('перевірка кастомних хедерів і даних', async () => {
        const postid = 5;
        const customHeaders = {
            'X-Custom-Header': 'test-value',
            'X-Request-ID': '12345'
        };
        const resp = await postsWithCustomHeaders(customHeaders, postid);

        expect(resp.status).toBe(200);

        expect(resp.data.id).toBe(postid);
        expect(resp.data).toHaveProperty('userId');
        expect(resp.data).toHaveProperty('title');
        expect(resp.data).toHaveProperty('body');
        expect(resp.config.headers['X-Custom-Header']).toBe(customHeaders['X-Custom-Header']);
        expect(resp.config.headers['X-Request-ID']).toBe(customHeaders['X-Request-ID']);
    });
});