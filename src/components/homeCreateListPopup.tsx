// 'use client'

// import React, { useState } from 'react'


// export default function HomeCreateListPopup() {
//     const { createListPopup, setCreateListPopup } = useGlobal()
//     const [listName, setListName] = useState("")
//     const [listNameErr, setListNameErr] = useState(false)
//     const inputChangeHandle = (e: string) => {
//         setListName(e)
//         setListNameErr(false)
//     }

//     const startHandle = () => {
//         listName ? setCreateListPopup(!createListPopup) : setListNameErr(true)
//     }

//     return (<>
//         {createListPopup ? <div className='fixed w-full h-full top-0 left-0 z-20 bg-[var(--curtain)]'>
//             <div className='relative h-full'>
//                 <div className='absolute top-1/2 left-1/2 w-1/2 bg-[var(--firstColor)] -translate-x-1/2 -translate-y-1/2 p-10'>

//                     <div className='relative w-0 h-0'>
//                         <span
//                             onClick={() => setCreateListPopup(!createListPopup)}
//                             className='cursor-pointer select-none absolute top-0 left-0 leading-8 px-1 text-[32px] bg-[var(--secondColor)] text-[var(--firstColor)] rounded-full rotate-45'>+</span>
//                     </div>

//                     <div className='flex flex-col gap-6'>
//                         <h2 className='text-center text-2xl'>Create List</h2>

//                         {/* input and empty error */}
//                         <div className='relative py-4'>
//                             <input
//                                 onChange={(e) => inputChangeHandle(e.target.value)}
//                                 type="text"
//                                 placeholder='create list name'
//                                 className='focus-visible:border-none focus-visible:outline-none'
//                             />

//                             {listNameErr ? <span className='absolute text-xs bg-[var(--fence)] text-[var(--firstColor)] top-[calc(100%-16px)] left-0'>You can't keep it empty</span> : ""}
//                         </div>

//                         <button
//                             onClick={startHandle}
//                             className='inline-block m-auto text-xl transition-all drop-shadow-fuchsia-300 border-2 border-t-transparent border-l-transparent border-r-transparent border-b-[var(--secondColor)] hover:border-[var(--secondColor)]'>start</button>
//                     </div>
//                 </div>
//             </div>
//         </div> : ""}
//     </>
//     )
// }
