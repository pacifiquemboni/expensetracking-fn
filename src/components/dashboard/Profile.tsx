import bssmn from '../../assets/bssman.svg'
export default function Profile() {
    return (
        <div className="container w-full lg:w-1/3 mx-auto p-4">
            <div className="bg-white p-6 rounded-lg  flex items-center">
                {/* Left Section - Profile Image */}
                <div className="w-1/3 flex justify-center">
                    <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center">
                        <img
                            src={bssmn}
                            alt="Profile"
                            className="rounded-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Section - Details */}
                <div className="w-2/3 ml-6">
                    <p className="text-xl font-semibold text-gray-700">Good Morning,</p>
                    <h1 className="text-2xl font-bold text-gray-800">Sophie Campbell</h1>
                    <p className="text-sm text-gray-500">22 August, Thursday</p>

                    <div className="mt-4">
                        <p className="text-gray-600">
                            <span className="font-semibold">Month:</span> August ✅
                        </p>

                        

                        <div className="mt-4">
                            <p className="text-sm text-gray-600">
                                Remaining Days:
                            </p>
                            <ul className="text-sm text-gray-500">
                                <li>05 Weekdays</li>
                                <li>04 Weekends & Holidays</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
