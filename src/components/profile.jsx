import profileData from "../data/profileData";

function Profile() {
    return (
        <div className="sm:w-5/6 sm:h-5/6 overflow-y-auto mt-auto md:mt-0">
            <dl className="sm:border-8 border-gray-50 sm:rounded-lg">
                {Object.keys(profileData).map((key, index) => (
                    <div
                        key={index}
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
                            {key === "氏名" && (
                                <div className="flex flex-wrap justify-start">
                                    <div className="w-6/12 sm:w-4/12 px-4">
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/" +
                                                "ZvE449RD_400x400.jpeg"
                                            }
                                            alt="..."
                                            className="shadow rounded-full max-w-full h-auto align-middle border-none"
                                        />
                                    </div>
                                </div>
                            )}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export default Profile;
