import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box
      backgroundImage="url('/src/assets/hero-img.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="100%"
      h={"100vh"}
    >
      <Box display={"flex"}>
        <Heading>Your Health</Heading> <Text> </Text>
        <Heading> is Our</Heading>
      </Box>
      <Heading>responsibility</Heading>
      <Text>Search for a Doctor</Text>
      <Text>Select a Doctor</Text>
      <Text>Book an Appointment</Text>
    </Box>
  );
};

export default HomePage;
