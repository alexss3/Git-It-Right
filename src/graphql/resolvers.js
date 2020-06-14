import { gql } from 'apollo-boost';
import { loginUser, signOutUser } from './utils';
import { queries } from './queries';

export const typeDefs = gql`
    extend type Mutation {
        SetAccessToken: String!,
        SignOut: String!
    }
`;


export const resolvers = {
    Mutation: {
        setAccessToken: async (_root, { scopes }, { cache }) => {
            try {
                const result = await loginUser(scopes);
                const token = result.credential.accessToken;
                // The signed-in user info.
                cache.writeData({
                    data: { 
                        accessToken: token,
                        user: result.additionalUserInfo.username
                    }
                });
                return result.additionalUserInfo.username;
            } catch (error) {
                console.error(error.message);
                throw new Error(`Error: ${error.message}`);
            }
        },
        signOut: async (_root, _args, { cache }) => {
            try {
                const { user } = await cache.readQuery({
                    query: queries.GET_USER_DATA
                });
                await signOutUser();
                cache.writeData({
                    data: {
                        accessToken: '',
                        user: ''
                    }
                });
                return user;
            } catch (error) {
                throw new Error(`Error: ${error.message}`);
            }
            
        }
    }
}