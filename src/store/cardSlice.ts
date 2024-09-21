import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "./store";

interface CardTypeAPI {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}
export interface CardType extends CardTypeAPI{
    isLiked: boolean,
    isDelete: boolean
 }


// Define a type for the slice state
interface CardsList {
    cards: CardType[],
    isLoading: boolean,
    error: string,
    page: number,
    thatsAll: boolean
}
// Define the initial state using that type
const initialState: CardsList = {
    cards: [],
    isLoading: false,
    error: '',
    page: 1,
    thatsAll: false
}

export const getCards = createAsyncThunk(
    'cards/getCards',
    async (page: number, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
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
        handleLike: (state, action) => {
            const users = state.cards;
            const user = users.find((item)=> item.id == action.payload)
            if(user) {user.isLiked = !user.isLiked}
        },
        handleDelete: (state, action) => {
            const users = state.cards;
            const user = users.find((item)=> item.id == action.payload)
            if(user) {user.isDelete = true}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCards.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = '';
            // state.cards = state.cards.concat(action.payload);
            if(action.payload.length !== 0) {
                action.payload.forEach((elem: CardType) => {
                    if(!state.cards.find(el => el.id === elem.id)) {
                      state.cards.push(elem)
                    }
                })
            } else {
                state.thatsAll = true;
            }
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
export const {handleLike, handleDelete} = cardSlise.actions;