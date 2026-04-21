import { authApi } from "./auth-api";

export const issueApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    getIssues: builder.query({
      query: (params) => ({
        url: "/issues/get-issues",
        params,
      }),
      providesTags: ["Issues"]
    }),
    createIssue: builder.mutation({
      query: (newIssue) => ({
        url: "/issues",
        method: "POST",
        body: newIssue,
      }),
      invalidatesTags: ["Issues", "Users","IssueCount"],
    }),
    getIssueCount:builder.query({
      query:()=>({
        url:"/issues/get-issues-count",
      }),
      providesTags: ["IssueCount"]
    })
  }),
});

export const { useGetIssuesQuery, useCreateIssueMutation, useGetIssueCountQuery } = issueApi;
