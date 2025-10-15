import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

import output from "../../../../amplify_outputs.json";

Amplify.configure(output);

const SignOutButton = () => {
    const { signOut } = useAuthenticator();
    return (
       <View style={styles.signOutButton}>
        <Button title="Sign out" onPress={signOut} />
       </View>
    );
}

export const App = () => {
    return (
        <Authenticator.Provider>
            <Authenticator>
                <SignOutButton />
            </Authenticator>
        </Authenticator.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    signOutButton: {
        alignSelf: "flex-end",
    }
});
