import { VStack, Text, HStack, Container, Stack } from '@chakra-ui/layout';
import { Button, useDisclosure, IconButton, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Spinner, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Social() {
    const skeletonRef = React.useRef();
    const iframeRef = React.useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const mainTextColor = useColorModeValue('teal.700', 'gray.400');
    const buttonColor = useColorModeValue('purple.700', 'aquamarine');
    return (
        <HStack w='65%'>
            <VStack spacing="0px" w='100%' align='flex-start'>
                <Text className='programmer-font intro-font-size' mt='28' color={buttonColor} fontWeight={useColorModeValue('extrabold', 'semibold')}>Get In Touch</Text>
                <Container mt='80' color={mainTextColor} fontSize='lg' fontWeight='normal'>
                    <br />
                    Want to say "Hi" to me? <br /><br />
                    <Button leftIcon={<MdEmail />} onClick={onOpen} >
                        Send A Message
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent h='80%' >
                            <ModalHeader>Get In Touch</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Stack ref={skeletonRef}>
                                    <Skeleton height="50px" />
                                    <Skeleton height="20px" />
                                    <Skeleton height="20px" />
                                    <SkeletonText mt="4" noOfLines={4} spacing="4" />
                                </Stack>
                                <iframe ref={iframeRef} onLoad={() => { skeletonRef.current.style.display = 'none'; iframeRef.current.style.display = null; }} style={{display: 'none'}} title='Contact' src="https://docs.google.com/forms/d/e/1FAIpQLSf6hmGBc3cN_A6DVCZPXJKdeyzUOJudBv9R5auQp5CBzpDn4Q/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                    <br /><br />
                    Or, you can get in touch with me in one of the following platforms:
                    <br /><br />
                    <HStack spacing='5'>
                        <IconButton icon={<FaLinkedinIn />} colorScheme='linkedin'
                            onClick={() => {
                                Object.assign(document.createElement('a'), {
                                    target: '_blank',
                                    href: 'https://linkedin.com/in/suman--adhikari',
                                }).click();
                            }}
                        />
                        <IconButton icon={<FaGithub />} colorScheme='gray'
                            onClick={() => {
                                Object.assign(document.createElement('a'), {
                                    target: '_blank',
                                    href: 'https://github.com/int-main',
                                }).click();
                            }}
                        />
                    </HStack>
                </Container>
            </VStack>
        </HStack>
    );
}

export default Social;