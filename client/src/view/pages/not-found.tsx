
const NotFound = () => {
    return (
        <div className=' h-[38.16rem] bg-white flex flex-col justify-center items-center mx-auto'>
            <img src="../../../public/images/error-desktop-v1.jpg" alt="" />
            <h1 className=' max-w-[48rem] text-[2rem] text-center font-extrabold font-serif leading-10 text-slate-950'>We can’t find the page you’re <br /> looking for</h1>
            <h2 className=' text-[1.1rem] mt-2'>Visit our <span className=' underline text hover:text-Udemyblue-500 cursor-pointer text-Udemyblue-300'>support page</span> for further assistance.</h2>
        </div>
    )
}

export default NotFound