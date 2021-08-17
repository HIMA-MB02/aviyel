const getAPI = async (webApiUrl: string) => {
    try {
        const request = await fetch(webApiUrl).then(res => res.json());
        return request;
    } catch (err) {
        return err;
    }
};

export default getAPI;