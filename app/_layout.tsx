import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="(tabs)"/>
        
        
        {/* <Stack.Screen name="produtos/maisVendidos/[id]"/>
        <Stack.Screen name="produtos/promocao/[id]"/>
        <Stack.Screen name="produtos/produto/[id]"/> */}
    </Stack>
  );
}
