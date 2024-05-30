import { useState } from "react";
import { Container, VStack, Heading, Input, Button, SimpleGrid, Box } from "@chakra-ui/react";

const Index = () => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (value) => {
    setInputValue(value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.900" color="white">
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">What do you want to build?</Heading>
        <Input 
          placeholder="e.g. A sleek landing page for a SaaS business" 
          size="lg" 
          bg="gray.800" 
          borderColor="gray.700" 
          focusBorderColor="blue.500" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SimpleGrid columns={[2, null, 3]} spacing={4} width="100%">
          {["Todo", "Personal website", "Notes", "Pomodoro", "Band website", "Chat"].map((label) => (
            <Button key={label} size="lg" bg="blue.600" _hover={{ bg: "blue.700" }} onClick={() => handleButtonClick(label)}>{label}</Button>
          ))}
        </SimpleGrid>
        <Box width="100%" textAlign="center">
          <Button size="lg" bg="green.500" _hover={{ bg: "green.600" }} width="50%">Create</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;