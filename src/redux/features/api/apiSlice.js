import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";



const baseQuery = fetchBaseQuery({
    baseUrl: "https://todo-api-goni.vercel.app/api/todo",
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: ["Task"], //TagS WhiteLists
    endpoints: (builder) => ({}),
})


