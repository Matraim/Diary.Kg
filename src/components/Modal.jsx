import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button, TextField } from '@mui/material';

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  width: 500px;
  height: 250px;
  text-align: center;
`;

const ModalTitle = styled.h2`
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const StyledButton = styled(Button)`
  margin-left: 8px;
  background-color: #3498db;
  color: #fff;
  border-radius: 4px;
`;

const CustomModal = ({ isOpen, onClose, onSave, title, initialText }) => {
  const [text, setText] = useState(initialText || '');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    onSave(text);
    onClose();
  };

  return (
    <StyledModal open={isOpen} onClose={onClose} disableBackdropClick>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <TextField
          type="text"
          value={text}
          onChange={handleTextChange}
          multiline
          rows={4}
          fullWidth
        />
        <ButtonContainer>
          <Button onClick={onClose}>Отмена</Button>
          <StyledButton onClick={handleSave}>Сохранить</StyledButton>
        </ButtonContainer>
      </ModalContent>
    </StyledModal>
  );
};

export default CustomModal;
