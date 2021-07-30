import React from 'react';
import { TiDelete } from 'react-icons/ti';

interface ExpenseItemProps {
    id: number;
    name: string;
    cost: number;
}

const ExpenseItem = (props: ExpenseItemProps) => {
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span className='badge badge-primary badge-pill mr-3'>
					{props.cost}円
				</span>
				<TiDelete size='1.5em'></TiDelete>
			</div>
		</li>
	);
};

export default ExpenseItem;