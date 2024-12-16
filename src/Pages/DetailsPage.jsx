import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const DetailsPage = () => {
    const [campaign, setCampaign] = useState(null);
    const { user } = useContext(AuthContext);
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        fetch(`https://crowdcubee.vercel.app/campaigns/${id}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setCampaign(data))
            .catch(err => console.log(err))
    }, []);
    const handleDonate = () => {
        const email = user.email;
        const name = user.displayName || "anonymous"
        const campaignId = campaign._id
        const campaignTitle = campaign.title
        const donateData = { name, email, campaignId, campaignTitle }
        fetch('https://crowdcubee.vercel.app/donatedCollection', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(donateData)
        })
            .then(res => {
                toast.success("Successfully Donated")
            })
            .catch(err => {
                console.log("ERROR", err);
            })
    }
    if (!campaign) {
        return <div className='h-60 flex justify-center items-center'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div className="container mx-auto py-10 px-4">
            <div className="relative mb-6">
                <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-56 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 left-4 bg-indigo-600 text-white text-sm px-4 py-1 rounded">
                    Deadline: {campaign.deadline}
                </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">{campaign.title}</h1>
                <p className="text-gray-700 mb-6">{campaign.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-lg md:text-xl font-semibold mb-2">Type</h2>
                        <p className="text-gray-600">{campaign.type}</p>

                        <h2 className="text-lg md:text-xl font-semibold mt-4 mb-2">
                            Minimum Donation
                        </h2>
                        <p className="text-gray-600">${campaign.minimumDonation}</p>
                    </div>
                    <div>
                        <h2 className="text-lg md:text-xl font-semibold mb-2">Creator</h2>
                        <p className="text-gray-600">{campaign.creator}</p>
                    </div>
                </div>
                <div className="mt-6 flex justify-center md:justify-end">
                    <button onClick={handleDonate} className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        Donate
                    </button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DetailsPage;