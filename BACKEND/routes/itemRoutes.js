// backend/routes/itemRoutes.js

import express from "express";
import {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
  getMyItems,
} from "../controllers/itemController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// @route   POST /api/items
// @desc    Create a new item
// @access  Private
router.post("/", protect, createItem);

// @route   GET /api/items
// @desc    Get all items
// @access  Public
router.get("/", getAllItems);

// @route   GET /api/items/my
// @desc    Get items of logged-in user
// @access  Private
router.get("/my", protect, getMyItems);

// @route   GET /api/items/:id
// @desc    Get item by ID
// @access  Public
router.get("/:id", getItemById);

// @route   PUT /api/items/:id
// @desc    Update item
// @access  Private
router.put("/:id", protect, updateItem);

// @route   DELETE /api/items/:id
// @desc    Delete item
// @access  Private
router.delete("/:id", protect, deleteItem);

export default router;