import React from 'react'

import Container from '../components/layouts/Container'
import Flex from '../components/layouts/Flex'
import Img from '../components/layouts/Img'
import BannerImg from '../assets/BannerImg.jpeg'
import secondBannerImg from '../assets/secondBannerImg.jpg'

const Home = () => {
    return (
        <div className='bg-[#000000] pt-[56px] pb-[150px]'>
            <Container>
                <Flex className='justify-between'>
                    <div className='w-[514px] text-[#fff] mt-[220px]'>
                        <h1 className='font-[600] text-[75px] text-[#da871b]'>A Map to Navigating the Market.</h1>
                        <p className='mb-[27px] text-[18px]'>As a Forex trader, having a good working knowledge of how the market truly works is essential to achieving success in trading the currency market.</p>
                        <p className='text-[18px]'>Make informed trading decisions, identify profitable opportunities, and ultimately grow your portfolio.</p>
                    </div>

                    <picture>
                        <Img src={BannerImg} imgClassName={'w-[900px] mt-[170px]'}/>
                    </picture>
                </Flex>

                <Flex className={'mt-[120px] gap-[200px]'}>
                    <picture>
                        <Img src={secondBannerImg} imgClassName={'w-[550px] mt-[150px]'}/>
                    </picture>

                    <div className='mt-[200px] text-[#fff] w-[600px]'>
                        <h2 className='font-[600] text-[60px] text-[#da871b] mb-[80px]'>Your Trusted Partner for Modern Trading.</h2>
                        <p className='mb-[27px] text-[18px]'>Welcome to PrecisionFX – Our company provides a range of expert services to help you navigate the exciting world of currency markets. With a team of professional elites who are passionate about modern investing, we have the knowledge and experience to guide you toward success.</p>
                        <p className='text-[18px]'>Our team includes seasoned traders with over seven years of experience in trading forex, options, and cryptocurrencies. Their expertise and insights have helped us build a reputation as a trusted partner for modern investors.</p>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Home