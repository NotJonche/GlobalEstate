const { Property } = require("../models");

// Create a new property
const createProperty = async (req, res) => {
  try {
    const { title, description, type, price, location, area_sqft } = req.body;

    if (!title || !type || !price || !location || !area_sqft) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const newProperty = await Property.create({
      title,
      description,
      type,
      price,
      location,
      area_sqft,
    });

    res.status(201).json({ message: "Property created!", data: newProperty });
  } catch (error) {
    console.error("❌ createProperty error:", error);
    res.status(500).json({ message: "Failed to create property", error });
  }
};

// Get all properties
const getProperties = async (req, res) => {
  try {
    const properties = await Property.findAll();
    res.status(200).json(properties);
  } catch (error) {
    console.error("❌ getProperties error:", error);
    res.status(500).json({ message: "Failed to fetch properties", error });
  }
};

module.exports = {
  createProperty,
  getProperties,
};
