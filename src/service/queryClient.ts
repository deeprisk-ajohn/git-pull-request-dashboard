import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

const QueryClientParams: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchInterval: 1000 * 10,
      staleTime: 1000 * 5,
      networkMode: "online",
    },
  },
};

export const queryClient = new QueryClient(QueryClientParams);
export default queryClient;
