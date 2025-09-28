'use client'
import { fetchTodos } from "@/store/slices/todosSlice"
import { AppDispatch, RootState } from "@/store/store"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function SlugSingleSec() {
    const { todos, loading, error } = useSelector((state: RootState) => state.todos)
    const dispatch = useDispatch<AppDispatch>()

    const params = useParams();
    const param = params?.slug as string
    const clearTodos = todos[0]?.todos
    const statuses = ["Will", "Doing", "Did"]

    useEffect(() => {
        dispatch(fetchTodos(param))
    }, [dispatch])

    return (
        <section>
            <div className="custom-container flex gap-3 pt-4">
                {loading ? <p className="text-center text-[var(--firstColor)] pt-16">
                    Loading...
                </p> : statuses?.map((items, index) => {
                    return (
                        <div key={index} className="w-1/3 rounded-2xl h-full">
                            <h3 className="bg-[var(--firstColor)] rounded-2xl p-2.5 text-center text-2xl">{items}</h3>
                            <div className="p-2.5">
                                {clearTodos?.map(item => {

                                    const { todo_id, content } = item;
                                    return item.status.toLowerCase() === items.toLowerCase() ? (
                                        <div key={todo_id} data-id={todo_id} className="mb-2.5 bg-[var(--firstColor)] rounded-xl flex flex-col p-2">
                                            <h4 className="px-2 text-xl text-[var(--secondColor)]">{content}</h4>
                                            <span>+</span>
                                        </div>
                                    ) : ""
                                })
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}



{/*  */ }