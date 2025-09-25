'use client'
import { fetchTodos } from "@/store/slices/todosSlice"
import { AppDispatch, RootState } from "@/store/store"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function SlugSingleSec() {
    const { todos, loading, error } = useSelector((state: RootState) => state.todos)
    const dispatch = useDispatch<AppDispatch>()
    const params: any = useParams()
    const param: any = params.slug

    useEffect(() => {
        console.log(todos[0])
        dispatch(fetchTodos(param))
    }, [dispatch])

    return (
        <section>
            <div className='custom-container'>
                {loading ? <p className='text-center text-[var(--firstColor)] pt-16'>
                    Loading...
                </p> : ""
                    // todos[0].todos?.map(item => {
                    //     const { todo_id, content, status, create_date, start_date, finish_date } = todos;
                    //     return (
                    //         <div>

                    //         </div>
                    //     )
                    // })
                }
            </div>
        </section>
    )
}
