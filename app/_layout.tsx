import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="(tabs)"/>
        <Stack.Screen name="produto/maisVendidos/[id]"/>
        <Stack.Screen name="produto/promocao/[id]"/>
    </Stack>
  );
}
