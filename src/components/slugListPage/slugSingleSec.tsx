'use client'

import { useGlobal } from '@/context/context'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function SlugSingleSec() {

    const { todos, todosLoading, fetchTodos } = useGlobal()
    const slug: any = useParams()

    // const cleanTodos = todos

    // console.log(cleanTodos[0].status)

    // const will = cleanTodos.filter((e: any) => e.)s

    useEffect(() => {
        fetchTodos(slug.slug);
    }, [])

    return (
        <section>
            <div className='custom-container'>
                {todosLoading ? <p className='text-center text-[var(--firstColor)] pt-16'>
                    Loading...
                </p> : ""}
            </div>
        </section>
    )
}
