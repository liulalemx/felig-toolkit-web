"use client"

import Image from "next/image"
import lexSnip from "../../public/lexSnip.png"
import stpSnip from "../../public/stpSnip.png"
import transSnip from "../../public/transSnip.png"
import stemSnip from "../../public/stemSnip.png"
import { motion } from "framer-motion"
type Props = {
  type: string
}

const Code = ({ type }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
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
    </motion.div>
  )
}

export default Code
