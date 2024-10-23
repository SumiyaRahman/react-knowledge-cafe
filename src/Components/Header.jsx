import profile from '../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>Knowledge cafe</h1>
            <img className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]' src={profile} alt="" />
        </header>
    );
};

export default Header;