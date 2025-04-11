import Image from "next/image"

interface PageHeaderProps {
  title: string
  subtitle: string
  backgroundImage: string
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <div className="relative h-80 md:h-[500px] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-fill" priority />
        <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="mb-4 text-white">{title}</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">{subtitle}</p>
      </div>
    </div>
  )
}

export default PageHeader

