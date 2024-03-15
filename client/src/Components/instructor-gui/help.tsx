import { HelpCircle, MessageSquareText, User } from 'lucide-react'

const Help = () => {
    
  return (
    <div className=' w-screen h-screen flex flex-col items-start justify-between'>
        <div className=' h-fit min-h-96 mx-auto mt-[5rem] w-[74%] flex flex-col items-start justify-start'>
            <div className=' flex flex-col items-start justify-start h-fit w-full'>
                <h1 className=' text-[2.1rem] text-slate-900 font-bold mb-8'>Resources</h1>
                <div className=' flex flex-row justify-around items-center w-full h-fit gap-8'>
                    <a className=' flex-1 h-[14rem] border border-Udemygray-200 flex flex-col items-center justify-start p-4 hover:bg-Udemygray-200' href="https://teach.udemy.com/">
                        <User size="45px" className=' my-5'/>
                        <h1 className=' font-bold text-[1.02rem]'>Teaching Center</h1>
                        <h2 className=' text-center text-[0.9rem] w-[44ch] mt-4'>Find articles on Udemy teaching — from course creation to marketing.</h2>
                    </a>
                    <a className=' flex-1 h-[14rem] border border-Udemygray-200 flex flex-col items-center justify-start p-4 hover:bg-Udemygray-200' href="https://community.udemy.com/">
                    <MessageSquareText size="45px" className=' my-5'/>
                        <h1 className=' font-bold text-[1.02rem]'>Instructor Community</h1>
                        <h2 className=' text-center text-[0.9rem] w-[44ch] mt-4'>Share your progress and ask other instructors questions in our community.</h2>
                    </a>
                    <a className=' flex-1 h-[14rem] border border-Udemygray-200 flex flex-col items-center justify-start p-4 hover:bg-Udemygray-200' href="https://www.udemy.com/support?type=instructor">
                    <HelpCircle size="45px" className=' my-5'/>
                        <h1 className=' font-bold text-[1.02rem]'>Help and Support</h1>
                        <h2 className=' text-center text-[0.9rem] w-[44ch] mt-4'>Can’t find what you need? Our support team is happy to help.</h2>
                    </a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Help
