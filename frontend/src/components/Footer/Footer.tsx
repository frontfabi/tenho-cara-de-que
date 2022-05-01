import { Icon, Text, Title } from "../."
import { StyledFooter } from "./Footer.style"

const Footer = ({ title, email, socialMedia }) => (
  <StyledFooter data-testid="Footer">
    <Title color="bg" style={{ letterSpacing: 5, textTransform: "uppercase" }}>
      {title}
    </Title>
    <>
      <a href="#" target="_blank">
        <Icon type="brands" icon="facebook-square" size="xxl" color="bg" />
      </a>
    </>
    <Text color="bg">{email}</Text>
  </StyledFooter>
)

export { Footer }
