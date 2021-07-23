const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  ClubPostComment,
} = require("../models");
const { isLoggedIn } = require("./middlewares");

// -----------comment------------

//Read
// 게시물별 전체 댓글
router.get(
  "/read/:postId", // category: announcement[공지사항],faq[문의게시판]
  // isLoggedIn,
  // upload.none(),
  async (req, res, next) => {
    try {
      const comments = await ClubPostComment.findAll({
        where: { post_id: postId },
        order: [["createdAt", "DESC"]],
      });

      res.json(comments);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

// Create
router.post("/create/:postId", 
// isLoggedIn, 
multer().none(),
async (req, res, next) => {
  try {
    const comment = await ClubPostComment.create({
      content: req.body.content,
      post_id: req.params.postId,
      // writer_id: req.user.id,
    });
    console.log("댓글 등록");
    res.json(comment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// Update
router.post(
  "/update/:commentId",
  // isLoggedIn,
  async (req, res, next) => {
    try {
      const comment = await ClubPostComment.fineOne(
        {
          content: req.body.content,
        },
        {
          where: { id: req.params.commentId },
        }
      );
      console.log("댓글 수정");
      res.json(comment);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

// Delete
router.delete(
  "/delete/:commentId",
  // isLoggedIn,
  // checkPermission,
  async (req, res, next) => {
    try {
      const post = await ClubPostComment.destroy({
        where: { id: req.params.commentId },
      });
      console.log("댓글 삭제");
      res.json(post);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
);
module.exports = router;
