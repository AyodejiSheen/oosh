import { ActiveChats } from '../dashboard/activeChats'



import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


export const ChatSection = (props) => {

    let {name} = props;

    const [chatOpt, setchatOpt] = useState(false);


    const showchatOpt = () => {
        setchatOpt(!chatOpt);
    }




    return (
        <>
            <section>
                <div className="flex gap-2 justify-between items-center border-b pb-4">
                    <div className="flex gap-4 items-center justify-center">
                        <div><img src={img9} alt="image" className='rounded-full' /></div>
                        <div>
                            <h1 className='text-2xl font-bold'>{name} Adedamola</h1>
                            <div className='flex gap-2 items-start font-medium'>
                                <p>Active now</p>
                                <div><i class="fa-solid fa-circle text-green-500 text-[5px]"></i></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 text-slate-500'>
                        <div><i class="fa-solid fa-phone"></i></div>
                        <div><i class="fa-solid fa-video"></i></div>
                        <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                    </div>
                </div>
                <div className='my-3'>
                    <p className='text-lg font-medium text-center'>March 06, 2022</p>
                </div>
            </section>


            <div className='overflow-y-scroll h-[80%] space-y-6 w-full py-5'>
                <div className='flex items-center relative'>
                    <div className='flex items-start space-x-4'>
                        <div className='flex items-end -space-x-3'>
                            <img src={img9} alt="image" className='rounded-full w-12' />
                            <div><i class="fa-solid fa-circle text-green-500 text-xs"></i></div>
                        </div>
                        <div className='space-y-1.5'>
                            <div className='bg-orange-600 text-white xl:w-[500px] rounded-tl-xl rounded-tr-xl rounded-br-xl p-5'>
                                <p>Hello! Welcome on zue world. Just drop
                                    me a line here if you have any questions
                                    about our service.</p>
                            </div>
                            <p className='text-sm font-semibold text-slate-500'>10hrs</p>
                        </div>
                    </div>
                    <div>
                        <button className="" onClick={showchatOpt}>
                            <i className="fa-solid fa-ellipsis text-orange-600 font-bold px-5 py-2"></i>
                        </button>
                        {
                            chatOpt && (

                                <div className='absolute shadow bg-white shadow-slate-400 rounded-lg py-4 top-5 ml-2  md:px-6 2xl:px-4'>
                                    <div className='px-5 py-2' onClick={showchatOpt}><button>Reply</button></div>
                                    <div className='px-5 py-2'><button>Forward</button></div>
                                    <div className='px-5 py-2'><button>Delete</button></div>
                                </div>
                            )
                        }
                    </div>

                </div>

                <div className='flex items-center justify-end'>
                    <div>
                        <button className="">
                            <i className="fa-solid fa-ellipsis text-black font-bold px-5 py-2"></i>
                        </button>
                    </div>

                    <div className='flex items-end space-x-4'>
                        <div className='space-y-1.5'>
                            <div className='bg-slate-100 text-black xl:w-[500px] rounded-tl-xl rounded-tr-xl rounded-br-xl p-5'>
                                <p>Hello! Welcome on zue world. Just drop
                                    me a line here if you have any questions
                                    about our service.</p>
                            </div>
                            <p className='text-sm font-semibold text-slate-500'>10hrs</p>
                        </div>
                        <div className='flex items-end -space-x-3'>
                            <img src={img8} alt="image" className='rounded-full w-12' />
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-end'>
                    <div>
                        <button className="">
                            <i className="fa-solid fa-ellipsis text-black font-bold px-5 py-2"></i>
                        </button>
                    </div>

                    <div className='flex items-end space-x-4'>
                        <div className='space-y-1.5'>
                            <div className='bg-slate-100 text-black xl:w-[500px] rounded-tl-xl rounded-tr-xl rounded-br-xl p-5'>
                                <p>Hello! Welcome on zue world. Just drop
                                    me a line here if you have any questions
                                    about our service.</p>
                            </div>
                            <p className='text-sm font-semibold text-slate-500'>10hrs</p>
                        </div>
                        <div className='flex items-end -space-x-3'>
                            <img src={img8} alt="image" className='rounded-full w-12' />
                        </div>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='flex items-start space-x-4'>
                        <div className='flex items-end -space-x-3'>
                            <img src={img9} alt="image" className='rounded-full w-12' />
                            <div><i class="fa-solid fa-circle text-green-500 text-xs"></i></div>
                        </div>
                        <div className='space-y-1.5'>
                            <div className='bg-orange-600 text-white xl:w-[500px] rounded-tl-xl rounded-tr-xl rounded-br-xl p-5'>
                                <p>Hello! Welcome on zue world. Just drop
                                    me a line here if you have any questions
                                    about our service.</p>
                            </div>
                            <p className='text-sm font-semibold text-slate-500'>10hrs</p>
                        </div>
                    </div>
                    <div>
                        <button className="">
                            <i className="fa-solid fa-ellipsis text-orange-600 font-bold px-5 py-2"></i>
                        </button>
                    </div>
                </div>

                <div className='flex items-center justify-end'>
                    <div>
                        <button className="">
                            <i className="fa-solid fa-ellipsis text-black font-bold px-5 py-2"></i>
                        </button>
                    </div>

                    <div className='flex items-end space-x-4'>
                        <div className='space-y-1.5'>
                            <div className='bg-slate-100 text-black xl:w-[500px] rounded-tl-xl rounded-tr-xl rounded-br-xl p-5'>
                                <p>Hello! Welcome on zue world. Just drop
                                    me a line here if you have any questions
                                    about our service.</p>
                            </div>
                            <p className='text-sm font-semibold text-slate-500'>10hrs</p>
                        </div>
                        <div className='flex items-end -space-x-3'>
                            <img src={img8} alt="image" className='rounded-full w-12' />
                        </div>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='flex items-start space-x-4'>
                        <div className='flex items-end -space-x-3'>
                            <img src={img9} alt="image" className='rounded-full w-12' />
                            <div><i class="fa-solid fa-circle text-green-500 text-xs"></i></div>
                        </div>
                        <div className='space-y-1.5'>
                            <div className='bg-orange-600 text-white xl:w-[500px] rounded-tl-xl rounded-tr-xl rounded-br-xl p-5'>
                                <p>Hello! Welcome on zue world. Just drop
                                    me a line here if you have any questions
                                    about our service.</p>
                            </div>
                            <p className='text-sm font-semibold text-slate-500'>10hrs</p>
                        </div>
                    </div>
                    <div>
                        <button className="">
                            <i className="fa-solid fa-ellipsis text-orange-600 font-bold px-5 py-2"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-0 w-[93%] xl:w-full xl:pr-12 my-3 xl:mb-0'>
                <div className="flex gap-x-3 items-center justify-between">
                    <div className='flex-1'>
                        <div className="flex justify-center flex-1 items-center">
                            <div className="relative w-full focus-within:text-orange-600 ">
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                        <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                                        <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                        <path fill-rule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm9 4.5a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5zm1.5 0a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H16.5v2.25H18a.75.75 0 010 1.5h-1.5v3a.75.75 0 01-1.5 0v-7.5zM6.636 9.78c.404-.575.867-.78 1.25-.78s.846.205 1.25.78a.75.75 0 001.228-.863C9.738 8.027 8.853 7.5 7.886 7.5c-.966 0-1.852.527-2.478 1.417-.62.882-.908 2-.908 3.083 0 1.083.288 2.201.909 3.083.625.89 1.51 1.417 2.477 1.417.967 0 1.852-.527 2.478-1.417a.75.75 0 00.136-.431V12a.75.75 0 00-.75-.75h-1.5a.75.75 0 000 1.5H9v1.648c-.37.44-.774.602-1.114.602-.383 0-.846-.205-1.25-.78C6.226 13.638 6 12.837 6 12c0-.837.226-1.638.636-2.22z" clip-rule="evenodd" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clip-rule="evenodd" />
                                    </svg>

                                </div>
                                <input className="w-full pl-3 py-3 pr-20 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:focus:shadow-outline-gray  focus:placeholder-gray-500 focus:bg-white focus:border-orange-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Type something..." aria-label="Search" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-orange-600 w-5 h-5">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                    </div>
                </div>
            </div>

        </>
    )
}