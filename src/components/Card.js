import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      backgroundColor="white"
      boxShadow="lg"
      borderRadius="md"
      overflow="hidden"
    >
      <Box
        bgImage={`url(${imageSrc})`}
        bgSize="cover"
        bgPosition="center"
        height="200px"
      />
      <Box p={4}>
        <Heading as="h2" size="md" mt={2} mb={1}>
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
        <Text mt={2} color="gray.600">See More  <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </Box>
    </Box>
  );
};

export default Card;
