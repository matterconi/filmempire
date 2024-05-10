import React from 'react'

import { StyledContainer, StyledButton, StyledTypography } from './styles'

const Pagination = ({ currentPage, setPage, totalPages}) => {
  const handelPrev = () => {
    if (currentPage === 1) return
    setPage((prevPage) => prevPage - 1)
  }

  const handelNext = () => {
    if (currentPage === totalPages) return
    setPage((prevPage) => prevPage + 1)
  }

  return ( 
    <StyledContainer>
        <StyledButton variant="contained" color="primary" type="button" onClick={handelPrev}>Prev</StyledButton>
        <StyledTypography variant="h4">{currentPage}</StyledTypography>
        <StyledButton variant="contained" color="primary" type="button" onClick={handelNext}>Next</StyledButton>
    </StyledContainer>
  )
}

export default Pagination