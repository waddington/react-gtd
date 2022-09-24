import {logger} from "../logging/logger";
import {object} from "prop-types";

export const config = {
    db: {
        userKey: process.env.DYNAMODB_USER_ACCESS_KEY,
        userSecret: process.env.DYNAMO_DB_SECRET,
        tableName: process.env.DYNAMO_DB_TABLE_NAME,
        region: process.env.DYNAMO_DB_REGION
    },
    auth: {
        providers: {
            github: {
                clientId: process.env.AUTH_GITHUB_CLIENT_ID,
                clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET
            }
        },
        persistenceTableName: process.env.AUTH_PERSISTENCE_TABLE_NAME
    }
}

const getConfigPath = (path: string[], base: {}) => {
    const validTypesToPrint = [
        'string',
        'number'
    ]
    if (path.length === 1) {
        const key = path.shift() as string
        if (key in base) {
            const item = base[key]
            if (validTypesToPrint.includes(typeof item)) {
                return item
            }
            return 'UNLOGGABLE'
        }
        return undefined
    }

    if (path.length === 0) {
        return undefined
    }

    const firstElement = path.shift() as string

    return getConfigPath(path, base[firstElement]);
}

const logConfig = () => {
    const keysToLog = [
        'db.tableName',
        'db.region',
    ]
    logger.info('Application loaded the follow environment variables:')
    keysToLog.forEach(keyToLog => logger.info(`${keyToLog}: ${getConfigPath(keyToLog.split('.'), config)}`))
}
logConfig();
