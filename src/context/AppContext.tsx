import { createContext, ReactNode, useReducer } from "react";

interface AppProviderProps {
    children: ReactNode;

}

const AppReducer = (state: any, action: { type: any; }) => {
	switch (action.type) {
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
	budget: 2000,
	expenses: [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
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