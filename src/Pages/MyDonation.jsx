import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyDonation = () => {
    const { user } = useContext(AuthContext)
    const [myDonations, setMyDonations] = useState([])
    const donations = myDonations.filter(items => items.email === user.email)
    console.log(donations);
    useEffect(() => {
        fetch('https://crowdcubee.vercel.app/donateCollection', {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setMyDonations(data))
            .catch(err => console.log("ERROR", err))
    }, [])
    console.log(myDonations);
    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
                My Donations
            </h1>

            {/* Check if donations array is empty */}
            {donations.length === 0 ? (
                <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-600 mb-4">
                        You haven't donated to any campaigns yet.
                    </h2>
                    <p className="text-gray-500">
                        Once you donate, your donations will appear here.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {donations.map((donation) => (
                        <div
                            key={donation._id}
                            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                {donation.campaignTitle}
                            </h2>
                            <p className="text-gray-600 mb-2">
                                <span className="font-semibold">Donor:</span> {donation.name}
                            </p>
                            <p className="text-gray-600 mb-4">
                                <span className="font-semibold">Email:</span> {donation.email}
                            </p>
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                                View Campaign
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyDonation;