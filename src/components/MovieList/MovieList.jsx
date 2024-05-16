import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './swiper.css'
import { StyledGrid } from './styles'; // Assuming StyledGrid is your custom styled component for non-mobile
import { Movie } from '..'; // Adjust the import path as necessary
import { useParams } from 'react-router-dom';

const MovieList = ({ movies, numberOfMovies, excludeFirst, isMobile, isRecommended }) => {
    const start = excludeFirst ? 1 : 0;
    const [focusedIndex, setFocusedIndex] = useState(0);
    return (
        <div>
            {!isMobile ? (
                <StyledGrid container spacing={4}>
                    {movies.slice(start, start + numberOfMovies).map((movie, i) => (
                        <Movie movie={movie} key={i} isFocused={false} isRecommended={isRecommended}/>
                    ))}
                </StyledGrid>
            ) : (
                <Swiper
                    direction="vertical"  // Set Swiper to vertical mode
                    spaceBetween={100}  // Increase space to better see previous and next images
                    slidesPerView={2}  // Adjust this value to control how many slides are visible at once
                    onSlideChange={(swiper) => setFocusedIndex(swiper.activeIndex)}
                    onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
                >
                    {movies.slice(start, start + numberOfMovies).map((movie, i) => (
                        <SwiperSlide key={i}>
                            <Movie movie={movie} isFocused={focusedIndex === i} i={i} className={focusedIndex === i ? 'movie-focused' : 'movie'} isMobile={isMobile}/> {/* Focused conditionally, example if the first slide is always focused */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default MovieList;