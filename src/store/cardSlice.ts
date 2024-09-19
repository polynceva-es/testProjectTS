import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type Card = {
    date: string,
    localName: string,
    name: string,
    countryCode: string,
    fixed: boolean,
    global: boolean,
    counties: null | string[],
    launchYear: null | '',
    type: string
}
// Define a type for the slice state
interface CardsList {
    cards: Array<Card>,
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
            const response = await fetch('https://date.nager.at/api/v2/publicholidays/2020/US', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error('can not get cards')
            } else {
                const cardsList: Card[] = await response.json()
                return cardsList;
            }
        } catch (error) { return rejectWithValue(error) }
    })

export const cardSlise = createSlice({
    name: 'cards',
    initialState,
    reducers: {

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