import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import {config} from "../../../config";
import { DynamoDBAdapter } from "@next-auth/dynamodb-adapter"
import {documentClient} from "../../../lib/dynamodb/connection";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: config.auth.providers.github.clientId,
            clientSecret: config.auth.providers.github.clientSecret,
        }),
        // ...add more providers here
    ],
    adapter: DynamoDBAdapter(documentClient, { tableName: 'GTDUsers' }),
}
export default NextAuth(authOptions)
