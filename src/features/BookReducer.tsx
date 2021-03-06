import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { StateProps } from '../components/assets/Types'

export const getBook = createAsyncThunk('books/getBook',
    async (myData: {id: string | undefined, status: string | undefined}) => {

        const { id, status } = myData;
        const { data }  = await axios.patch(`http://localhost:3004/books/${id}`, {
            status: status === 'reading' ? 'finished': 'reading'
        }) 
        return data;
    }
)

export const getOneBook = createAsyncThunk(
    'books/getOneBook',
    async (id: string | undefined) => {
        const { data } = await axios.get(`http://localhost:3004/books/${id}`)
        return data;
    }
)
interface Props {
    status: string;
    book: StateProps;
}

const initialState: Props = {
    status: '',
    book: { id: '234'}
}
const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBook.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(getBook.fulfilled, (state, action) => {
            state.status = 'success'
            state.book = action.payload
        })

        builder.addCase(getBook.rejected, (state, action) => {
            state.status = 'failed'
        })

        builder.addCase(getOneBook.pending, (state, action) => {
            state.status = 'loading'
        })
        
        builder.addCase(getOneBook.fulfilled, (state, {payload}) => {
            state.status = 'success'
            state.book = payload
        })

        builder.addCase(getOneBook.rejected, (state, action) => {
            state.status = 'failed'
        })
    }
    

})


export default bookSlice.reducer;
