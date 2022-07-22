import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import data from "../database/data"

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  
  
  const scrollMiddle = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  for (let i = 0; i < 3; i++) {
    scrollMiddle()
  }

  // auto scroll
  React.useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 3000)
    return () => clearInterval(interval)
  } , [emblaApi])


  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

    
  
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
          <div className="embla__slide">Slide 4</div>
          <div className="embla__slide">Slide 5</div>
          <div className="embla__slide">Slide 6</div>
          <div className="embla__slide">Slide 7</div>
          <div className="embla__slide">Slide 8</div>
          <div className="embla__slide">Slide 9</div>
          <div className="embla__slide">Slide 10</div>
          
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  )
}
export default EmblaCarousel