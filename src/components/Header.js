import { VStack, Text, HStack, Container, Link } from '@chakra-ui/layout';
import { Button, useColorModeValue } from "@chakra-ui/react";
import React from 'react';
import Typewriter from 'typewriter-effect'

function Header(props) {
    const mainTextColor = useColorModeValue('teal.700', 'gray.400');
    const buttonColor = useColorModeValue('purple.700', 'aquamarine');
    const buttonBgColor = useColorModeValue('gray.300', 'gray.700');
    const buttonBgColorHover = useColorModeValue('gray.400', 'gray.600');
    const buttonColorHover = useColorModeValue('purple.900', 'teal.100');
    const secondaryBlueTextColor = useColorModeValue('blue.500', 'blue.100');
    return (
        <HStack w='65%'>
            <VStack spacing="0px" w='100%' align='flex-start'>
                <Text className='programmer-font intro-font-size' mt='44' color={buttonColor} fontWeight={useColorModeValue('extrabold', 'semibold')}>Hi, my name is</Text>
                <Text fontWeight='semibold' fontSize='5xl' color={secondaryBlueTextColor}>Suman Adhikari</Text>
                <Text fontSize='3xl' color={mainTextColor}>
                    <Typewriter onInit={(typewriter) => {
                        typewriter
                            .pasteString("I'm a")
                            .pasteString(" ")
                            .typeString("full stack web developer.")
                            .pauseFor(2000)
                            .deleteChars(25)
                            .typeString('.NET Core developer.')
                            .pauseFor(2000)
                            .deleteChars(20)
                            .typeString('C# developer.')
                            .pauseFor(2000)
                            .deleteChars(13)
                            .typeString('JavaScript developer.')
                            .pauseFor(2000)
                            .deleteChars(22)
                            .typeString('n ExtJs developer.')
                            .pauseFor(2000)
                            .start();
                    }} options={{
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10
                    }} />
                </Text>
                <Container mt='80' color={mainTextColor} fontSize='lg' fontWeight='normal'>
                    <br />I'm a software development engineer who is specialized in full stack web development.
                    I am well versed in promoting object-oriented approaches to software development,
                    contributing to all levels of Software Development Lifecycle (SDLC).
                    Proficient to work in an Agile environment with team work and colaboration,
                    leading to the rapid development of software in an organization.
                    <br /><br />
                    Currently, I'm working as an engineer at <Link href="https://aptean.com"
                        target="_blank" rel="noreferrer"
                        fontWeight={useColorModeValue('medium', 'semibold')}
                        color={buttonColor}>Aptean</Link>, where I am bulding ERP products in SaaS model.
                </Container>
                <br />
                <Button variant="outline" color={buttonColor} bg={buttonBgColor} _hover={{ bg: buttonBgColorHover, color: buttonColorHover }} onClick={
                    () => {
                        props.contactReference.current.scrollIntoView({ behavior: "smooth" });
                    }
                }>
                    Get In Touch 😃
                </Button>
            </VStack>
        </HStack>
    );
}

export default Header