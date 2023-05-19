import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import img1 from '../../../assets/login.svg'
const Blog = () => {
    return (
        <div className='bg-base-200'>
            <Banner></Banner>
            <div className='my-container'>
                <p className='text-3xl font-semibold text-center mt-4'>Ask Something New!</p>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                        <img src={img1} className=" rounded-lg shadow-2xl" />
                        <div className='card w-full shadow-2xl bg-base-100'>
                            <div className="card-body space-y-4">
                                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                    <div className="collapse-title text-lg font-medium">
                                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                                    </div>
                                    <div className="collapse-content">
                                        <p>Access tokens are typically included in the authorization header of API requests. They should be stored in memory (RAM) rather than being persisted on the client-side, as storing them in local storage or cookies can expose them to cross-site scripting (XSS) attacks.On the other hand Refresh tokens are long-lived and should be securely stored on the client-side. They are usually stored in a secure HTTP-only cookie, which helps protect them from cross-site scripting (XSS) attacks. Cookies with the "HTTP-only" attribute can only be accessed by the server, making them a secure option for storing refresh tokens.It's important to note that storing tokens securely is crucial to prevent unauthorized access.</p>
                                    </div>
                                </div>
                                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                    <div className="collapse-title text-lg font-medium">
                                        Compare SQL and NoSQL databases?
                                    </div>
                                    <div className="collapse-content">
                                        <p> SQL and NoSQL databases depends on the specific requirements of application.QL databases follow a structured, tabular data model called a relational model. Data is organized into tables with predefined schemas.SQL databases traditionally scale vertically, meaning they are designed to handle increased workload by upgrading hardware on a single server.SQL databases use a standardized query language (SQL) for defining and manipulating data. SQL offers a rich set of operations, including filtering, sorting, joining, and aggregating data, making it suitable for complex querying and data analysis.SQL databases are often used in applications that require structured data and complex querying. On the other hand NoSQL databases use various data models, such as key-value pairs, documents, columnar, and graphs.NoSQL databases are schema-less or have flexible schema models.oSQL databases are designed to scale horizontally, allowing easy distribution of data across multiple servers.NoSQL databases often have their own query languages specific to the data model.NoSQL databases are suitable for applications with rapidly changing requirements, large-scale data storage, and high scalability needs</p>
                                    </div>
                                </div>
                                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                    <div className="collapse-title text-lg font-medium">
                                        What is express js? What is Nest JS?
                                    </div>
                                    <div className="collapse-content">
                                        <p>Express.js and Nest.js are both web application frameworks for Node.js, but they differ in terms of their architectural style and approach.Express.js is a minimalist and flexible web application framework for Node.js. It provides a simple and straightforward API for building web applications and APIs. Express.js is a lightweight framework that provides only the essential features.Express.js uses middleware functions that can be used to perform various tasks, such as request parsing, authentication, logging, error handling, etc. And Nest.js is a progressive and opinionated web application framework for Node.js. It is built with TypeScript and leverages decorators, modules, and dependency injection to provide a modular and scalable architecture inspired by Angular.Nest.js encourages modular development by organizing the application into modules.Nest.js provides a structured and scalable framework that is well-suited for building large-scale applications, APIs, microservices, and server-side rendering (SSR) applications.</p>
                                    </div>
                                </div>
                                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                    <div className="collapse-title text-lg font-medium">
                                        What is MongoDB aggregate and how does it work?
                                    </div>
                                    <div className="collapse-content">
                                        <p>MongoDB, the aggregate method is a powerful feature that allows you to perform advanced data processing and analysis operations on the documents stored in a collection. The aggregate method works by combining multiple stages of operations to transform and manipulate the data.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;