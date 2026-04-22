import { authApi } from "./auth-api";

export const commentApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: (data) => ({
        url: "/comments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Comments", "Issues"],
    }),
    getComments: builder.query({
      query: (issueId) => `/comments/${issueId}`,
      providesTags: ["Comments"],
    }),
  }),
});

export const {useCreateCommentMutation, useGetCommentsQuery} = commentApi;
