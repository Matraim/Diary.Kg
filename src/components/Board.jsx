import React, { useState } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import {
  moveCard,
  addCard,
  editCard,
  deleteCard,
  deleteBoard,
  editBoardTitle,
} from '../features/boardSlice';
import { Card } from './Card';
import styled from 'styled-components';
import Modal from './Modal';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Board = ({ boardIndex, cards }) => {
  const dispatch = useDispatch();

  const [isEditingTitle, setEditingTitle] = useState(false);
  const [newBoardTitle, setNewBoardTitle] = useState(boardIndex.title || '');

  const [isAddingCard, setAddingCard] = useState(false);

  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => {
      dispatch(
        moveCard({
          source: { boardIndex: item.boardIndex, cardIndex: item.cardIndex },
          destination: { boardIndex, cardIndex: cards.length },
        })
      );
    },
  });

  const [, drag] = useDrag({
    type: 'BOARD',
    item: { boardIndex },
  });

  const predefinedTitles = ['Задача 🔸', 'Выполняются 🔹', 'Завершено ✅'];

  const handleEditTitle = () => {
    setEditingTitle(true);
    setNewBoardTitle(boardIndex.title || '');
  };

  const handleSaveTitle = () => {
    if (newBoardTitle.trim() !== '') {
      dispatch(editBoardTitle({ boardIndex, newTitle: newBoardTitle })); //!bug
      setEditingTitle(false);
    }
  };

  const handleTitleChange = (e) => {
    setNewBoardTitle(e.target.value);
  };

  const handleAddCard = () => {
    setAddingCard(true);
  };

  const handleEditCard = (boardIndex, cardIndex, newText) => {
    dispatch(editCard({ boardIndex, cardIndex, newText }));
  };

  const handleDeleteCard = (boardIndex, cardIndex) => {
    dispatch(deleteCard({ boardIndex, cardIndex }));
  };

  const handleDeleteBoard = () => {
    dispatch(deleteBoard({ boardIndex }));
  };

  const handleAddCardModalClose = () => {
    setAddingCard(false);
  };

  const handleAddCardModalSave = (text) => {
    if (text.trim() !== '') {
      dispatch(addCard({ boardIndex, card: { text, status: 'todo' } }));
      setAddingCard(false);
    } else {
      toast.info('Please enter a task');
    }
  };

  return (
    <StyleContainer>
      <BoardContainer ref={(node) => drag(drop(node))}>
        <BoardHeader>
          {isEditingTitle ? (
            <>
              <input
                type="text"
                value={newBoardTitle}
                onChange={handleTitleChange}
                onBlur={handleSaveTitle}
              />
            </>
          ) : (
            <>
              <BoardTitle onClick={handleEditTitle}>
                {isEditingTitle ? (
                  <input
                    type="text"
                    value={newBoardTitle}
                    onChange={handleTitleChange}
                    onBlur={handleSaveTitle}
                  />
                ) : (
                  predefinedTitles[boardIndex]
                )}
              </BoardTitle>
            </>
          )}

          <DeleteButton onClick={handleDeleteBoard}>
            <RemoveCircleIcon />
          </DeleteButton>
          
        </BoardHeader>

        <CardList>
          {cards.map((card, index) => (
            <Card
              key={index}
              boardIndex={boardIndex}
              cardIndex={index}
              text={card.text}
              status={card.status}
              onEdit={handleEditCard}
              onDelete={handleDeleteCard}
            />
          ))}
        </CardList>

        <AddCardButton onClick={handleAddCard}> Добавить Задачу </AddCardButton>
        {isAddingCard && (
          <Modal
            isOpen={isAddingCard}
            onClose={handleAddCardModalClose}
            onSave={handleAddCardModalSave}
            title="Добавить задачу"
          />
        )}
        <br />

      </BoardContainer>
    </StyleContainer>
  );
};

export default Board;

//  Style

const StyleContainer = styled.div`
  padding: 6rem;
`;

const BoardContainer = styled.div`
  padding: 16px;
  margin: 16px;
  background-color: #ebecf0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  min-width: 350px;
`;

const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const BoardTitle = styled.h3`
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const AddCardButton = styled.div`
  padding: 8px;
  background-color: #3355a9;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
`;

const DeleteButton = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CardList = styled.div`
  flex-grow: 1;
  min-height: 50px;
  margin-bottom: 8px;
`;

