import PostSchema from "../models/post.model.js";
import TagModel from "../models/tag.model.js";

export const createPost = async (req, res) => {
  try {
    const post = await PostSchema.create(req.body);
    res.status(201).json({ ok: true, data: post });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostSchema.find({ deleted: false }).populate("author", "profile", "tags");
    res.status(200).json({ ok: true, data: posts });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updated = await PostSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ ok: true, data: updated });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};

export const deletePost = async (req, res) => {
  try {
    await PostSchema.findByIdAndUpdate(req.params.id, { deleted: true });
    res.status(200).json({ ok: true, msg: "Post eliminado (soft)" });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};

export const addTagToPost = async (req, res) => {
  try {
    const { tagName } = req.body;
    const tag = await TagModel.findOne({ name: tagName });
    if (!tag) tag = await TagModel.create({ name: tagName });
    const post = await PostSchema.findByIdAndUpdate(req.params.id, { $addToSet: { tags: tag._id } }, { new: true }).populate("tags", "name");
    res.status(200).json({ ok: true, data: post });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};