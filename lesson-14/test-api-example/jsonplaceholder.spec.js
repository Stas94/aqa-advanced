import {
  createPost,
  getPostById,
  getPosts,
  getPostComments,
  deletePost
} from '../axios-example.js';

let postID;
let resp;

describe('JSONPlaceholder API Tests', () => {
  // beforeAll(async () => {
  //   const newPost = await createPost({
  //     title: 'Test Post',
  //     body: 'This is a test post for API testing',
  //     userId: 1
  //   });

  //   resp = newPost;
  //   postID = resp.data.id;
  // });

  // afterAll(async () => {
  //   await deletePost(postID);
  // });

  test('should fetch all posts', async () => {
    const response = await getPosts();

    expect(response.status).toBe(200);

    expect(Array.isArray(response.data)).toBe(true);

    const post = response.data[0];
    expect(post).toHaveProperty('userId');
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');
  });

  test('should fetch specific post by ID', async () => {
    const postid = 5;
    const response = await getPostById(postid);

    expect(response.status).toBe(200);

    expect(response.data.id).toBe(postid);
    expect(response.data).toHaveProperty('userId');
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
  });

  test('Get post by ID - failure wrong post ID', async () => {
    const response = await getPostById(150);

    expect(response.status).toBe(404);
  });

  test('should new post', async () => {
    const newPost = {
      title: 'Test Post',
      body: 'This is a test post for API testing',
      userId: 1
    };

    const response = await createPost(newPost);
    postID = response.data.id;

    expect(response.status).toBe(201);

    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
    expect(response.data).toHaveProperty('userId');

    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });

  test('should fetch comments for specific post', async () => {
    const response = await getPostComments(100);

    expect(response.status).toBe(200);

    const comment = response.data[0];
    expect(comment).toHaveProperty('postId');
    expect(comment).toHaveProperty('id');
    expect(comment).toHaveProperty('name');
    expect(comment).toHaveProperty('email');
    expect(comment).toHaveProperty('body');
  });

  test('delete post by ID', async () => {
    const response = await getPostById(postID);

    const deleteResponse = await deletePost(postID);
    expect(deleteResponse.status).toBe(200);
  });
});
