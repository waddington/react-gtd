export const config = {
    db: {
        userKey: process.env.DYNAMODB_USER_ACCESS_KEY,
        userSecret: process.env.DYNAMO_DB_SECRET,
        tableName: process.env.DYNAMO_DB_TABLE_NAME,
        region: process.env.DYNAMO_DB_REGION
    }
}

const logConfig = () => {

}
logConfig();
