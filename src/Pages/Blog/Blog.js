import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="carousel w-9/12 mx-auto ">
                <div id="item1" className="carousel-item w-full">
                    <div>
                        <div className='text-5xl font-bold text-center'>
                            <h2>What are the different ways to manage a state in a React application?</h2>
                        </div>
                        <div className='mx-16 mt-8'>
                            <p>
                                In modern React, we build our applications with functional components. Components are themselves JavaScript functions, independent and reusable bits of code.

                                The purpose of building the application with components is to have a modular architecture, with a clear separation of concerns. This makes code easier to understand, easier to maintain, and easier to reuse when possible.

                                The state is an object that holds information about a certain component. Plain JavaScript functions don't have the ability to store information. The code within them executes and "dissapears" once the execution is finished.
                            </p>
                        </div>
                    </div>

                </div>
                <div id="item2" className="carousel-item w-full">
                    <div>
                        <div className='text-5xl font-bold text-center'>
                            <h2>How does prototypical inheritance work?</h2>
                        </div>
                        <div className='mx-16 mt-8'>
                            <p>
                                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div>
                        <div className='text-5xl font-bold text-center'>
                            <h2>What is a unit test? Why should we write unit tests?</h2>
                        </div>
                        <div className='mx-16 mt-8'>
                            <p>
                                The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div>
                        <div className='text-5xl font-bold text-center'>
                            <h2>React vs. Angular vs. Vue?</h2>
                        </div>
                        <div className='mx-16 mt-8'>
                            <p>
                                This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.

                                Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we've seen a growth of interest in a third player called Vue.js.

                                If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.
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