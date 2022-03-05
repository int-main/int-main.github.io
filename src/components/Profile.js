import { VStack, Text, HStack, Container, List, ListItem, ListIcon, Spacer } from '@chakra-ui/layout';
import { useColorModeValue } from "@chakra-ui/react";
import React from 'react';
import { FaCaretRight } from "react-icons/fa";
import { BsCircle, BsCircleFill } from "react-icons/bs";

function Profile() {
    const mainTextColor = useColorModeValue('teal.700', 'gray.400');
    const buttonColor = useColorModeValue('purple.700', 'aquamarine');
    const secondaryCyanTextColor = useColorModeValue('cyan.700', 'cyan.400');
    const getProficiency = function (proficiencyOutOfFive) {
        const elements = [];
        for (let i = 0; i < 5; i++) {
            elements.push(<ListIcon w='2.5' h='2.5' as={i < proficiencyOutOfFive ? BsCircleFill : BsCircle} color={buttonColor} />);
        }
        return (
            <>
                {elements}
            </>
        );
    }
    return (
        <HStack w='65%'>
            <VStack spacing="0px" w='100%' align='flex-start'>
                <Text className='programmer-font intro-font-size' mt='28' color={buttonColor} fontWeight={useColorModeValue('extrabold', 'semibold')}>About Me</Text>
                <Container mt='80' color={mainTextColor} fontSize='lg' fontWeight='normal'>
                    <br />I started my web development career in 2019 when I was hired by Aptean with PPO opportunity.
                    I worked as an intern for 1 year and then got converted to full time employee after my graduation.
                    In Aptean, I developed a project from scratch using .NET Core, C#, ExtJs, Microsoft SQL Server.
                    Currently I am working at Outplay where I am developing features and integrations for the Outplay sales engagement platform 
                    using C#, .NET Core, PostgreSQL, Angular, Golang.
                    <br /><br />Here are few technologies I've been working on recently:
                    <Text mt='4' mb='4' color={secondaryCyanTextColor} fontWeight='semibold'>Programming & Markup Languages:</Text>
                    <List spacing='3' w='100%'>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>C#</Text>
                                <Spacer></Spacer>
                                {getProficiency(5)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>JavaScript</Text>
                                <Spacer></Spacer>
                                {getProficiency(5)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Python</Text>
                                <Spacer></Spacer>
                                {getProficiency(4)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>HTML</Text>
                                <Spacer></Spacer>
                                {getProficiency(4)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>CSS</Text>
                                <Spacer></Spacer>
                                {getProficiency(3)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>SQL</Text>
                                <Spacer></Spacer>
                                {getProficiency(3)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Go</Text>
                                <Spacer></Spacer>
                                {getProficiency(2)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Java</Text>
                                <Spacer></Spacer>
                                <Text>Prior Experience</Text>
                            </HStack>
                        </ListItem>
                    </List>
                    <Text mt='4' mb='4' color={secondaryCyanTextColor} fontWeight='semibold'>Libraries, Frameworks & Databases:</Text>
                    <List spacing='3' w='100%'>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>.NET Core</Text>
                                <Spacer></Spacer>
                                {getProficiency(5)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Sencha ExtJs</Text>
                                <Spacer></Spacer>
                                {getProficiency(5)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Angular</Text>
                                <Spacer></Spacer>
                                {getProficiency(3)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Entity Framework Core</Text>
                                <Spacer></Spacer>
                                {getProficiency(4)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>SQL Server</Text>
                                <Spacer></Spacer>
                                {getProficiency(4)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>PostgreSQL</Text>
                                <Spacer></Spacer>
                                {getProficiency(4)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Identity Experience Framework</Text>
                                <Spacer></Spacer>
                                {getProficiency(3)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>jQuery</Text>
                                <Spacer></Spacer>
                                <Text>Prior Experience</Text>
                            </HStack>
                        </ListItem>
                    </List>
                    <Text mt='4' mb='4' color={secondaryCyanTextColor} fontWeight='semibold'>Tools, Softwares, Services & Platforms:</Text>
                    <List spacing='3' w='100%'>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Microsoft Azure B2C Authentication</Text>
                                <Spacer></Spacer>
                                {getProficiency(5)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Git</Text>
                                <Spacer></Spacer>
                                {getProficiency(4)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>TFS</Text>
                                <Spacer></Spacer>
                                {getProficiency(4)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Visual Studio</Text>
                                <Spacer></Spacer>
                                {getProficiency(4)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>SQL Server Management Studio</Text>
                                <Spacer></Spacer>
                                {getProficiency(3)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Okta SSO Platform</Text>
                                <Spacer></Spacer>
                                {getProficiency(3)}
                            </HStack>
                        </ListItem>
                    </List>
                    <Text mt='4' mb='4' color={secondaryCyanTextColor} fontWeight='semibold'>Software Development Skills:</Text>
                    <List spacing='3' w='100%'>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Object Oriented Programming</Text>
                                <Spacer></Spacer>
                                {getProficiency(5)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>REST API Development</Text>
                                <Spacer></Spacer>
                                {getProficiency(5)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Software Design Patterns</Text>
                                <Spacer></Spacer>
                                {getProficiency(4)}
                            </HStack>
                        </ListItem>
                        <ListItem>
                            <HStack>
                                <ListIcon as={FaCaretRight} color={buttonColor} />
                                <Text>Agile Development</Text>
                                <Spacer></Spacer>
                                {getProficiency(3)}
                            </HStack>
                        </ListItem>
                    </List>
                </Container>
            </VStack>
        </HStack>
    );
}

export default Profile