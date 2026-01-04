import { cn } from "../../lib/utils"

export default function CoverImage({ src, alt, className = "" }) {
  return <div className={cn("w-full relative overflow-hidden pt-[177.777777778%]", className)}>
    <img
      src={src}
      alt={alt}
      width="100%"
      height="100%"
      className="absolute w-full h-full top-0 left-0 bottom-0 right-0"
    />
  </div>
}