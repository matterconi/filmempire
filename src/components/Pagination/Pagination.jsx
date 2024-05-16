import React from 'react';
import { StyledContainer, StyledButton, StyledTypography } from './styles';

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const handlePrev = () => {
    if (currentPage === 1) return;
    setPage((prevPage) => prevPage - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  const handleNext = () => {
    if (currentPage === totalPages) return;
    setPage((prevPage) => prevPage + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  return (
    <StyledContainer>
      <StyledButton variant="contained" color="primary" type="button" onClick={handlePrev}>
        Prev
      </StyledButton>
      <StyledTypography variant="h4">{currentPage}</StyledTypography>
      <StyledButton variant="contained" color="primary" type="button" onClick={handleNext}>
        Next
      </StyledButton>
    </StyledContainer>
  );
};

export default Pagination;
