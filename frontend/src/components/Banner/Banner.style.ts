import styled from "styled-components"

const StyledBanner = styled.nav`
  align-items: center;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  color: ${({ theme }) => theme.colors.bg};
  display: flex;
  font-size: ${({ theme, size = "default" }) =>
    theme.functions.toRem(theme.fonts.sizes[size])};
  font-weight: 500;
  height: 80px;
  height: calc(100vh - 80px);
  justify-content: space-between;
  position: relative;

  .callToAction {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    gap: 40px;
  }

  .faceScan {
    position: relative;
    bottom: -50px;
    height: 100%;
    right: 40px;

    > * {
      &:first-child {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }

    > img {
      position: absolute;
      width: 85px;
      right: 85px;
      top: 140px;
    }
  }
`

export { StyledBanner }
