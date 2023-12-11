import express, { Application, Request, Response } from "express";
import cors from "cors";
import { getReasonPhrase, StatusCodes } from "http-status-codes";
import { rateLimit } from "express-rate-limit";

import { config } from "dotenv";
import { openaiClient } from "./utilz/openai";
import { ImageRequest } from "./types/request";

const rateLimitMiddleware = rateLimit({
  windowMs: 60 * 1000,
  limit: 2,
  standardHeaders: true,
  legacyHeaders: false,
  skipFailedRequests: true,
  handler: (_: Request, res: Response) => {
    return res
      .status(StatusCodes.TOO_MANY_REQUESTS)
      .json({ message: "You can only send 2 requests per minute." });
  },
});

config();
const PORT = process.env.PORT;
const server: Application = express();
server.use(cors());
server.use(express.json());
server.use(rateLimitMiddleware);

server.post("/api/v1/images", async (req: ImageRequest, res: Response) => {
  try {
    if (
      (req.body.companyName || "").trim().length === 0 ||
      (req.body.companySector || "").trim().length === 0
    ) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Company name or company sector is invalid",
      });
    }
    let prompt = `create a`;
    prompt += `${
      req.body.companySector !== "others"
        ? `${req.body.companySector} vector logo for a company called ${req.body.companyName}`
        : `vector logo for a company called ${req.body.companyName}`
    }`;
    const result = await openaiClient.images.generate({
      model: "dall-e-2",
      prompt: prompt,
      size: "256x256",
      n: 3,
    });

    return res.status(StatusCodes.OK).json(result.data);
  } catch (e) {
    console.log(e);
    res.status(StatusCodes.SERVICE_UNAVAILABLE).json({});
  }
});

server.all("*", (_: Request, res: Response) => {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: getReasonPhrase(StatusCodes.NOT_IMPLEMENTED) });
});

server.listen(PORT, () => {
  console.log(`Node app running on ${PORT}`);
});
