import { ReactNode } from "react"
import { StyledTitle } from "./Title.style"

type TitleColor = "bg" | "fg" | "primary" | "secondary"
type TitleSize = "xs" | "sm" | "default" | "lg" | "xl" | "xxl" | "xxxl"
type TitleLevel = "h2" | "h3" | "h4" | "h5"

export interface TitleProps {
  children: ReactNode
  color?: TitleColor
  size?: TitleSize
  level?: TitleLevel
  style?: object
}

const Title = ({ children, color, size, level = "h2", style }: TitleProps) => (
  <StyledTitle color={color} size={size} as={level} style={style}>
    {children}
  </StyledTitle>
)

export { Title }
