const About = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-blue-600 ">
                <div className="relative flex">
                    <div className="min-h-screen lg:w-1/3"></div>
                    <div className="hidden w-3/4 min-h-screen bg-gradient-to-r from-blue-600 to-indigo-900 dark:bg-gray-800 lg:block"></div>

                    <div
                        className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            About our <span className="text-blue-500">Gym</span> <br />
                        </h1>

                        <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                            <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src="./aboutBanner.jpg" alt="" />

                            <div className="mt-8 lg:px-10 lg:mt-0">
                               <button className="btn text-2xl px-6 disabled  py-2 bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">10 Years Experience</button>

                                <p className="max-w-lg mt-6 text-gray-200 dark:text-gray-500">
                                    Welcome to <span className="text-2xl text-indigo-900 font-semibold font-serif">Power<span className="text-3xl text-blue-600">Up</span></span> Gym, where fitness transforms into a lifestyle and community drives motivation. More than just a gym, we`re a close-knit fitness family dedicated to your success.
                                    <br />
                                    At <span className="text-2xl text-indigo-900 font-semibold font-serif">Power<span className="text-3xl text-blue-600">Up</span></span> Gym, our aim is clear: to empower you in a supportive and welcoming environment. Our top-notch facilities are equipped for diverse workouts, with certified trainers crafting personalized fitness plans tailored to your goals.
                                    <br />
                                    Join us at <span className="text-2xl text-indigo-900 font-semibold font-serif">Power<span className="text-3xl text-blue-600">Up</span></span> Gym and embark on a fitness journey that extends beyond workouts. Discover the strength of a supportive community that propels you towards your fitness aspirations.
                                    <br />
                                    Your fitness transformation begins here, at PowerUp Gym.
                                </p>

                                <h3 className="mt-6 text-lg font-medium text-blue-500">MD Amanat Khan</h3>
                                <p className="text-gray-600 dark:text-gray-300">CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;