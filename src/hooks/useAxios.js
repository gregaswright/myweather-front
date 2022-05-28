import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000'

const useAxios = () => {
    const [res, setRes] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const operation = async(params) => {
        console.log(params)
        try {
            setLoading(true)
            const result = await axios.request(params);
            setRes(result.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return {res, error, loading, operation}
};

export default useAxios