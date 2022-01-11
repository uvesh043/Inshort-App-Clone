import Express from "express";
// import getNews from '../Controller/news-controller.js'
import GetNews from "../Controller/news-controller";

const router = Express.Router();
router.get("/news", GetNews);
export default router;
