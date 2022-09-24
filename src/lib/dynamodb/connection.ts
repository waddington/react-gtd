import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import {config} from "../../config";

export const client = new DynamoDBClient({
    region: config.db.region,
    credentials: {
        accessKeyId: config.db.userKey,
        secretAccessKey: config.db.userSecret
    }
});

export const documentClient = DynamoDBDocument.from(client)
