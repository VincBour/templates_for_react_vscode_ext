import { useQuery } from 'react-query';

const [FCName] = () => {
    return useQuery("queryHooks", () => {
        // return fetch("/api/data") as json
        return "Hello";
    });
};

export default [FCName];