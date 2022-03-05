import React,{Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionScreen from './screens/TransactionScreen';
import SearchScreen from './screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
        render(){
            return(
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Transaction" component={TransactionScreen}/>
                        <Tab.Screen name="Search" component={SearchScreen}/>
                    </Tab.Navigator>
                </NavigationContainer>
            )
        }
}