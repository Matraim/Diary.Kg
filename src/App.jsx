import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBoard } from './features/boardSlice.js';
import Board from './components/Board.jsx';
import styled from 'styled-components';
import Header from './components/Header.jsx';
import './index.css';
import { Button } from '@mui/material';

const App = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board.boards);

  const handleAddBoard = () => {
    dispatch(addBoard({ cards: [] }));
  };

  return (
    <AppContainer>
      <Header />
      
      <BoardsContainer>
        {boards.map((board, index) => (
          <Board key={index} boardIndex={index} cards={board.cards} />
        ))}
      </BoardsContainer>

      <AddBoardButton
        variant="contained"
        disableElevation
        onClick={handleAddBoard}
      >
        <Button variant="contained" disableElevation>
          Добавить новый доску
        </Button>
      </AddBoardButton>
    </AppContainer>
  );
};

export default App;

//

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #e6e6e6;
`;

const BoardsContainer = styled.div`
  display: flex;
`;

const AddBoardButton = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  width: 250px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  color: wheat;
  border-radius: 3px;
`;
