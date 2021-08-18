import { IDocument } from '../redux/reducers/types';
import { initialDocumentList } from '../utils/mock';

const getAPI = async (webApiUrl: string) => {
    try {
        const request = await fetch(webApiUrl).then((res) => res.json());
        return request;
    } catch (err) {
        return err;
    }
};

export const fetchDocAPI = (
    id: number
): Promise<{ status: number; data: any } | Error> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const currentDocument: IDocument = initialDocumentList.filter(
                (document) => document.meta.id === id
            )[0];
            if (currentDocument) {
                resolve({
                    data: currentDocument,
                    status: 200
                });
            } else {
                reject(new Error('Something went wrong'));
            }
        }, 1000);
    });
};

export default getAPI;
