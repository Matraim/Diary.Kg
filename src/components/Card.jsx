import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';
import Modal from './Modal';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteIcon from '@mui/icons-material/Delete';

export const Card = ({ boardIndex, cardIndex, text, onEdit, onDelete }) => {
  const [, drag] = useDrag({
    type: 'CARD',
    item: { boardIndex, cardIndex },
  });

  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCloseModal = () => {
    setEditing(false);
  };

  const handleSaveEdit = (newText) => {
    onEdit(boardIndex, cardIndex, newText);
    setEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete(boardIndex, cardIndex);
  };

  return (
    <>
      <CardContainer ref={drag}>
        <CardText onClick={handleEditClick}>{text}</CardText>
        <EditIcon onClick={handleEditClick}>
          <DriveFileRenameOutlineIcon />
        </EditIcon>
        <DeleteIcons onClick={handleDeleteClick}>
          <DeleteIcon />
        </DeleteIcons>
      </CardContainer>
      <Modal
        isOpen={isEditing}
        onClose={handleCloseModal}
        onSave={handleSaveEdit}
        title="Edit Card"
        initialText={text}
      />
    </>
  );
};

// Style

const CardContainer = styled.div`
  padding: 12px;
  margin: 8px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: grab;
  position: relative;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const CardText = styled.div`
  cursor: pointer;
  white-space: pre-line;
`;

const EditIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 32px;
  font-size: 16px;
  color: #777;
  cursor: pointer;
`;

const DeleteIcons = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 16px;
  cursor: pointer;
`;
