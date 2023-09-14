import profile_pic from '../../assets/images/profile.jpg'
import logo from '../../assets/images/Knowladge-Cafe-Logo.gif'

const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 border-b-2 max-w-6xl mx-auto'>
             <h1 className='text-lg text-left  text-gray-900 font-black w-28'><img src={logo} alt="" /></h1>
             <img className='w-20' src={profile_pic} alt="" />
        </header>
    );
};

export default Header;