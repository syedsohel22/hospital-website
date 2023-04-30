import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Heading>CREATE ACCOUNT</Heading>
      <Box
        display={"flex"}
        w={"40%"}
        m={"auto"}
        border={"1px solid black"}
        justifyContent={"center"}
      >
        <Box>
          <Stack>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
