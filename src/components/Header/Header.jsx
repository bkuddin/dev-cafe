import profile_pic from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 border-b-2 max-w-6xl mx-auto'>
             <h1 className='text-lg text-left  text-gray-900 font-black'>Knowledge Cafe</h1>
             <img src={profile_pic} alt="" />
        </header>
    );
};

export default Header;