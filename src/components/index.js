import React, { useState, useEffect } from 'react';

import ToDo from './todo';
import CompletedTodo from './complatedTodo';
import SavedLocalStorage from './popUp';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  Input,
  Text,
  IconButton,
  HStack,
  InputGroup,
  VStack,
  InputRightElement,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
function Main() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');
  const [newTodo, setNewTodo] = useState('');
  const todoListLS = todoList;
  const addTodo = () => {
    setTodoList(prevTodoList => [
      ...prevTodoList,
      {
        id: uuidv4(),
        todo: newTodo,
        isDelete: false,
        isEditable: true,
        isCompleted: false,
      },
    ]);
    localStorage.setItem('items', JSON.stringify(todoListLS));
    setNewTodo('');
  };
  const editTodo = (id, oldTodo) => {
    setTodoList(
      prevTodoList =>
        prevTodoList.map(todoItem =>
          todoItem.id === id
            ? { ...todoItem, isEditable: !todoItem.isEditable }
            : todoItem
        ),
      localStorage.setItem('items', JSON.stringify(todoListLS)),
      setTodo(oldTodo)
    );
  };

  const saveTodo = id => {
    setTodoList(
      prevTodoList =>
        prevTodoList.map(todoItem =>
          todoItem.id === id
            ? { ...todoItem, isEditable: !todoItem.isEditable, todo: todo }
            : todoItem
        ),
      localStorage.setItem('items', JSON.stringify(todoListLS))
    );
  };

  const deleteTodo = id => {
    setTodoList(prevTodoList =>
      prevTodoList.filter(todoItem => todoItem.id !== id)
    );
  };

  const completedTodo = id => {
    console.log(todo);
    setTodoList(
      prevTodoList =>
        prevTodoList.map(todoItem =>
          todoItem.id === id
            ? { ...todoItem, isCompleted: !todoItem.isCompleted }
            : todoItem
        ),
      localStorage.setItem('items', JSON.stringify(todoListLS))
    );
  };

  //***** LOCAL STORAGE *****

  useEffect(() => {
    const valueLS = localStorage.getItem('items');

    setTodoList(JSON.parse(valueLS));
  }, []);

  const localSaved = () => {
    localStorage.setItem('items', JSON.stringify(todoListLS));
  };

  // ******** COMPONENTS *****
  return (
    <Box
      bgImage={'wallpaper.jpg '}
      bgSize={'cover'}
      width={'100vw'}
      height={'100vh'}
    >
      <VStack
        gap={5}
        pt={'10'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          textAlign="center"
          fontSize="xl"
          h={'5vh'}
          w={'100vw'}
          display={'flex'}
          color={'white'}
          fontWeight={'bold'}
          justifyContent={'flex-start'}
        >
          <Text pl={'7.5vw'} fontSize="4xl">
            TO DO
          </Text>
        </Box>
        {/* İNPUT KISMI  */}
        <Box w={'80vw'}>
          <HStack>
            <InputGroup size="md">
              <Input
                className="input"
                type={'text'}
                boxShadow="xl"
                placeholder="To Do"
                color={'white'}
                borderRadius={10}
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
              />
              <InputRightElement width="3rem">
                <IconButton
                  colorScheme="purple"
                  variant="solid"
                  borderRadius={'full'}
                  aria-label="Add Icon"
                  size="sm"
                  color="#7F1F8C"
                  bgColor={'white'}
                  onClick={addTodo}
                  icon={<AddIcon />}
                ></IconButton>
              </InputRightElement>
            </InputGroup>
          </HStack>
        </Box>
        {/* YAPILACAKLAR LİSTESİ */}
        <Box w={'80vw'} h={'25vh'} display={'flex'} boxShadow="sm">
          <VStack spacing={5} overflowY={'auto'}>
            {todoList
              .filter(i => i.isCompleted === false)
              .map((todoItem, index) => (
                <ToDo
                  key={index}
                  text={todoItem.todo}
                  todo={todo}
                  editTodo={() => editTodo(todoItem.id, todoItem.todo)}
                  setTodo={e => setTodo(e.target.value)}
                  saveTodo={() => saveTodo(todoItem.id)}
                  deleteTodo={() => deleteTodo(todoItem.id)}
                  completedTodo={() => completedTodo(todoItem.id)}
                  isEditable={todoItem.isEditable}
                  isCompleted={todoItem.isCompleted}
                />
              ))}
          </VStack>
        </Box>
        <Box
          textAlign="center"
          fontSize="xl"
          h={'5vh'}
          w={'100vw'}
          display={'flex'}
          color={'white'}
          fontWeight={'bold'}
          justifyContent={'flex-start'}
        >
          <Text pl={'7.5vw'} fontSize="4xl">
            Completed
          </Text>
        </Box>
        {/* YAPILDI LİSTESİ */}
        <Box w={'80vw'} h={'25vh'} display={'flex'} boxShadow={'sm'}>
          <VStack spacing={5} overflowY={'auto'}>
            {todoList
              .filter(i => i.isCompleted === true)
              .map((todoItem, index) => (
                <CompletedTodo
                  key={index}
                  text={todoItem.todo}
                  todo={todo}
                  editTodo={() => editTodo(todoItem.id, todoItem.todo)}
                  setTodo={e => setTodo(e.target.value)}
                  saveTodo={() => saveTodo(todoItem.id)}
                  deleteTodo={() => deleteTodo(todoItem.id)}
                  completedTodo={() => completedTodo(todoItem.id)}
                  isEditable={todoItem.isEditable}
                  isCompleted={todoItem.isCompleted}
                />
              ))}
          </VStack>
        </Box>

        <Box
          w={'50vw'}
          h={'8vh'}
          display={'flex'}
          position={'relative'}
          justifyContent={'center'}
          alignItems={'flex-start '}
          borderTopRadius={'30'}
        >
          <SavedLocalStorage saved={localSaved} />
        </Box>
      </VStack>
    </Box>
  );
}

export default Main;
