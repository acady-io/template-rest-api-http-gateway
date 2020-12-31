import {AcadyApiResponse, ApiBuilder, ApiHeaders} from "acady-api-builder";
const apiBuilder = new ApiBuilder();

// Add your Api Routes below


apiBuilder.request('GET', '/', (apiRequest) => {
    console.log('ApiRequest', apiRequest);
    const response: AcadyApiResponse = {
        headers: new ApiHeaders([{
            key: 'Content-Type',
            value: 'application/json'
        }]),
        status: 200,
        body: JSON.stringify(apiRequest)
    };
    console.log('ApiResonse:', response);
    return response;
});






export default apiBuilder;
