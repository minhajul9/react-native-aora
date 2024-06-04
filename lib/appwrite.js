import { Account, Client, ID } from 'react-native-appwrite';


export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.minhajandroid.aora',
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
alert("clicked")
    try {

        // Register User
        account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
            .then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });

    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

