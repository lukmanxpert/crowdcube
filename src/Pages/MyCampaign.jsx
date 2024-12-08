import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyCampaign = () => {
    const { user } = useContext(AuthContext)
    const { email } = user
    const [myCampaigns, setMyCampaigns] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/myCampaigns/${email}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setMyCampaigns(data))
            .then(err => console.log("ERROR", err))
    }, [])
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE"
        })
        .then(res=>console.log(res))
        .catch(err=>console.log("ERROR", err))
    }
    if (!myCampaigns) {
        return <div className='h-60 flex justify-center items-center'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
                My Campaigns
            </h1>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                                Title
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                                Type
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                                Minimum Donation
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                                Deadline
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {myCampaigns.map((campaign) => (
                            <tr key={campaign._id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">
                                    {campaign.title}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {campaign.type}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    ${campaign.minimumDonation}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {campaign.deadline}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <div className="flex justify-center gap-2">
                                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                            Update
                                        </button>
                                        <button onClick={() => handleDelete(campaign._id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;