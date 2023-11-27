import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        header: ({ scene, previous, navigation }) => {
                            return <Header navigation={navigation} />;
                        },
                    }}
                >
                    <Stack.Screen
                        name="Login"
                        component={LoginPage}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="Dashboard" component={HomePage} />
                    <Stack.Screen name="UserProfile" component={Profile} />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}
