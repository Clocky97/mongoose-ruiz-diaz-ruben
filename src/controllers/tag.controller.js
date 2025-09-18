import TagSchema from "../models/tag.model.js";

export const createTag = async (req, res) => {
  try {
    const tag = await TagSchema.create(req.body);
    res.status(201).json({ ok: true, data: tag });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};

export const getAllTags = async (req, res) => {
  try {
    const tags = await TagSchema.find();
    res.status(200).json({ ok: true, data: tags });
  } catch (err) {
    res.status(500).json({ ok: false, msg: "Error interno" });
  }
};