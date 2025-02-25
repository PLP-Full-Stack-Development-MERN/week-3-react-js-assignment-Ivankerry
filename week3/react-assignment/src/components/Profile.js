import React from 'react';

const Profile = ({ name, email }) => {
    return (
        <div className="p-4 border rounded shadow-md">
            <h2 className="text-xl font-bold">Profile</h2>
            <p className="mt-2"><strong>Name:</strong> {name}</p>
            <p className="mt-1"><strong>Email:</strong> {email}</p>
        </div>
    );
};

export default Profile;