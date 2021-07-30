import { createContext, ReactNode, useReducer } from "react";

interface AppProviderProps {
    children: ReactNode;

}

const AppReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		default:
			return state;
	}
};

interface ContextType  {
    budget: number;
	expenses: [
		{ id: number, name: string, cost: number }
	];
    dispatch: any;
}

const initialState = {
	budget: 20000,
	expenses: [
		{ id: 12, name: '買い物', cost: 40 },
		{ id: 13, name: '遊び', cost: 400 },
		{ id: 14, name: '車', cost: 500 },
	],
};

export const AppContext = createContext({} as ContextType);

export const AppProvider = (props: AppProviderProps) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};