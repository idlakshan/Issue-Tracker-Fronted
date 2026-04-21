import { authApi } from "./auth-api";

export const issueApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    getIssues: builder.query({
      query: (params) => ({
        url: "/issues/get-issues",
        params,
      }),
    }),
    createIssue: builder.mutation({
      query: (newIssue) => ({
        url: "/issues",
        method: "POST",
        body: newIssue,
      }),
      invalidatesTags: ["Issues", "Users"],
    }),
  }),
});

export const { useGetIssuesQuery, useCreateIssueMutation } = issueApi;
