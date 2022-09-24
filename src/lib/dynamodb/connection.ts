import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {config} from "../../config";

export const client = new DynamoDBClient({
    region: config.db.region,
    credentials: {
        accessKeyId: config.db.userKey,
        secretAccessKey: config.db.userSecret
    }
});
