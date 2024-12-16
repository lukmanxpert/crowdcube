import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const AddCampaign = () => {
    const { user } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image = form.url.value;
        const type = form.type.value;
        const description = form.description.value;
        const minimumDonation = form.amount.value;
        const deadline = form.deadline.value;
        const username = form.username.value;
        const creator = form.useremail.value;
        const campaign = { title, type, description, image, minimumDonation, deadline, creator }
        fetch('https://crowdcubee.vercel.app/campaigns', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(campaign)
        })
            .then(res => {
                toast.success("Campaign Added")
                form.reset()
            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
            })
    }
    return (
        <div className="container mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Add New Campaign</h2>
            <form
                className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Campaign Title
                    </label>
                    <input
                        type="text"
                        required
                        id="name"
                        name="title"
                        placeholder="Enter campaign title"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                </div>

                
                {/* Campaign image */}
                <div className="mb-4">
                    <label
                        htmlFor="image"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Campaign Image
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="url"
                        required
                        placeholder="Enter image url"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                </div>
                {/* Campaign Type */}
                <div className="mb-4">
                    <label
                        htmlFor="image"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Campaign type
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="type"
                        required
                        placeholder="Enter campaign type"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        placeholder="Enter campaign description"
                        rows="4"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    ></textarea>
                </div>

                {/* Minimum Donation Amount */}
                <div className="mb-4">
                    <label
                        htmlFor="image"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Minimum Donation Amount
                    </label>
                    <input
                        type="number"
                        id="image"
                        required
                        name="amount"
                        placeholder="Min donation amount"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                </div>

                {/* Start Date */}
                <div className="mb-4">
                    <label
                        htmlFor="startDate"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Deadline
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        required
                        name="deadline"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                </div>

                {/* User Email */}
                <div className="mb-4">
                    <label
                        htmlFor="image"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        User Email
                    </label>
                    <input
                        type="email"
                        id="image"
                        required
                        name="useremail"
                        value={user?.email}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                </div>

                {/* User Name */}
                <div className="mb-4">
                    <label
                        htmlFor="image"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        User Name
                    </label>
                    <input
                        type="text"
                        id="image"
                        required
                        name="username"
                        value={user?.displayName || "anonymous"}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
                    >
                        Add Campaign
                    </button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddCampaign;