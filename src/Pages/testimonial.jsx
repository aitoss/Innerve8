import React from 'react'

const testimonial = () => {
    const images = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
    ]
  return (
    <>
    <section>

    </section>
    </>

  )
}

const Column = ({images}) => {
    return (
        <div>
{
    images.map(
        (src, index) => {
            return <div key={index} className="">
                <Image
                src={src}
                fill
                alt='image'
                 />
            </div>
        }
    )
}

        </div>
    )
}

export default testimonial