import { VStack, Text, HStack, Container, Link, List, ListItem, ListIcon, Flex } from '@chakra-ui/layout';
import { Icon, useColorModeValue } from "@chakra-ui/react";
import React from 'react';
import { FaCaretRight } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

function WorkHistory() {
    const mainTextColor = useColorModeValue('teal.700', 'gray.400');
    const buttonColor = useColorModeValue('purple.700', 'aquamarine');
    const secondaryCyanTextColor = useColorModeValue('cyan.700', 'cyan.400');
    const secondaryBlueTextColor = useColorModeValue('blue.500', 'blue.100');
    return (
        <HStack w='65%'>
            <VStack spacing="0px" w='100%' align='flex-start'>
                <Text className='programmer-font intro-font-size' mt='28' color={buttonColor} fontWeight={useColorModeValue('extrabold', 'semibold')}>Where I've worked</Text>
                <Container mt='80' color={mainTextColor} fontSize='lg' fontWeight='normal'>
                    <br />
                    <HStack>
                        <Link href="http://outplayhq.com/"
                            target="_blank" rel="noreferrer"
                            fontWeight='semibold'
                            fontSize='lg'
                            color={secondaryCyanTextColor}
                        >
                            Outplay
                        </Link>
                        <Icon as={ImLocation2} />
                        <Text>Hyderabad, India (Remote)</Text>
                    </HStack>
                    <Text color={secondaryBlueTextColor}>Software Engineer (Aug 2021 - Present)</Text>
                    <Container>
                        <List spacing='3' w='100%' mt='4'>
                            <ListItem>
                                <Flex>
                                    <ListIcon as={FaCaretRight} color={buttonColor} mt='1' />
                                    <Text flex='1'>
                                        Developed REST APIs in C# (.NET Core), PostgreSQL.
                                    </Text>
                                </Flex>
                            </ListItem>
                            <ListItem>
                                <Flex>
                                    <ListIcon as={FaCaretRight} color={buttonColor} mt='1' />
                                    <Text flex='1'>
                                        Implemented Okta SSO into the application using SAML.
                                    </Text>
                                </Flex>
                            </ListItem>
                            <ListItem>
                                <Flex>
                                    <ListIcon as={FaCaretRight} color={buttonColor} mt='1' />
                                    <Text flex='1'>
                                        Migrated the application from .NET framework to .NET Core.
                                    </Text>
                                </Flex>
                            </ListItem>
                            <ListItem>
                                <Flex>
                                    <ListIcon as={FaCaretRight} color={buttonColor} mt='1' />
                                    <Text flex='1'>
                                        Integrated external applications with the system like Calendly.
                                    </Text>
                                </Flex>
                            </ListItem>
                            <ListItem>
                                <Flex>
                                    <ListIcon as={FaCaretRight} color={buttonColor} mt='1' />
                                    <Text flex='1'>
                                        Written microservices using Golang, Kafka, Redis to process various events of the application.
                                    </Text>
                                </Flex>
                            </ListItem>
                        </List>
                    </Container>
                </Container>
                <Container mt='80' color={mainTextColor} fontSize='lg' fontWeight='normal'>
                    <br />
                    <HStack>
                        <Link href="https://aptean.com"
                            target="_blank" rel="noreferrer"
                            fontWeight='semibold'
                            fontSize='lg'
                            color={secondaryCyanTextColor}
                        >
                            Aptean
                        </Link>
                        <Icon as={ImLocation2} />
                        <Text>Bangalore, India</Text>
                    </HStack>
                    <Text color={secondaryBlueTextColor}>Associate Software Development Engineer (Aug 2019 - Aug 2021)</Text>
                    <Container>
                        <List spacing='3' w='100%' mt='4'>
                            <ListItem>
                                <Flex>
                                    <ListIcon as={FaCaretRight} color={buttonColor} mt='1' />
                                    <Text flex='1'>
                                        Working in the product R&D department as a full stack web developer to build SaaS applications in C#, .NET Core, SQL Server architecture.
                                    </Text>
                                </Flex>
                            </ListItem>
                            <ListItem>
                                <Flex>
                                    <ListIcon as={FaCaretRight} color={buttonColor} mt='1' />
                                    <Text flex='1'>
                                        Implemented JWT based authentication and authorization in the application using Microsoft Azure.
                                    </Text>
                                </Flex>
                            </ListItem>
                            <ListItem>
                                <Flex>
                                    <ListIcon as={FaCaretRight} color={buttonColor} mt='1' />
                                    <Text flex='1'>
                                        Implemented Single Sign On (SSO) architecture in the application with SAML and OpenID Connect protocols using Azure B2C Identity Experience Framework.
                                    </Text>
                                </Flex>
                            </ListItem>
                            <ListItem>
                                <Flex>
                                    <ListIcon as={FaCaretRight} color={buttonColor} mt='1' />
                                    <Text flex='1'>
                                        Developing REST APIs in .NET Core to process business information in a n-tier architecture backend application.
                                    </Text>
                                </Flex>
                            </ListItem>
                            <ListItem>
                                <Flex>
                                    <ListIcon as={FaCaretRight} color={buttonColor} mt='1' />
                                    <Text flex='1'>
                                        Developing customer centric user interfaces for the front end application using ExtJs JavaScript framework, HTML, CSS.
                                    </Text>
                                </Flex>
                            </ListItem>
                            <ListItem>
                                <Flex>
                                    <ListIcon as={FaCaretRight} color={buttonColor} mt='1' />
                                    <Text flex='1'>
                                        Reviewed codes of peers on daily basis to identify critical bugs beforehand and spot the areas of improvement.
                                    </Text>
                                </Flex>
                            </ListItem>
                        </List>
                    </Container>
                </Container>
            </VStack>
        </HStack>
    );
}

export default WorkHistory