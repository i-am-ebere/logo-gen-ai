import express, { Application, Request, Response } from "express";
import cors from "cors";
import { getReasonPhrase, StatusCodes } from "http-status-codes";
import { rateLimit } from "express-rate-limit";
import { redis } from "./utilz/redis-config";

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
    // const result = await openaiClient.images.generate({
    //   model: "dall-e-2",
    //   prompt: `create a vector logo for ${req.body.companyName} sector called ${req.body.companySector}`,
    //   size: "256x256",
    //   n: 3,
    // });
    //
    // return res.status(StatusCodes.OK).json(result.data);
    return res.status(StatusCodes.OK).json([
      {
        url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-GLF5p9CsJvpjXWIJGU1PS3Se/user-jNr65bMagT2QyzBJGXrQnkVx/img-O3eoL2CPfxUjcUbT9ncBwQFV.png?st=2023-12-10T16%3A10%3A36Z&se=2023-12-10T18%3A10%3A36Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-09T23%3A12%3A48Z&ske=2023-12-10T23%3A12%3A48Z&sks=b&skv=2021-08-06&sig=wL/L%2BJCTbeiBhYWbVgjmFhQijpSL/BNOrH3IzDn8n04%3D",
      },
      {
        url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-GLF5p9CsJvpjXWIJGU1PS3Se/user-jNr65bMagT2QyzBJGXrQnkVx/img-CZqO8djBJFeWIlyLI7kgOLNF.png?st=2023-12-10T16%3A10%3A36Z&se=2023-12-10T18%3A10%3A36Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-09T23%3A12%3A48Z&ske=2023-12-10T23%3A12%3A48Z&sks=b&skv=2021-08-06&sig=7zXtX2rxzw2owXAeCiK97TvF7/9JWEqXhVvs3vmFJZ4%3D",
      },
      {
        url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-GLF5p9CsJvpjXWIJGU1PS3Se/user-jNr65bMagT2QyzBJGXrQnkVx/img-xViEhH5Vv6UHQAefcdiNJHWn.png?st=2023-12-10T16%3A10%3A36Z&se=2023-12-10T18%3A10%3A36Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-09T23%3A12%3A48Z&ske=2023-12-10T23%3A12%3A48Z&sks=b&skv=2021-08-06&sig=Pv0RJ6NlyBXuG/GtOWkkrfQPMhI5sl5O6/k1vv2na6o%3D",
      },
    ]);
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
