import portfolioData from "../data/portfolioData";

function Portfolio() {
    return (
        <div className="sm:w-5/6 sm:h-5/6 overflow-y-auto mt-auto md:mt-0">
            <div className="sm:grid sm:grid-cols-2 sm:gap-10">
                {portfolioData.map((p) => (
                    <div
                        key={p.title}
                        className="p-4 mt-6 sm:mt-0 sm:border-8 border-indigo-200 bg-indigo-200 sm:rounded-lg whitespace-normal"
                    >
                        <a href={p.url} rel="noreferrer" target="_blank">
                            <img
                                src={
                                    process.env.PUBLIC_URL + "/assets/" + p.img
                                }
                                alt="Prev"
                            />
                        </a>
                        <div className="mt-1 break-words text-sm text-gray-900 ">
                            <b>{p.title}</b>
                            <br />
                            {p.detail}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
