"use client"

import { fetchLists } from "@/store/slices/todosListsSlice";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Lists() {
    const dispatch = useDispatch<AppDispatch>()
    const { lists, loadingList, errorList, errorAddList } = useSelector((state: RootState) => state.lists)

    useEffect(() => {
        dispatch(fetchLists())
    }, [dispatch])

    if (errorList) return <p>{errorList}</p>
    if (errorAddList) return <p>{errorAddList}</p>

    return (
        <div className="h-full pl-16">
            <div className="min-h-14 h-full border-2 border-[var(--firstColor)] flex">
                {loadingList ? <p className="text-[var(--firstColor)] text-center py-3.5 w-full">Loading...</p>
                    :
                    lists?.map((list) => (
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
