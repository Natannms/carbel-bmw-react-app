import { create } from 'zustand'

export const headerStore = create((set) => ({
    isVisible: false,
    setVisible: (item, form)=> set(()=>({isVisible: item})),
}));
export const listCarInHeaderStore = create((set) => ({
    isVisible: false,
    index: 0,
    setVisible: (visible, index)=> set(()=>({isVisible: visible, index:index})),
}));
