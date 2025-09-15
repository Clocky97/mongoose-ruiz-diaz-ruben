import ProfileModel from "../models/profile.model.js";

export const createProfile = async (req, res) => {
  try {
    const profile = await ProfileModel.create(req.body);
    res.status(201).json({ ok: true, data: profile });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};

export const getAllProfiles = async (req, res) => {
  try {
    const profiles = await ProfileModel.find();
    res.status(200).json({ ok: true, data: profiles });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};