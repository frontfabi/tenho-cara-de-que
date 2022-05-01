import styled from "styled-components"

const StyledFooter = styled.footer`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  gap: 20px;
  width: 100%;
`

export { StyledFooter }
