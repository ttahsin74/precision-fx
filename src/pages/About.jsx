import React from 'react'
import Container from '../components//layouts/Container'
import Img from '../components/layouts/Img'
import AboutBannerImg from '../assets/AboutBannerImg.jpg'
import Flex from '../components/layouts/Flex'
import WelcomeBannerImg from '../assets/WelcomeBannerImg.jpg'

const About = () => {
    return (
        <div className='bg-[#000] pt-[300px]'>
            <div className='bg-[#e2af6d] h-[400px]'>
                <Container>
                    <h2 className='font-[600] text-[60px] text-[#ffffff] text-center pt-[50px]'>About PrecisionFX</h2>
                    <Img src={AboutBannerImg} imgClassName={'m-auto w-[800px] relative top-[80px]'}/>
                </Container>
            </div>

            <div className='pt-[260px]'>
                <Container>
                    <Flex className={'justify-center gap-24'}>
                        <div className='w-[595px] mt-[340px]'>
                            <h3 className='text-[40px] font-[600]  text-[#da871b]'>Welcome To PrecisionFX</h3>
                            <p className='text-[#ffffff] text-[18px] mt-12'>Welcome to the Home for Currency Markets Elites.</p>
                            <p className='text-[#ffffff] text-[18px] my-6'>Modern Investors is a company that provides different services to the local community regarding the opportunities involved in the currency markets.</p>
                            <p className='text-[#ffffff] text-[18px]'>Modern Investors has a team of professional elites in the currency markets. The team has professional traders with more than 7 years of experience in trading forex, options, and cryptocurrencies.</p>
                        </div>

                        <picture>
                            <Img src={WelcomeBannerImg} className={'w-[500px] mt-[150px]'}/>
                        </picture>
                    </Flex>

                    <Flex className={'justify-center gap-10 border-t border-t-[#da871b] pt-[130px] mt-[100px]'}>
                        <div className='w-[570px]'>
                            <h4 className='text-[#da871b] font-[600] text-[30px]'>Vision</h4>
                            <p className='text-[18px] text-[#fff] mt-4'>Envisioning a World of Financial Empowerment Through Forex Trading Excellence</p>
                        </div>

                        <div className='w-[570px]'>
                            <h4 className='text-[#da871b] font-[600] text-[30px]'>Mission</h4>
                            <p className='text-[18px] text-[#fff] mt-4'>To Provide Comprehensive Forex Trading Solutions and Education, Empowering Individuals and Institutions to Achieve Financial Success with Integrity and Excellence</p>
                        </div>
                    </Flex>
                </Container>

                <div className='bg-[#e2af6d] py-[80px] mt-[150px]'>
                    <Container>
                        <div className='text-center text-[#fff]'>
                            <h3 className='text-[40px] font-[600]'>Our Core Values</h3>
                            <p className='text-[18px] w-[750px] m-auto mt-6'>Our values shape everything we do and show what we believe in and a strong commitment we have archiving our vision and serving our clients. </p>
                        </div>
                        <div>
                            <Flex className={'justify-between mt-[110px]'}>
                                <div className='w-[400px]'>
                                    <h4 className='text-[20px] font-[700] text-[#fff]'>Customer First</h4>
                                    <p className='text-[18px] text-[#fafafa91] mt-6'>We believe in serving others fast and first. If you need our assistance, we will be available as immediately as possible.</p>
                                </div>
                                <div className='w-[400px]'>
                                    <h4 className='text-[20px] font-[700] text-[#fff]'>Accountability & Transparency</h4>
                                    <p className='text-[18px] text-[#fafafa91] mt-6'>Hard work and being accountable to ourselves. Total disclosure of all necessary information needed to our clients, stakeholders, and shareholders.</p>
                                </div>
                                <div className='w-[400px]'>
                                    <h4 className='text-[20px] font-[700] text-[#fff]'>Integrity</h4>
                                    <p className='text-[18px] text-[#fafafa91] mt-6'>Always doing the right thing in a reliable way. Always upholding moral values, we will always be truthful and honest.</p>
                                </div>
                            </Flex>
                        </div>

                        <div>
                            <Flex className={'justify-between mt-16'}>
                                <div className='w-[400px]'>
                                    <h4 className='text-[20px] font-[700] text-[#fff]'>Teamwork</h4>
                                    <p className='text-[18px] text-[#fafafa91] mt-6'>The company is committed to build up a strong synergistic team that stands up for each other at all times.</p>
                                </div>
                                <div className='w-[400px]'>
                                    <h4 className='text-[20px] font-[700] text-[#fff]'>Commitment</h4>
                                    <p className='text-[18px] text-[#fafafa91] mt-6'>As traders, we decided to commit to being the best, took our time to learn to become good traders and mentors, and we are committed to that.</p>
                                </div>
                                <div className='w-[400px]'>
                                    <h4 className='text-[20px] font-[700] text-[#fff]'>Communication & Cost Consciousness</h4>
                                    <p className='text-[18px] text-[#fafafa91] mt-6'>Effective communication is important to us. Our team members at all times bear in mind that any form of wastage is strongly detested.</p>
                                </div>
                            </Flex>
                        </div>
                    </Container>
                </div>

                <div className='bg-[#000] mt-[100px]'>
                    <Container>
                        <Flex className={'justify-between'}>
                            <p className='text-[18px] text-[#fafafa91] w-[471px]'>“It’s the easiest thing to make money if you start with money. Let us elevate your trading skills and maximize your wealth by investing in us in any of our services. Every move we take is geared to make and not lose money.”</p>
                            <p className='text-[27px] text-[#fff] font-[700] w-[619px]'>“Trading doesn’t just reveal your character, it also builds it if you stay in the game long enough.”</p>
                        </Flex>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default About