export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DYNAMODB_USER_ACCESS_KEY: string;
            DYNAMO_DB_SECRET: string;
            DYNAMO_DB_TABLE_NAME: string;
            DYNAMO_DB_REGION: string;
            AUTH_PERSISTENCE_TABLE_NAME: string;
            AUTH_GITHUB_CLIENT_ID: string;
            AUTH_GITHUB_CLIENT_SECRET: string;
        }
    }
}
