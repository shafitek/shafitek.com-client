import React, { useEffect, useState } from 'react'
import axios from 'axios';

function HttpRequest(url) {
    const [req, setReq] = useState({
        loading: false,
        data: null,
        error: false,
    });

    useEffect(async () => {
        setReq({
            loading: true
        });

        try {
            const response = await axios.get(url);
            setReq({
                loading: false,
                data: response,
                error: false
            });
        } catch (err) {
            setReq({
                loading: false,
                data: err,
                error: true
            });
        }
    }, [url])

    return req;
}

export default HttpRequest
