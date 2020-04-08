import axios from "axios";

interface postRequestType  {
    url: string,
    data: any
};

interface getRequestType  {
    url: string,
};

const basePath: string = 'https://apidev.kene.info/'; // 'https://9c9hyjqj1c.execute-api.us-east-1.amazonaws.com/dev/';

export const httpPost: any = ({url, data}: postRequestType) => axios.request<postRequestType>({
    method: 'POST',
    url: basePath + url,
    data,
});

export const httpGet: any = ({url}: getRequestType) => axios.request<getRequestType>({
    method: 'GET',
    url: basePath + url,
});
