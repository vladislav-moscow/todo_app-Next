'use client';
import { ChangeEvent, useState } from 'react';
import './globals.css'

interface Item {
	id: number;
	value: string;
}

export default function Home() {
	const [newItem, setNewItem] = useState<string>('');
	const [itemsList, setItemsList] = useState<Item[]>([])
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewItem(e.target.value);
	};
	
	const addNewItemToList = () => {
		const item = {
			id: Math.floor(Math.random() * 1000),
			value: newItem
		}

		setItemsList(prev => [...prev, item])
		setNewItem('')
	}

	const deleteFromlist = (id: number) => {
		const newArray = itemsList.filter(item => item.id !== id);
		setItemsList(newArray)
	}

	return (
		<main>
			<h1>TODOList</h1>

			<input type="text" value={newItem} onChange={handleInputChange} />

			<button onClick={addNewItemToList}>добавить</button>

			<ul className='flex item-list'>
			{itemsList.map(item => (
				
				<li key={item.id} >{item.value}  <button onClick={() => deleteFromlist(item.id)}>удалить</button></li> 
			)) }
			</ul>
		</main>
	);
}
