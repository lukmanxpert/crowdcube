import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const AllCampaign = () => {
    const campaigns = useLoaderData();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className='h-60 flex justify-center items-center'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                campaigns?.map(campaign => <div
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
                </div>)
            }
        </div>
    );
};

export default AllCampaign;