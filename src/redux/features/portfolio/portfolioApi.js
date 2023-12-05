import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";


export const portfolioApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        sendMail: builder.mutation({
            query: (data) => ({
                url: "/send-mail",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Email Send Success");
                    }
                }catch(err) {
                    ErrorToast("Something Went Wrong!")
                }
            }
        }),


    }),
})


export const {useSendMailMutation} = portfolioApi;