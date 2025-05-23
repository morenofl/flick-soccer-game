import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,   // ← hides the top bar on every screen
      }}
    />
  );
}
