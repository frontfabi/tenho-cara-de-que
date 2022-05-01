import { ReactNode } from "react"
import { Text } from "../."
import { StyledButton } from "./Button.style"

type ButtonStyle = "primary" | "secondary"
export interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  styleBtn?: ButtonStyle
  onClick: () => void
}
const Button = ({
  children,
  disabled,
  styleBtn = "primary",
  onClick,
}: ButtonProps) => (
  <StyledButton
    disabled={disabled}
    styleBtn={styleBtn}
    onClick={onClick}
    data-testid="Button"
  >
    <Text font="title" weight="500" color={styleBtn === "primary" ? "bg" : "primary"}>{children}</Text>
  </StyledButton>
)

export { Button }
