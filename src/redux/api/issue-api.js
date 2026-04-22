import { authApi } from "./auth-api";

export const issueApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    getIssues: builder.query({
      query: (params) => ({
        url: "/issues/get-issues",
        params,
      }),
      providesTags: ["Issues"],
    }),
    createIssue: builder.mutation({
      query: (newIssue) => ({
        url: "/issues",
        method: "POST",
        body: newIssue,
      }),
      invalidatesTags: ["Issues", "Users", "IssueCount"],
    }),
    getIssueCount: builder.query({
      query: () => ({
        url: "/issues/get-issues-count",
      }),
      providesTags: ["IssueCount"],
    }),
    updateIssue: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/issues/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Issues", "IssueCount"],
    }),
    deleteIssue: builder.mutation({
      query: (id) => ({
        url: `/issues/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Issues", "IssueCount"],
    }),
    updateIssueStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/issues/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Issues", "IssueCount"],
    }),
  }),
});

export const {
  useGetIssuesQuery,
  useCreateIssueMutation,
  useGetIssueCountQuery,
  useUpdateIssueMutation,
  useDeleteIssueMutation,
  useUpdateIssueStatusMutation 
} = issueApi;
