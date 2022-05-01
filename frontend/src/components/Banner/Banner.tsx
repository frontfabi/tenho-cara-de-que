import Image from "next/image"
import { Button } from "../."
import { StyledBanner } from "./Banner.style"
import faceScan from "../../assets/images/face_scan.png"
import reflection from "../../assets/images/reflexo.png"

interface BannerProps {
  logo: string
  cta: () => void
  images?: string
}

const Banner = ({ logo, cta, image }: BannerProps) => (
  <StyledBanner className="Banner" data-testid="Banner">
    <div className="container">
      <div className="callToAction">
        <Image src={logo} alt="Logo" width={400} height={100} />
        <Button styleBtn="secondary" onClick={() => alert("ban")}>
          Faça o teste
        </Button>
      </div>
      <div className="faceScan">
        <Image className="person" src={faceScan} width={460} height={480} />
        <img className="reflection" src={reflection.src} />
      </div>
    </div>
  </StyledBanner>
)

export { Banner }
