import profile_pic from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-40 border-b-2'>
             <h1 className='text-lg  text-gray-900 font-black'>Knowledge Cafe</h1>
             <img src={profile_pic} alt="" />
        </div>
    );
};

export default Header;