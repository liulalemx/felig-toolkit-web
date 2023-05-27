import Image from "next/image"
import lexSnip from "../../public/lexSnip.png"
import stpSnip from "../../public/stpSnip.png"
import transSnip from "../../public/transSnip.png"
import stemSnip from "../../public/stemSnip.png"

type Props = {
  type: string
}

const Code = ({ type }: Props) => {
  return (
    <Image
      src={
        type === "lex"
          ? lexSnip
          : type === "stp"
          ? stpSnip
          : type === "trans"
          ? transSnip
          : stemSnip
      }
      width={1000}
      height={1000}
      className="w-auto h-auto"
      alt=""
    />
  )
}

export default Code
