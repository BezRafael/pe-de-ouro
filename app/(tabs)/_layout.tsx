import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function tabLayout(){
    return (
        <Tabs screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'yellow',
                tabBarStyle: {backgroundColor: '#283618'}

        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
        </Tabs>
    );
}