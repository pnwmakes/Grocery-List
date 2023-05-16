import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CreateListScreen from './screens/CreateListScreen';
import FinalListScreen from './screens/FinalListScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import listReducer from './reducers/listReducer';
import rootReducer from './reducers';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name='Home' component={HomeScreen} />
                        <Stack.Screen
                            name='CreateList'
                            component={CreateListScreen}
                        />
                        <Stack.Screen
                            name='FinalList'
                            component={FinalListScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
