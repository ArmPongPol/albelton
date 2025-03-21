export default function Footer() {
    return (
        <footer className="h-[400px] flex items-center justify-center w-full bg-white">
            <div className="max-w-7xl mx-auto my-2">
                <span className="font-semibold text-3xl">Ableton</span>
                <div className="flex flex-col">
                    <div className="grid grid-cols-3">
                        <div className="">
                            <ul>
                                <li>Register Live, Push or Move</li>
                                <li>About Ableton</li>
                                <li>Jobs</li>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <span className="font-semibold text-lg">Education</span>
                                <li>Offers for students and teachers</li>
                                <li>Ableton for the Classroom</li>
                                <li>Ableton for Colleges and Universities</li>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <span className="font-semibold text-lg">Sign up to our newsletter</span>
                                <li>Enter your email address to stay up to date with the latest offers,</li>
                                <li>tutorials, downloads, surveys and more.</li>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <span className="font-semibold text-lg">Community</span>
                                <li>Find Certified Training</li>
                                <li>Find Certified Training</li>
                                <li>Become a Certified Trainer</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="my-3.5 py-4 font-semibold">
                    <ul className="flex flex-row space-x-6">
                        <li>Contact Us</li>
                        <li>Press Resources</li>
                        <li>Legal Info</li>
                        <li>Corporate Information</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>

        </footer>
    );
}