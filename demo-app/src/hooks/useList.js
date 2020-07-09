import { useState } from 'react';

export const useList = (initialItems) => {

  const [ items, setItems ] = useState(initialItems);

  const addItem = (item) => {
    setItems(items.concat({
      ...item,
      id: Math.max(...items.map(c => c.id), 0) + 1,
    }));
  };

  const saveItem = (item) => {
    const itemIndex = items.findIndex(c => c.id === item.id);
    const newItems = items.concat();
    newItems[itemIndex] = item; // replace old item with a new one
    setItems(newItems);
  };

  const deleteItem = (itemId) => {
    setItems(items.filter(c => c.id !== itemId));
  };

  return [ items, addItem, saveItem, deleteItem ];

};