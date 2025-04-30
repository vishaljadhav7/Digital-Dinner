import { useAppSelector } from "../redux/hooks"


const Profile = () => {
  const user = useAppSelector((store) => store.user.userInfo);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 transform transition-all hover:scale-105">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-800">{user?.name}</h1>
          <p className="text-gray-500 text-sm">User Profile</p>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-gray-600 font-medium w-24">Email:</span>
            <p className="text-gray-800">{user?.email}</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-gray-600 font-medium w-24">Phone:</span>
            <p className="text-gray-800">{user?.phoneNum}</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-gray-600 font-medium w-24">ID:</span>
            <p className="text-gray-800 text-sm">{user?.id}</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Profile;