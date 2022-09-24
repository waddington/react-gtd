import * as uuid from 'uuid';
import {
    DynamoDBClient,
    PutItemCommand,
    GetItemCommand,
    UpdateItemCommand,
    DeleteItemCommand
} from '@aws-sdk/client-dynamodb';
import {client} from "./connection";
import {config} from "../../config";
import {logger} from "../../logging/logger";

export const get = async () => {
    logger.info('DynamoDB GET')
    const data = await client.send(
        new GetItemCommand({
            TableName: config.db.tableName,
            Key: {
                id: { S: 'd381c63f-edc5-4988-9dda-13126baf6225' }
            }
        })
    )
    return data;
}

export const put = async () => {
    logger.info('DynamoDB PUT')
    const data = await client.send(
        new PutItemCommand({
            TableName: config.db.tableName,
            Item: {
                id: { S: uuid.v4() },
                content: { S: 'req.body.content' }
            }
        })
    );
    return data
}
