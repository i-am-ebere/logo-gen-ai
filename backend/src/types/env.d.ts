export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            OPENAI_API_KEY: string;
            OPENAI_ORG: string;
        }
    }
}
