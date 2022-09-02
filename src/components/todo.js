import React from 'react';
import { EditIcon, DeleteIcon, CheckIcon } from '@chakra-ui/icons';
import { Box, Text, IconButton, HStack, Input, Flex } from '@chakra-ui/react';
import { FaRegSave } from 'react-icons/fa';
const completedTodo = props => {
  return (
    <Box>
      <HStack
        boxShadow="xl"
        borderRadius={15}
        bgColor={'white'}
        justifyContent={'space-between'}
        px={'2'}
        w={'80vw'}
        h={'6.5vh'}
      >
        <IconButton
          mr={'2'}
          colorScheme="purple"
          variant="solid"
          borderRadius={'full'}
          aria-label="Add Icon"
          size="sm"
          color="white"
          bgColor={'#D92525'}
          onClick={props.deleteTodo}
          icon={<DeleteIcon />}
        ></IconButton>
        {props.isEditable ? (
          <Text> {props.text}</Text>
        ) : (
          <Input
            type={'text'}
            pr="1.5rem"
            boxShadow="md"
            placeholder="To Do"
            value={props.todo}
            onChange={props.setTodo}
            borderRadius={10}
          />
        )}
        <Flex>
          {props.isEditable ? (
            <IconButton
              mr={'2'}
              colorScheme={'purple'}
              variant="solid"
              borderRadius={'full'}
              aria-label="Add Icon"
              size="sm"
              color="white"
              bgColor={'#256DD9'}
              onClick={props.editTodo}
              icon={<EditIcon />}
            ></IconButton>
          ) : (
            <IconButton
              mr={'2'}
              colorScheme="purple"
              variant="solid"
              borderRadius={'full'}
              size="xl"
              w={8}
              h={8}
              color="white"
              bgColor={'#D0D0D0'}
              onClick={props.saveTodo}
              icon={<FaRegSave />}
            ></IconButton>
          )}
          <IconButton
            colorScheme="purple"
            variant="solid"
            borderRadius={'full'}
            aria-label="Add Icon"
            size="sm"
            color="white"
            bgColor={'#29D925'}
            onClick={props.completedTodo}
            icon={<CheckIcon />}
          ></IconButton>
        </Flex>
      </HStack>
    </Box>
  );
};

export default completedTodo;
