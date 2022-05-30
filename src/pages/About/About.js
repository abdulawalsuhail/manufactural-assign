import React from 'react';
import CEO from '../../images/profile/C.E.O-of-AAS Electronics.jpg'
import html from '../../images/icon/html.png'
import css from '../../images/icon/css.png'
import js from '../../images/icon/js.png'
import bootstrap from '../../images/icon/Bootstrap.png'
import node from '../../images/icon/node.png'
import mongodb from '../../images/icon/mongodb.png'
import react from '../../images/icon/react.png'
import tailwind from '../../images/icon/tailwind.png'

const About = () => {
    return (
        <div class="p-12">
            <div class="card lg:card-side bg-base-100 ">
                <figure><img src={CEO} alt="Album" /></figure>
                <div class="card-body lg:mr-96">
                    <h2 class="card-title text-3xl font-bold uppercase text-secondary">Hello....</h2>
                    <p class="text-2xl">I 'Am <span class="text-accent">Abdul Awal Suhail </span>
                        Professional Graphic Designer & Web Developer.
                    </p>
                    <h2 class="text-3xl font-bold uppercase text-accent">Contact Info :</h2>
                    <p>Email : abdullahsuhail4343@gmail.com
                        <br />
                        Phone : +88 014 03858029
                    </p>

                    <div class="card-actions justify-end lg:grid grid-cols-2">

                    </div>
                </div>
            </div>
            <div>
                <div class="hero min-h-screen ">
                    <div class=" grid lg:grid grid-cols-2">
                        <div>
                            <h1 class="text-3xl font-bold text-accent">Education</h1>
                            <p class="py-6"><span>Education Level : </span>
                                Computer Science and Engineering (CSE) Study on going.
                                
                            </p>
                            
                            <p ><span>Exam/Degree Title : </span>
                                HSC
                            </p>
                            <p class="py-3"><span>Institution Name : </span>
                                City College
                            </p>
                            <p class="py-3"><span>Passing Year : </span>
                                HSC'2021
                            </p>
                        </div>
                        <div class="pl-44">
                            <h1 class="text-3xl font-bold text-accent">Skill</h1>
                            <div class="grid gap-2 lg:grid grid-cols-3 gap-4 w-64 my-5">
                                <img src={html} alt=''/>
                                <img src={css} alt=''/>
                                <img src={js} alt=''/>
                                <img src={bootstrap} alt=''/>
                                <img src={react} alt=''/>
                                <img src={tailwind} alt=''/>
                                <img src={node} alt=''/>
                                <img src={mongodb} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-3xl font-bold uppercase text-center text-accent no-underline hover:underline">My Projects</h2>
                <div class="lg:grid grid-cols-3">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIERyWfEPuZZgylphHNOLV4LXAc1JzXJjkw&usqp=CAU" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Accounted web is my first website!</h2>
                            <p>This is my first website with react.I am a juniour web developer. </p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-accent"><a href='https://accounted-web-layout.firebaseapp.com/' target="_blank" rel="noreferrer">Live Demo</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRueJ8WNq6zK6CL2lYegzUgAQtINWfKxKdWSg&usqp=CAU" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Bread Factory is my second website!</h2>
                            <p>This is my first website with react.I am a juniour web developer. </p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-accent"><a href='https://roaring-kangaroo-7c0712.netlify.app/' target="_blank" rel="noreferrer" >Live demo</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwfnPH1_m8y9izzOyvDnW6Vvt0DWEoc6PtQ&usqp=CAU" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">AASElectronics is my third website!</h2>
                            <p>This is my first website with react.I am a juniour web developer. </p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-accent"><a href='https://aas-electronics.web.app/' target="_blank" rel="noreferrer">Live demo</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;