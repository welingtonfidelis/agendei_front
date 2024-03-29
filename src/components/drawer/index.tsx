import {
  Button,
  Drawer as DrawerChakra,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

import { Props } from "./types";

export const Drawer = (props: PropsWithChildren<Props>) => {
  const {
    title,
    onConfirmButtonText,
    onCloseButtonText,
    children,
    isOpen,
    onConfirmLoading,
    showActionButtons = true,
    extraActionButton,
    onConfirm,
    onClose,
  } = props;
  const { t } = useTranslation();

  return (
    <DrawerChakra onClose={onClose} isOpen={isOpen} size='lg'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>{title}</DrawerHeader>
        <DrawerCloseButton />
        <DrawerBody>{children}</DrawerBody>
        {showActionButtons && (
          <DrawerFooter>
            {extraActionButton}
            <Button onClick={onClose} colorScheme="gray" marginEnd={"2"} type="submit">
              {onCloseButtonText || t("generic.button_cancel")}
            </Button>
            <Button
              onClick={onConfirm}
              colorScheme="blue"
              isLoading={onConfirmLoading}
            >
              {onConfirmButtonText || t("generic.button_save")}
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </DrawerChakra>
  );
};
