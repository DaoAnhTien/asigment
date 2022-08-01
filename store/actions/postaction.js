import Post from "../../models/Post";

export const INSERT_POST = "INSERTPOST";
export const DELETE_POST = "DELETEPOST";
export const UPDATE_POST = "UPDATEPOST";

export const insertpost = (post, name) => {
  const posts = new Post(post, name);
  return {
    type: INSERT_POST,
    posts: posts,
  };
};

export const updatepost = (post, name) => {
  const posts = new Post(post, name);
  return {
    type: UPDATE_POST,
    posts: posts,
  };
};
export const deletepost = (post) => {
  return {
    type: DELETE_POST,
    post: post,
  };
};
