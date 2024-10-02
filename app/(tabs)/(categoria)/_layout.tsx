import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="categoria"/>
        <Stack.Screen name='[id]'/>
    </Stack>
  );
}
