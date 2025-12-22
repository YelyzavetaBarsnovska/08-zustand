"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export default function TanStackProvider({ children }: ProviderProps) {
  const [client] = useState(() => new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
