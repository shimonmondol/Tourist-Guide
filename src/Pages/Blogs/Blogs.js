import React from 'react';

const Blogs = () => {
    return (
        <div className='ms-auto pb-5 ps-5 pt-5 pe-5'>
            <h2 className='pb-4'>Q.1. Difference between authorization and authentication?</h2>
            <h3>Answer: Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.</h3>

            <h2 className='pt-5 pb-4'>Q.2. Why are you using firebase? What other options do you have to implement authentication?</h2>
            <h3>Answer: Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            </h3>

            <h2 className='pt-5 pb-4'>Q.3. What other services does firebase provide other than authentication?</h2>
            <h3>Answer: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</h3>
        </div>
    );
};

export default Blogs;