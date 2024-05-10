import { useEffect, useContext, useRef } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { useDispatch } from 'react-redux';

import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken } from '../utils';
import { selectGenreOrCategory, searchMovie } from '../features/currentGenreOrCategory';

const useAlan = () => {
    const colorModeContext = useContext(ColorModeContext);
    const { setMode } = colorModeContext;
    const navigate = useNavigate(); // useNavigate instead of useHistory
    const dispatch = useDispatch();

    const alanBtnInstance = useRef(null);

    useEffect(() => {
        if (!alanBtnInstance.current) {
            alanBtnInstance.current = alanBtn({
                key: 'a8c49082b00c29e772d1d68e4d141ec22e956eca572e1d8b807a3e2338fdd0dc/stage',
                onCommand: ({ command, mode, genreOrCategory, genres, query }) => {
                    if (command === 'changeMode') {
                        setMode(mode === 'light' ? 'light' : 'dark');
                    } else if (command === 'login') {
                        fetchToken();
                    } else if (command === 'logout') {
                        console.log('Logging out...');
                        localStorage.clear();
                        navigate('/'); // Use navigate for routing
                    } else if (command === 'chooseGenre') {
                        const foundGenre = genres.find(({ name }) => name.toLowerCase() === genreOrCategory.toLowerCase());
                        console.log('foundGenre', foundGenre);
                        if (foundGenre) {
                            navigate(`/`); // Use navigate for routing
                            dispatch(selectGenreOrCategory(foundGenre.id));
                        } else {
                            const parsedCategory = genreOrCategory === 'top rated' ? 'top_rated' : genreOrCategory;
                            navigate(`/`); // Use navigate for routing
                            dispatch(selectGenreOrCategory(parsedCategory));
                        }
                    } else if (command === 'search') {
                        dispatch(searchMovie(query));
                    }
                }
            });
        }
    }, [setMode, navigate, dispatch]); // Include navigate in the dependencies array
}

export default useAlan;
