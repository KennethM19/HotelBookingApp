import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerStyle: {
                backgroundColor: '#25292e'
            },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: {
                backgroundColor: '#25292e',
            }
        }}>
            <Tabs.Screen name="index" options={{
                title: '', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name='hotels' options={{
                title: 'Hotels', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'business' : 'business-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name='favorites' options={{
                title: 'Favorites', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'star' : 'star-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name='account' options={{
                title: 'Account', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} />
                )
            }} />
        </Tabs>
    )
}