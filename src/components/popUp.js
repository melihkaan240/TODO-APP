import React from 'react';
import {
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialog,
  useDisclosure,
} from '@chakra-ui/react';
function SavedLocalStorage(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button colorScheme="purple" onClick={onOpen}>
        Saved Todo List
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              are you sure? Your changes will be saved.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                position={'absolute'}
                left={10}
              >
                Cancel
              </Button>
              <Button colorScheme="green" onClick={props.saved} ml={3}>
                Saved
              </Button>
              <Button ref={cancelRef} onClick={onClose}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default SavedLocalStorage;
