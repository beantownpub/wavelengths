import styled from 'styled-components'

export const StyledTable = styled.div`
table {
  font-size: 1.5rem;
  font-weight: 900;
  margin: auto;
  padding: 1rem;
  td {
    padding: .5rem;
  }
}
`

export const StyledBookingButton = styled.a`
  display: inline-block !important;
  margin: 2rem auto !important;
  padding: 1rem 2rem !important;
  background-color: ${props => props.bgColor || '#85f020'} !important;
  color: ${props => props.textColor || '#000000'} !important;
  font-family: ${props => props.fontFamily || "'Lato', sans-serif"} !important;
  font-size: 1.5rem !important;
  font-weight: 900 !important;
  text-transform: uppercase !important;
  text-decoration: none !important;
  border-radius: 4px !important;
  border: 2px solid ${props => props.bgColor || '#85f020'} !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  text-align: center !important;
  box-sizing: border-box !important;

  &:hover {
    background-color: ${props => props.hoverBgColor || '#000000'} !important;
    color: ${props => props.hoverTextColor || '#85f020'} !important;
    border: 2px solid ${props => props.bgColor || '#85f020'} !important;
  }

  &:visited {
    color: ${props => props.textColor || '#000000'} !important;
  }

  &:active {
    color: ${props => props.hoverTextColor || '#85f020'} !important;
  }
`
