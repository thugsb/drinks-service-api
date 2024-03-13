import { Request, Response } from "express";
import * as teaService from "../services/tea_service";

export const getTea = async (
  req: Request<object, object, object, { type: string | undefined }>,
  res: Response
) => {
  const { type } = req.query;
  const tea = teaService.getTea(type);
  res.json(tea).status(200);
};
