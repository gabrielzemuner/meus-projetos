import { Stack } from "expo-router";

export default function RootLayout() {
  // return <Stack />;
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="tarefas"
        options={{
          title: "Projeto Tarefas",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}
