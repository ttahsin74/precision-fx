import React from 'react'
import Container from './layouts/Container'
import Img from "../components/layouts/Img"
import Logo from '../assets/Logo.png'
import Flex from '../components/layouts/Flex'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-[#0F0F0F] w-full fixed z-10'>
            <Container className={'py-4'}>
                <Flex className={'items-center justify-between'}>
                    <Img src={Logo} imgClassName={'w-[150px]'}/>
                    
                    <Flex className={"gap-8 font-[600] text-[#da871b] text-[16px] items-center"}>
                        <a href="" className='hover:text-[#f7b866] transition-all'>Home</a>
                        <a href="" className='hover:text-[#f7b866] transition-all'>Account Management</a>
                        <a href="" className='hover:text-[#f7b866] transition-all'>FX bot</a>
                        <a href="" className='hover:text-[#f7b866] transition-all'>Copy Trading</a>
                        <a href="" className='bg-[#fff] p-3 rounded-[6px] hover:text-[#fff] hover:bg-[#da871b] transition-all'>Contract Us</a>
                    </Flex>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navbar