import UserModel from "../models/user.model.js";
import ProfileModel from "../models/profile.model.js";
import PostModel from "../models/post.model.js";

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await UserModel.create({ username, email, password });
    res.status(201).json({ ok: true, data: newUser });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find().populate("profile");
    res.status(200).json({ ok: true, data: users });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id).populate("profile");
    res.status(200).json({ ok: true, data: user });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updated = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ ok: true, data: updated });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, { active: false });
    await PostModel.updateMany({ author: user._id }, { deleted: true });
    res.status(200).json({ ok: true, msg: "Usuario eliminado (soft)" });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};

export const assignProfile = async (req, res) => {
  try {
    const profile = await ProfileModel.create(req.body);
    const user = await UserModel.findByIdAndUpdate(req.params.id, { profile: profile._id }, { new: true }).populate("profile");
    res.status(201).json({ ok: true, data: user });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};