// filepath: /p:/CodeOfAfrica/expensetracking-fn/expensetracking-fn/src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slice/user';
import { categorySlice } from './slice/category';
import { subCategorySlice } from './slice/subCategory';
import { transactionSlice } from './slice/transaction'

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    category: categorySlice.reducer,
    subCategory: subCategorySlice.reducer,
    transactions: transactionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;