import Post from '../models/post.js';

export const getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
};

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'All fields are required' });

  const newPost = new Post({ title, content });
  await newPost.save();
  res.status(201).json(newPost);
};
