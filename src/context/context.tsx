'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getTodosLists, TodosLists } from "./lib/todoslists";
import { getTodos, Todos } from "./lib/todos";

type GlobalContextType = {
    createListPopup: boolean;
    setCreateListPopup: (newValue: boolean) => void;
    todosLists: any;
    todosListsLoading: boolean;
    fetchTodosLists: () => void;
    todos: any;
    todosLoading: boolean;
    fetchTodos: (slug: string) => void;
    // setTodosSlug: (todosSlug: string) => void;
    // slug: string;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {

    const [createListPopup, setCreateListPopup] = useState(false);

    const [todosLists, setTodosLists] = useState<TodosLists[]>([]);
    const [todosListsLoading, setTodosListsLoading] = useState<boolean>(true);
    const [todos, setTodos] = useState<Todos[]>([]);
    const [todosLoading, setTodosLoading] = useState<boolean>(true);
    // const [todosSlug, setTodosSlug] = useState<string>("")

    const fetchTodosLists = async () => {
        setTodosListsLoading(true);
        try {
            const data: any = await getTodosLists(); // import olunmuş funksiya
            setTodosLists(data);
        } catch (err) {
            console.error("Fetch error:", err);
        } finally {
            setTodosListsLoading(false);
        }
    };

    const fetchTodos = async (slug: string) => {
        setTodosLoading(true);
        try {
            const data: any = await getTodos(slug); // import olunmuş funksiya
            setTodos(data);
        } catch (err) {
            console.error("Fetch error:", err);
        } finally {
            setTodosLoading(false);
        }
    };

    useEffect(() => {
        fetchTodosLists();
    }, []);

    console.log(todosLists)

    return (
        <GlobalContext.Provider value={{ createListPopup, setCreateListPopup, todosLists, todosListsLoading, fetchTodosLists, todos, todosLoading, fetchTodos }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    const context = useContext(GlobalContext)
    if (!context) throw new Error("useGlobal must be used within GlobalProvider")
    return context
}