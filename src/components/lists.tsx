'use client'

import { useGlobal } from "@/context/context"
import Link from "next/link";

type Todos = {
    list_id: number;
    list_title: string;
    slug: string;
};

export default function Lists() {

    const { todosLists, todosListsLoading } = useGlobal()

    return (
        <div className='h-full pl-16'>
            <div className='min-h-14 h-full border-2 border-[var(--firstColor)] flex'>
                {todosListsLoading ? <p className="text-[var(--firstColor)] text-center py-3.5 w-full">Loading...</p>
                    :
                    todosLists?.map((list: Todos) => (
                        <Link href={`/${list.slug}`}
                            className="w-1/3 p-3"
                            key={list.list_id}>
                            <div className="bg-[var(--firstColor)] p-2 rounded-md flex justify-between">
                                <p>{list.list_title}</p>
                                <button>+</button>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}
