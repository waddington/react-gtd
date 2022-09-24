import { logger } from "../logging/logger";
import { object } from "prop-types";

export const config = {
    db: {
        userKey: process.env.DYNAMODB_USER_ACCESS_KEY,
        userSecret: process.env.DYNAMO_DB_SECRET,
        tableName: process.env.DYNAMO_DB_TABLE_NAME,
        region: process.env.DYNAMO_DB_REGION,
    },
    auth: {
        providers: {
            github: {
                clientId: process.env.AUTH_GITHUB_CLIENT_ID,
                clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET,
            },
        },
        persistenceTableName: process.env.AUTH_PERSISTENCE_TABLE_NAME,
    },
};
