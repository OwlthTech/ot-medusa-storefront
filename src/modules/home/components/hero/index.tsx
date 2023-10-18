import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
      <div className="h-[100vh] small:h-[90vh] w-full relative z-20 bg-primary">
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center space-y-14 text-secondary small:text-left small:justify-end small:items-start small:p-32">
          <h1 className="mb-4 text-2xl-semi drop-shadow-md shadow-black">
          Experience The Organic Revolution
          </h1>
          <p className="text-base text-white max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Orgotel Organic – your gateway to chemical-free edibles and Herbal Cosmetics.
Discover a world where nature’s bounty meets ancient wisdom, offering you the purest and most effective products for your well-being
          </p>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div>
        
          <Image
            src="/hero-background-bullock.webp"
            loading="eager"
            priority={true}
            quality={90}
            alt=""
            className="absolute opacity-30"
            draggable="false"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }}
          />

      </div>
  )
}

export default Hero
