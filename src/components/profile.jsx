import profileData from "../data/profileData";

function Profile() {
    return (
        <div className="sm:w-5/6 sm:h-5/6 overflow-y-auto mt-auto md:mt-0">
            <dl className="sm:border-8 border-gray-50 sm:rounded-lg">
                {Object.keys(profileData).map((key, index) => (
                    <div
                        className={
                            (index % 2 === 0 ? "bg-gray-50" : "bg-white") +
                            " px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
                        }
                    >
                        <dt className="text-sm font-medium text-gray-500">
                            {key}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3 whitespace-pre-line">
                            {profileData[key].replaceAll("\\n", "\n")}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export default Profile;
