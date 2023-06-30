import React from "react";
import {Text, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Menu from "./Components/home/Menu";
import ListComponent from "./Components/list/List";
import NameComponent from "./Components/Name/Name";
import ApiComponent from "./Components/Api/MyApi";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Menu} options={{
                    tabBarLabel:"Home",
                    tabBarIcon: ({color,size}) => {
                    }
            }}>
            </Tab.Screen>
            <Tab.Screen name="list" component={ListComponent} options={{
                tabBarLabel:"Listado",
                tabBarIcon: ({color,size}) => {
                }
            }}>
            </Tab.Screen>
            <Tab.Screen name="nombre" component={NameComponent} options={{
                tabBarLabel:"Nombre",
                tabBarIcon: ({color,size}) => {
                }
            }}>
            </Tab.Screen>
            <Tab.Screen name="api" component={ApiComponent} options={{
                tabBarLabel:"MyOpenAI",
                tabBarIcon: ({color,size}) => {
                }
            }}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}
export default Navigation;