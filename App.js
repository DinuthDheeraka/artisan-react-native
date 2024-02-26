import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProductViewScreen from "./screens/ProductViewScreen";
import ArtistProfileScreen from "./screens/ArtistProfileScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HOME" component={HomeScreen} options={
                    {
                        headerShown: false,
                        headerTitleStyle: {
                            color: '#101010',
                            fontWeight: '500',
                            fontSize: 14
                        }
                    }
                }/>
                <Stack.Screen name="ABOUT THE ARTWORK" component={ProductViewScreen} options={{
                    headerShown: true, headerTitleStyle: {
                        color: '#101010',
                        fontWeight: '500',
                        fontSize: 14
                    }
                }}/>
                <Stack.Screen name="ARTIST PROFILE" component={ArtistProfileScreen} options={{
                    headerShown: true,
                    headerTitleStyle: {
                        color: '#111111',
                        fontWeight: '500',
                        fontSize: 14,
                    }
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
