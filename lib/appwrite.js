import { Account, Client, ID } from 'react-native-appwrite';


export const config = {
    endpoint: 'https://appwrite.io/v1',
    platform: 'com.minhaj.aora',
    projectId: '665c83cc0032f3e10d4d',
    databaseId: '665c861900038f423b46',
    userCollectionId: '665c862c00267ce4e15e',
    videosCollectionId: '665c865a003583640d3e',
    storageId: '665dcd930033d2c3cec6'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
    ;


const account = new Account(client);

export const createUser = async () => {

    try {
    
        const newAccount = await account.create(
            ID.unique(),
            "email", 
            "password", 
            "username"
        )
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

