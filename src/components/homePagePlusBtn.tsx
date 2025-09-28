"use client"
import { changePopupStatus } from "@/store/slices/addListPopupSlice"
import { RootState } from "@/store/store"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function HomePagePlusBtn() {
    const [openPlus, setOpenPlus] = useState(false)
    const dispatch = useDispatch()
    const popupStatus = useSelector((state: RootState) => state.addList.value)

    const createListPopupHandler = () => {
        setOpenPlus(!openPlus)
        dispatch(changePopupStatus(!popupStatus))
    }

    return (
        <div className="relative">

            {/* pulus icon for open creating list */}
            <div
                onClick={() => setOpenPlus(!openPlus)}
                title="plus icon"
                className={`absolute z-10 top-0 left-0 text-[var(--firstColor)] bg-[var(--secondColor)]  w-14 h-14 text-center text-[56px] leading-[56px] rounded-full select-none cursor-pointer transition-all duration-300 ${openPlus ? "rotate-[225deg]" : ""}`}>+</div>

            {/* creating list */}
            {openPlus ? <ul
                title="creating list"
                className="absolute z-10 left-16 min-h-14 p-2 bg-[var(--firstColor)] rounded-sm flex flex-col justify-center">
                <li className="text-[var(--secondColor)] cursor-pointer">
                    <button onClick={createListPopupHandler} className="cursor-pointer">Create List</button>
                </li>
            </ul>
                : ""
            }
        </div>
    )
}
