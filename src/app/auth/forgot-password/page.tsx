import React from "react";

const ForgotPassword = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800 dark:text-white">
          Forgot Password
        </h2>
        <p className="mb-6 text-sm text-center text-gray-600 dark:text-gray-400">
          Enter your email address below and we’ll send you instructions to reset your password.
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm font-medium text-blue-500 hover:underline dark:text-blue-400"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

