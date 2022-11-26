import React from 'react';

const Blog = () => {
    return (
        <>
        <div className="carousel w-full ">
            <div id="item1" className="carousel-item w-full">
                <div>
                    <div className='text-5xl font-bold'>
                        <h2>What is cors?</h2>
                    </div>
                    <div className='mx-16 mt-8'>
                        <p>
                            Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request. It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests.The specification for CORS is included as part of the WHATWG's Fetch Living Standard. This specification describes how CORS is currently implemented in browsers. An earlier specification was published as a W3C Recommendation.
                        </p>
                    </div>
                </div>

            </div>
            <div id="item2" className="carousel-item w-full">
                <div>
                    <div className='text-4xl font-bold'>
                        <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    </div>
                    <div className='mx-16 mt-8'>
                        <p>
                            Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                        </p>
                    </div>
                </div>
            </div>
            <div id="item3" className="carousel-item w-full">
                <div>
                    <div className='text-5xl font-bold'>
                        <h2>How does the private route work?</h2>
                    </div>
                    <div className='mx-16 mt-8'>
                        <p>
                            As you can see in the above code, The Public route component receives 3 props like children, isAuthenticated and …rest . If the user is authenticated, He will be redirected to the Home screen and he can only access the public routes if he is not authenticated(Logged in). Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login. The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login. In this article, we can see. How to create public and private routes using react-router for your react apps.
                        </p>
                    </div>
                </div>
            </div>
            <div id="item4" className="carousel-item w-full">
                <div>
                    <div className='text-5xl font-bold'>
                        <h2>What is Node? How does Node work?</h2>
                    </div>
                    <div className='mx-16 mt-8'>
                        <p>
                            Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Node.js basically works on two concept: 1. Asynchronous 2.Non-blocking I/O
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
            <a href="#item4" className="btn btn-xs">4</a>
        </div>
    </>
    );
};

export default Blog;