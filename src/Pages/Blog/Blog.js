import React from 'react';

const Blog = () => {
    return (
        <div className='blog'>
            <h1 className='text-5xl text-center text-sky-700'>Difference between SQL and NoSQL</h1>
            <h3 className='text-xl text-center text-white'>When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision.
                Here, we break down the most important distinctions and discuss the best SQL and NoSQL database systems available.

                The five critical differences between SQL vs NoSQL are:
                SQL databases are relational, NoSQL databases are non-relational.
                SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
            </h3>
            <h1 className='text-5xl text-center text-sky-700'>What is JWT, and how does it work?</h1>
            <h3 className='text-xl text-center text-white'>JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token’s issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token. <br />
                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key. </h3>

            <h1 className='text-5xl text-center text-sky-700'>What is the difference between javascript and NodeJS?</h1>
            <h3 className='text-xl text-center text-white'>
                NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br />

                Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </h3>
            <h1 className='text-5xl text-center text-sky-700'>How does NodeJS handle multiple requests at the same time?</h1>
            <h3 className='text-xl text-center text-white'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</h3>
        </div>
    );
};

export default Blog;