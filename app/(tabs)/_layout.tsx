import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Appearance } from "react-native";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#DDA15E',
            tabBarStyle: {backgroundColor: '#283618'}
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />

            <Tabs.Screen
                name="(categoria)"
                options={{
                    title: "Categoria",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="th-list" color={color} />,
                }}
            />

            <Tabs.Screen
                name="menu"
                options={{
                    title: "Menu",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="list-alt" color={color} />,
                }}
            />

             <Tabs.Screen
                name="sobre"
                options={{
                    title: "Sobre nós",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle-o" color={color} />,
                }}
            />
        </Tabs>
    );
}