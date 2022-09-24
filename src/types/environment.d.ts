export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DYNAMODB_USER_ACCESS_KEY: string,
            DYNAMO_DB_SECRET: string,
            DYNAMO_DB_TABLE_NAME: string,
            DYNAMO_DB_REGION: string,
        }
    }
}
