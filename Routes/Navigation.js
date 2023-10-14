
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Components/Screen1'
import Chose from '../Components/Screen2'

const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name ='Home'component={Home} />
                <Stack.Screen name='Chose' component={Chose} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;