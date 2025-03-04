import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

const QueryClientParams: QueryClientConfig = {
  defaultOptions: {
    queries: {
      enabled: true,
      staleTime: 1000 * 5,
      networkMode: "online",
      refetchInterval: 1000 * 10,
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      gcTime: 1000 * 20,
    },
  },
};

export const queryClient = new QueryClient(QueryClientParams);
export default queryClient;
