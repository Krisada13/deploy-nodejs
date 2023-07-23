import exports from "express";
import {
  createAccount,
  deleteAccount,
  getAllAccount,
  updateAccount,
} from "../services/accountsService";

const Controller = exports.Router();

Controller.get("/register", getAllAccount);
Controller.post("/register", createAccount);
Controller.patch("register/:id", updateAccount);
Controller.delete("register/:id", deleteAccount);

export default Controller;
