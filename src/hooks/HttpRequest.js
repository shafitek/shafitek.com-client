import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { setupCache } from "axios-cache-adapter";

// Store items in cache for 15 minutes
const cache = setupCache({
  maxAge: process.env.REACT_APP_PAGE_CACHE_TIME
});

// Currently URL requests are cached in MEMORY and are stored for 15 minutes.
const axoiosCached= axios.create({
    adapter: cache.adapter
});

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
            const response = await axoiosCached.get(url);
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
