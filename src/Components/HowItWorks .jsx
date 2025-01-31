import { Link } from "react-router-dom";

const HowItWorks = () => {
    return (
        <section className="how-it-works py-10 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 dark:text-gray-100">
                    How It Works
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="step-card bg-white shadow-lg rounded-lg p-6 text-center dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-100">Step 1: Create a Campaign</h3>
                        <p className="text-gray-600 mb-4 dark:text-gray-300">
                            Start your journey by creating a campaign and share your cause with others.
                        </p>
                        <Link to='/add-campaign' className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Start a Campaign
                        </Link>
                    </div>
                    <div className="step-card bg-white shadow-lg rounded-lg p-6 text-center dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-100">Step 2: Donate to a Campaign</h3>
                        <p className="text-gray-600 mb-4 dark:text-gray-300">
                            Find a campaign that resonates with you and contribute to help make it a reality.
                        </p>
                        <Link to='/all-campaign' className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Donate Now
                        </Link>
                    </div>
                    <div className="step-card bg-white shadow-lg rounded-lg p-6 text-center dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-100">Step 3: Track Your Donations</h3>
                        <p className="text-gray-600 mb-4 dark:text-gray-300">
                            Keep track of how your donations are helping to bring positive change.
                        </p>
                        <Link to='/my-donation' className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            View Your Donations
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HowItWorks