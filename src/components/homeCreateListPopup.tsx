'use client'

import { changePopupStatus } from '@/store/slices/addListPopupSlice'
import { addTodoList, fetchLists } from '@/store/slices/todosListsSlice'
import { AppDispatch, RootState } from '@/store/store'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'



export default function HomeCreateListPopup() {
    type newTodoList = { list_id: number; list_title: string; slug: string; }

    const [listName, setListName] = useState("")
    const [listNameErr, setListNameErr] = useState(false)
    const popupStatus = useSelector((state: RootState) => state.addList.value)

    const dispatch = useDispatch<AppDispatch>()

    // const { lists } = useSelector((state: RootState) => state.lists)
    // const ids = lists.map(i => i.list_id);
    // const maxId = Math.max(...ids) + 1;
    // const newTodoList = {
    //     list_id: maxId,
    //     list_title: listName,
    //     slug: listName.replace(/\s/g, "-")
    // }

    const inputChangeHandle = (e: string) => {
        setListName(e)
        setListNameErr(false)
    }

    const startHandle = () => {
        listName ? createList() : setListNameErr(true)
    }

    const createList = () => {
        // console.log(newTodoList)
        setListNameErr(false)
        dispatch(changePopupStatus(!popupStatus))
        dispatch(addTodoList());
    }


    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            startHandle()
        } else if (e.key === "w") {
            console.log("Wilma")
        }
    };

    window?.addEventListener("keydown", handleKeyDown)


    return (<>
        {popupStatus ? <div className='fixed w-full h-full top-0 left-0 z-20 bg-[var(--curtain)]'>
            <div className='relative h-full'>
                <div className='absolute top-1/2 left-1/2 w-1/2 bg-[var(--firstColor)] -translate-x-1/2 -translate-y-1/2 p-10'>

                    <div className='relative w-0 h-0'>
                        <span
                            onClick={() => dispatch(changePopupStatus(!popupStatus))}
                            className='cursor-pointer select-none absolute top-0 left-0 leading-8 px-1 text-[32px] bg-[var(--secondColor)] text-[var(--firstColor)] rounded-full rotate-45'>+</span>
                    </div>

                    <div className='flex flex-col gap-6'>
                        <h2 className='text-center text-2xl'>Create List</h2>

                        {/* input and empty error */}
                        <div className='relative py-4'>
                            <input
                                onChange={(e) => inputChangeHandle(e.target.value)}
                                type="text"
                                placeholder='create list name'
                                className='focus-visible:border-none focus-visible:outline-none'
                            />

                            {listNameErr ? <span className='absolute text-xs bg-[var(--fence)] text-[var(--firstColor)] top-[calc(100%-16px)] left-0'>You can't keep it empty</span> : ""}
                        </div>

                        <button
                            onClick={startHandle}
                            className='inline-block m-auto text-xl transition-all drop-shadow-fuchsia-300 border-2 border-t-transparent border-l-transparent border-r-transparent border-b-[var(--secondColor)] hover:border-[var(--secondColor)]'>start</button>
                    </div>
                </div>
            </div>
        </div> : ""}
    </>
    )
}
