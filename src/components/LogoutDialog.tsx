import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

import { LogoutDialogProps } from "../types/dialog.type";

const LogoutDialog = ({
  isOpen,
  onClose,
  onLogOut,
  cancelRef,
}: LogoutDialogProps) => {
  return (
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      data-testid='logoutDialog'
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Do you want to log out?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          Are you sure you want to close the current session?
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef as any} onClick={onClose}>
            No
          </Button>
          <Button colorScheme='red' ml={3} onClick={onLogOut}>
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutDialog;
