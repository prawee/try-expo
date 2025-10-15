import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

import output from "../../../../amplify_outputs.json";

import TodoList from "../../todo/src/index";

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
                <SafeAreaProvider style={styles.container}>
                    <SignOutButton />
                    <TodoList />
                </SafeAreaProvider>
            </Authenticator>
        </Authenticator.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    signOutButton: {
        alignSelf: "flex-end",
    }
});
