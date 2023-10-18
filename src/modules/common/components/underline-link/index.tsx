import ArrowRight from "@modules/common/icons/arrow-right"
import Link from "next/link"

type UnderlineLinkProps = {
  href: string
  children?: React.ReactNode
}

const UnderlineLink = ({ href, children }: UnderlineLinkProps) => {
  return (
    <div className="flex items-start">
      <Link
        href={href}
        className="flex items-center py-2 transition-all duration-300 border-b border-current text-large-regular gap-x-4 group hover:pl-4 hover:pr-1"
      >
        <>
          <span>{children}</span>
          <ArrowRight
            size={20}
            className="transition-all duration-300 group-hover:ml-2"
          />
        </>
      </Link>
    </div>
  )
}

export default UnderlineLink
