import React from "react"
import { Flex, Heading, IconButton, Icon, Spacer, useColorMode, VStack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Text, Button } from "@chakra-ui/react"
import { FaSun, FaMoon, FaCode, FaBars, FaHeart } from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import WorkHistory from "./components/WorkHistory";
import "./App.css";
import Social from "./components/Social";

function App() {
  const headerRef = React.useRef();
  const profileRef = React.useRef();
  const workHistoryRef = React.useRef();
  const contactRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const menuButtonRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <VStack mb='40'>
        <Flex position='fixed' w='100%' h='20' align='center' className='blur-background' zIndex='100'>
          <Heading ml='8' size='md' fontWeight='semibold' color='cyan.400'>
            <Icon as={FaCode} w='12' h='12' /><span className='programmer-font' style={{ color: isDark ? 'aquamarine': 'green'}}> Hello World!</span>
          </Heading>
          <Spacer></Spacer>
          <IconButton mr='5' icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
          <>
            <IconButton
              icon={<FaBars />}
              variant="outline"
              mr='8'
              ref={menuButtonRef}
              onClick={onOpen}
            />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={menuButtonRef}
            >
              <DrawerOverlay className='blur-background' />
              <DrawerContent>
                <DrawerCloseButton />
                <Icon as={FaCode} w='100%' mt='4' mb='4' h='14' p='2' color='cyan.400' />
                <Button w='100%' variant="ghost" onClick={() => { onClose(); headerRef.current.scrollIntoView(); }}>
                  Introduction
                </Button>
                <Button w='100%' variant="ghost" onClick={() => { onClose(); profileRef.current.scrollIntoView(); }}>
                  Skills
                </Button>
                <Button w='100%' variant="ghost" onClick={() => { onClose(); workHistoryRef.current.scrollIntoView(); }}>
                  Experience
                </Button>
                <Button w='100%' variant="ghost" onClick={() => { onClose(); contactRef.current.scrollIntoView(); }}>
                  Contact
                </Button>
              </DrawerContent>
            </Drawer>
          </>
        </Flex>
        <span ref={headerRef}></span>
        <Header contactReference={contactRef}></Header>
        <span ref={profileRef}></span>
        <Profile></Profile>
        <span ref={workHistoryRef}></span>
        <WorkHistory></WorkHistory>
        <span ref={contactRef}></span>
        <Social></Social>
      </VStack>
      <VStack mb='10'><Text>Made with <Icon as={FaHeart} color="red.500" /> in React by Suman Adhikari</Text></VStack>
    </>
  );
}

export default App;
