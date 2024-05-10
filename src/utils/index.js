import axios from 'axios';

export const moviesApi = axios.create({ 
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'de3a171c0b1b6a67bd62567eb91a752f',
    },
});

export const fetchToken = async () => {
    try {
        const { data } = await moviesApi.get('/authentication/token/new');
        const requestToken = data.request_token;
        if (data.success) {
           localStorage.setItem('request_token', requestToken);
              window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${window.location.origin}/approved/`;
        }
    } catch (error) {
        console.log(error)
    }
}

export const fetchSessionId = async () => {
    const requestToken = localStorage.getItem('request_token');
    if (!requestToken) {
        return null;
    }
    try {
        const { data } = await moviesApi.post('/authentication/session/new', {
            request_token: requestToken
        });
        if (data.success) {
            localStorage.setItem('session_id', data.session_id);
            return data.session_id; // Return session ID to be used immediately
        }
    } catch (error) {
        console.error("Error fetching session ID:", error);
        return null;
    }
    return null;
}

export const fetchGenres = async () => {
    try {
        const { data } = await moviesApi.get('/genre/movie/list');
        return data.genres; // Returns an array of genres
    } catch (error) {
        console.error("Error fetching genres:", error);
        return []; // Return an empty array in case of an error
    }
}
