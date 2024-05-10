import express from "express";
import { displayHomePage, displayProductPage, sympSuggestions, predDisease } from "../controllers/product.js"
const userRouter = express.Router();

userRouter.post("/", predDisease);
userRouter.post("/symptomsSuggestions", sympSuggestions)
export default userRouter;
