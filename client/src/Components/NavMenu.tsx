import { useNavigate } from 'react-router-dom';
import { categoriesNavBar } from '../util/categories';


const NavMenu = () => {
    const navigate = useNavigate();

  return (
    <div className="h-[3.3rem] w-full bg-white px-12 flex flex-row justify-center items-center shadow-lg z-20">
        <div className='h-full w-fit flex flex-row justify-center items-center '>
        {categoriesNavBar.map((categorie) => (
      <div
        key={categorie}
        className="px-4 "
        onClick={() =>
          navigate(`/categoryPage?category=${categorie}`)
        }
        
      >
        <div className='cursor-pointer text-sm text-slate-800 font-[400] hover:text-Udemyblue-400'>{categorie}</div>
        
      </div>
    ))}        </div>
    
  </div>
  );
};

export default NavMenu;