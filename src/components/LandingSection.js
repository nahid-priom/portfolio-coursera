import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from "../images/profile.jpg"

const greeting = "Hello, I am PrioM!";
const bio1 = "A frontend developer";
const bio2 = "React Specialist";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} textAlign="center">
      <Avatar size="xl" src={profilePic} />
      <Heading size="lg" color="white">{greeting}</Heading>
      <Heading size="md" color="white">{bio1}</Heading>
      <Heading size="md" color="white">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
