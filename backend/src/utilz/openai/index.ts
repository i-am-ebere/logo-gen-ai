import OpenAI from "openai/index";
import {envVars} from "../env-config";

export const openaiClient = new OpenAI({
    apiKey: envVars.OPENAI_API_KEY,
    organization: envVars.OPENAI_ORG
});
