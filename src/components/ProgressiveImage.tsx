import { useState, useEffect, useRef } from 'react'

interface ProgressiveImageProps {
  src: string
  placeholder: string
  alt: string
  className?: string
  imgClassName?: string
}

export function ProgressiveImage({ src, placeholder, alt, className, imgClassName = '' }: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setLoaded(true)
    if (img.complete) setLoaded(true)
  }, [src])

  const imgBase = `absolute inset-0 w-full h-full object-cover ${imgClassName}`

  return (
    // Outer div carries layout classes (absolute inset-0, opacity, sizing, etc.)
    // Inner div is always relative+overflow-hidden so there's no position conflict
    <div className={className}>
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          className={`${imgBase} scale-105 transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
          style={{ filter: 'blur(8px)' }}
        />
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`${imgBase} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  )
}
