import React from 'react'
import Container from '../components//layouts/Container'
import Img from '../components/layouts/Img'
import CopyTradingBannerImg from '../assets/CopyTradingBannerImg.jpg'
import Flex from '../components/layouts/Flex'

const CopyTrading = () => {
    return (
        <div className='bg-[#000] pt-[150px]'>
            <Container>
                <Flex className='justify-between'>
                    <div className=' text-[#fff] mt-[220px]'>
                        <h2 className='font-[600] text-[75px] text-[#da871b]'>Copy Trading</h2>
                        <p className='mb-[27px] text-[18px] mt-8'>Automated Trade Execution & Risk Management to Replicate Success, Maximize Profit</p>

                        <div className='bg-[#e2af6d] w-[600px] p-16 ml-[150px] mt-[90px]'>
                            <h4 className='text-[#ffffff] font-[600] text-[30px] w-[400px]'>Making a well informed decision is important!</h4>
                            <p className='text-[18px] text-[#fff] mt-8'>Take your time to read and understand the terms and conditions before making a well-informed decision. If you have any specific concerns or questions about the terms, don’t hesitate to seek clarification from Forex SPV Support Team.</p>
                        </div>
                    </div>

                    <picture>
                        <Img src={CopyTradingBannerImg} imgClassName={'w-[650px] mt-[170px]'}/>
                    </picture>
                </Flex>
            </Container>
        </div>
    )
}

export default CopyTrading