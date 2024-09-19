import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "./store";

export type CardType = {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
    isLiked: boolean
}
// Define a type for the slice state
interface CardsList {
    cards: CardType[],
    isLoading: boolean,
    error: string
}
// Define the initial state using that type
const initialState: CardsList = {
    cards: [],
    isLoading: false,
    error: ''
}

export const getCards = createAsyncThunk(
    'cards/getCards',
    async (__, { rejectWithValue }) => {
        try {
            const response = await fetch('https://reqres.in/api/users?page=1', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error('can not get cards')
            } else {
                const res = await response.json();
                const cardsList = res.data;
                return cardsList;
            }
        } catch (error) { return rejectWithValue(error) }
    })

export const cardSlise = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        handleLike: (state) => {
            // state.cards.cards.isLiked = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCards.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = 'text error';
            state.cards = action.payload;
        })
        builder.addCase(getCards.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getCards.rejected, (state, action) => {
            state.isLoading = false;
            // state.error = action.payload;
        })
    }
})

export default cardSlise.reducer