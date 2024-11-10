import React from 'react'
import { Element } from 'react-scroll'
import { details, features } from '../constants'
import Button from '../components/Button'

const Features = () => {
  return (
    <section>
        <Element name="features">
            <div className='container'>
                <div className='relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-non max-md:rounded-none max-md:gap-3'>
                    {features.map((feature) => (
                        <div key={feature.id} className='relative z-2 pb-5 md:px-10 px-5 md:pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320'>
                            <div className='wifull flex justify-start items-start'>
                                <div className='-ml-3 mb-12 flex items-center justify-center flex-col'>
                                    <div className='w-0.5 h-16 bg-s3'/>
                                    <img className='size-28 object-contain' src={feature.icon} alt={feature.title} />
                                </div>
                            </div>
                            <p className='caption mb-5 max-md:mb-6'>
                                {feature.caption}
                            </p>
                            <h2 className='max-w-300 mb-7 h3 text-p4 max-md:mb-6 max-md:h5'>
                                {feature.title}
                            </h2>
                            <p className='mb-11 body-1 max-md:mb-8 max-md:body-3'>
                                {feature.text}
                            </p>
                            <Button icon={feature.button.icon}>{feature.button.title}</Button>
                        </div>
                    ))}

                    <ul className='relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden'>
                        <div className='absolute bg-s3/20 top-[38%[ left-0 right-0 w-full h-[1px] z-10'/>

                        {details.map((detail) => (
                            <li className='relative pt-16 px-4 pb-14' key={detail.id}>
                                <div className='absolute top-8 botton-0 left-1/2 bg-s3/20 w-[1px] h-full z-10'/>

                                    <div className='flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20'>
                                        <img src={detail.icon} alt={detail.title} className='size-17/20 object-contain z-20' />
                                    </div>

                                    <h3 className='relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase'>
                                        {detail.title}
                                    </h3>

                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </Element>
    </section>
  )
}

export default Features