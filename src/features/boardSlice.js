import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'board',

  initialState: {
    boards: [],
  },

  reducers: {
    addBoard: (state, action) => {
      if (state.boards.length < 3) {
        state.boards.push(action.payload);
      } else {
        console.warn('Максимум 3 доска можно добавить');
      }
    },
    addCard: (state, action) => {
      const { boardIndex, card } = action.payload;
      state.boards[boardIndex].cards.push(card);
    },
    editCard: (state, action) => {
      const { boardIndex, cardIndex, newText } = action.payload;
      state.boards[boardIndex].cards[cardIndex].text = newText;
    },

    deleteBoard: (state, action) => {
      const { boardIndex } = action.payload;
      state.boards.splice(boardIndex, 1);
    },

    deleteCard: (state, action) => {
      const { boardIndex, cardIndex } = action.payload;
      state.boards[boardIndex].cards.splice(cardIndex, 1);
    },

    editBoardTitle: (state, action) => {
      const { boardIndex, newTitle } = action.payload;
      state.boards[boardIndex].title = newTitle;
    },

    moveCard: (state, action) => {
      const { source, destination } = action.payload;
      const [movedCard] = state.boards[source.boardIndex].cards.splice(
        source.cardIndex,
        1
      );
      state.boards[destination.boardIndex].cards.splice(
        destination.cardIndex,
        0,
        movedCard
      );
    },
  },
});

export const {
  addBoard,
  addCard,
  editCard,
  moveCard,
  deleteCard,
  deleteBoard,
  editBoardTitle,
} = boardSlice.actions;

export default boardSlice.reducer;
