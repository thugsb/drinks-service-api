import express from "express";
import * as coffeeController from "../controllers/coffee_controller";
import * as teaService from "../controllers/tea_controller";

export const router = express.Router();

router.get("/coffee", coffeeController.getCoffee);

router.get("/coffeelover", coffeeController.coffeeLover);

router.get("/tea", teaService.getTea);
