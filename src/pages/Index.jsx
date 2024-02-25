import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaRecycle, FaGlobe, FaHandsHelping } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex align="center" justify="center" direction={{ base: "column", md: "row" }} wrap="wrap" minH="100vh" px={8} bg={useColorModeValue("gray.50", "gray.800")}>
        {/* Hero Section */}
        <Stack spacing={4} w={{ base: "full", md: "50%" }} align="center">
          <Heading as="h1" size="2xl" fontWeight="bold" color={useColorModeValue("green.500", "green.300")}>
            Recycle Today for a Better Tomorrow
          </Heading>
          <Text fontSize="lg" color={"gray.500"}>
            Join us on our mission to make the world a cleaner and greener place with innovative plastic recycling solutions.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button size="lg" leftIcon={<FaRecycle />} colorScheme="green" variant="solid">
              Get Started
            </Button>
            <Button size="lg" leftIcon={<FaGlobe />} colorScheme="green" variant="outline">
              Learn More
            </Button>
          </Stack>
        </Stack>
        {/* Image Section */}
        <VStack w={{ base: "full", md: "50%" }} pt={{ base: 12, md: 0 }}>
          <Image borderRadius="lg" src="https://images.unsplash.com/photo-1571727153934-b9e0059b7ab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwcmVjeWNsaW5nfGVufDB8fHx8MTcwODg4MTE0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Plastic Recycling" shadow="2xl" />
        </VStack>
      </Flex>

      {/* Feature Section */}
      <Box py={12} bg={useColorModeValue("white", "gray.900")}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h2" size="xl">
            Why Choose Us?
          </Heading>
          <Text fontSize="lg" color={"gray.500"}>
            Our innovative approach to recycling plastic waste helps reduce pollution and conserve natural resources.
          </Text>
        </VStack>

        <Stack direction={{ base: "column", md: "row" }} textAlign="center" justify="center" spacing={{ base: 4, md: 10 }} py={10}>
          <Feature icon={<FaRecycle fontSize="3em" />} title="Efficient Recycling" text="Our state-of-the-art facilities ensure maximum recycling efficiency." />
          <Feature icon={<FaGlobe fontSize="3em" />} title="Global Impact" text="We're committed to making a positive impact on the global environment." />
          <Feature icon={<FaHandsHelping fontSize="3em" />} title="Community Driven" text="We work closely with communities to create sustainable recycling programs." />
        </Stack>
      </Box>
    </Container>
  );
};

// Feature component
const Feature = ({ title, text, icon }) => {
  return (
    <Stack align="center" spacing={3}>
      <Flex w={16} h={16} align="center" justify="center" color="white" rounded="full" bg="green.500" mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default Index;
