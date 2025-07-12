

import express from "express";
import {
  requestSwap,
  getMySwaps,
  getSwapById,
  acceptSwap,
  rejectSwap,
  deleteSwap,
} from "../controllers/swapController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// @route   POST /api/swaps
// @desc    Create a new swap request
// @access  Private
router.post("/", protect, requestSwap);

// @route   GET /api/swaps
// @desc    Get all swaps related to logged-in user
// @access  Private
router.get("/", protect, getMySwaps);

// @route   GET /api/swaps/:id
// @desc    Get swap by ID
// @access  Private
router.get("/:id", protect, getSwapById);

// @route   PUT /api/swaps/:id/accept
// @desc    Accept a swap request
// @access  Private
router.put("/:id/accept", protect, acceptSwap);

// @route   PUT /api/swaps/:id/reject
// @desc    Reject a swap request
// @access  Private
router.put("/:id/reject", protect, rejectSwap);

// @route   DELETE /api/swaps/:id
// @desc    Delete a swap request
// @access  Private
router.delete("/:id", protect, deleteSwap);

export default router;
