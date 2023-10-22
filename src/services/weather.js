import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.openweathermap.org/data/2.5/'}),
    endpoints: (builder) => ({
        getData: builder.query({
            query: (location) => `weather?q=${location}&appid={29be3ab5d8a584353d178ff602fdcfaa}`
        })
    })
})

export const {useGetDataQuery} = weatherApi