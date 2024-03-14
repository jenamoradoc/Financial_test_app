export interface LogoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onLogOut: () => void;
  cancelRef: React.RefObject<HTMLElement>;
}
