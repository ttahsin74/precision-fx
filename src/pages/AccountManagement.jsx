import React from 'react'
import Container from '../components//layouts/Container'
import Img from '../components/layouts/Img'
import AccountManagementBannerImg from '../assets/AccountManagementBannerImg.png'
import Flex from '../components/layouts/Flex'

const AccountManagement = () => {
    return (
        <div className='bg-[#000] pt-[50px]'>
            <Container>
                <div>
                    <h3 className='text-[75px] font-[600]  text-[#da871b] text-center'>Account Management</h3>
                    <p className='text-[25px] font-[700] text-[#fff] w-[800px] m-auto text-center mt-[50px]'>We confidently maximize our investors’ wealth with minimal risk, offering favorable terms benefiting all parties.</p>
                </div>

                <picture>
                    <Img src={AccountManagementBannerImg} imgClassName={'w-[800px] m-auto mt-[200px]'}/>
                </picture>
            </Container>

            <div className='bg-[#e2af6d] py-[70px] mt-[200px]'>
                <Container>
                    <Flex className={'justify-center gap-10'}>
                        <div className='w-[570px]'>
                            <h4 className='text-[#ffffff] font-[600] text-[30px]'>Profit</h4>
                            <p className='text-[18px] text-[#fff] mt-4'>The level of potential profit is intrinsically linked to the risk tolerance of the investor, as well as the strategy employed when utilizing leverage. It is essential to carefully evaluate these factors when making investment decisions.</p>
                        </div>

                        <div className='w-[570px]'>
                            <h4 className='text-[#ffffff] font-[600] text-[30px]'>Loss Case</h4>
                            <p className='text-[18px] text-[#fff] mt-4'>We value our clients’ trust and have strict protocols. If an account experiences a 30% drawdown, our traders will halt trading the account and we advise our clients to withdraw their funds immediately.</p>
                        </div>
                    </Flex>
                </Container>
            </div>
        </div>
    )
}

export default AccountManagement