'use client';

import { H1 } from '@/components/global/H1';
import {
  Textarea,
  Input,
  Button,
  Box,
  VStack,
  FormControl,
  FormErrorMessage,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Dancing_Script } from 'next/font/google';
import { Form } from '../types/Contact.type';
import { postContact } from '@/lib/connect/contact';

export const dancing_script = Dancing_Script({ subsets: ['latin'] });

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = async (data: Form) => {
    await postContact(data);
    onOpen();
  };

  return (
    <Box p={4} maxW="600px" mx="auto" minH={'80vh'}>
      <H1 className={dancing_script.className}>Contact</H1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} mt={4}>
          <FormControl isInvalid={!!errors.name}>
            <Input
              placeholder="名前*"
              {...register('name', { required: '名前は必須項目です' })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <Input
              type="email"
              placeholder="メールアドレス*"
              {...register('email', {
                required: 'メールアドレスは必須項目です',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: '無効なメールアドレスです',
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.message}>
            <Textarea
              size={'lg'}
              rows={6}
              placeholder="お問い合わせ内容*"
              {...register('message', {
                required: 'お問い合わせ内容は必須項目です',
              })}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>

          <Button colorScheme="teal" type="submit" className="mt-3 w-full">
            送信
          </Button>
        </VStack>
      </form>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          window.location.reload();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>送信完了</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            お問い合わせ内容が送信されました。ご連絡いただきありがとうございます。
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              onClick={() => {
                onClose();
                window.location.reload();
              }}
            >
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Contact;
