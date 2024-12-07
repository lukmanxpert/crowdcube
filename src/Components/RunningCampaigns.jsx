import React, { useEffect, useState } from 'react';

const RunningCampaigns = () => {
    const [campaigns, setCampaigns] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/campaigns')
            .then(res => res.json())
            .then(data => {
                setCampaigns(data)
                setLoading(false)
            })
    }, [])
    return (
        <section className="running-campaigns py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Running Campaigns
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        loading && <div className='min-h-40 grid place-items-center w-full'><span className="loading loading-bars loading-lg"></span></div>
                    }
                    {campaigns?.map((campaign) => (
                        <div
                            key={campaign._id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image */}
                            <img
                                src={campaign.image}
                                alt={campaign.title}
                                className="w-full h-48 object-cover"
                            />
                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {campaign.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {campaign.description.slice(0, 100)}...
                                </p>
                                <p className="text-sm text-gray-500 mb-2">
                                    Minimum Donation: <span className="font-semibold">${campaign.minimumDonation}</span>
                                </p>
                                <p className="text-sm text-gray-500 mb-4">
                                    Deadline: <span className="font-semibold">{campaign.deadline}</span>
                                </p>
                                {/* See More Button */}
                                <button
                                    onClick={() => window.location.href = `/campaign/${campaign.id}`}
                                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                                >
                                    See More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RunningCampaigns;