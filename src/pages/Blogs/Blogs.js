import React from 'react';

const Blogs = () => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 p-8 m-12">

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">1.How will you improve the performance of a React Application?</h2>
                    <p>When we create a rendered component, React creates a virtual DOM for its element tree in the component. Now, whenever the state of the component changes, React recreates the virtual DOM tree and compares the result with the previous render.

                        It then only updates the changed element in the actual DOM. This process is called diffing.

                        React uses the concept of a virtual DOM to minimize the performance cost of re-rendering a webpage because the actual DOM is expensive to manipulate.

                        This is great because it speeds up the UI render time. However, this concept can also slow down a complex app if it’s not managed very well.</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">2.What are the different ways to manage a state in a React application?</h2>
                    <p>we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.There are four main types of state you need to properly manage in your React apps:

                        1.Local state
                        2.Global state
                        3.Server state
                        4.URL state</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">3.How does prototypical inheritance work?</h2>
                    <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                        Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mt-5">
                <div class="card-body">
                    <h2 class="card-title">4.Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <p>React is a JavaScript library and because JS already has a variety of methods for working with arrays. It makes dealing with arrays simpler although when integrating that with React hooks, you need to use specific methods as state is immutable.

                        We'll be showing simple examples with react 18 but if you need to run the examples, you'll need to create a react project using the create-react-app utility.



                        We spread the previous state passed as an argument and we add our new value to the new array that we return from the setter function. React will use the returned array as the new state. As a consequence, we could add the new value to the state of our react component.


                        As a JavaScript library, React has access to a wide range of array handling capabilities. Array manipulation is simplified, but since state is immutable, specific methods are required when using React hooks.</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mt-5">
                <div class="card-body">
                    <h2 class="card-title">5.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>A product description is the marketing copy that explains what a product is and why it’s worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they’re compelled to buy.

                        However, entrepreneurs and marketers alike are susceptible to a common mistake that comes up when writing product descriptions. Even professional copywriters make it sometimes: writing product descriptions that simply describe your products.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;