import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Main} from "./src/Main";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {QueryClient,   QueryClientProvider,} from "@tanstack/react-query";

const queryClient = new QueryClient()
export default function App() {
  return  (
      <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <Main />
          </SafeAreaProvider>
      </QueryClientProvider>
  )
}
