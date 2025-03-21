import Image from "next/image";

export default function Home() {
    return (
        <div className="flex justify-center items-center flex-col">
            <section className="w-full min-h-[700px] h-full flex justify-center items-center ">
                <div className="relative w-[1000px] h-[600px] ">
                    <Image
                        src="https://www.timedoctor.com/blog/images/2021/08/new-ways-of-working1.jpg"
                        alt="working"
                        layout="fill"
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-red-500 text-6xl font-bold">Ableton</h1>
                    </div>
                </div>
            </section>

            <section className="text-lg font-light w-[800px] leading-[2rem] h-[300px] flex items-center">
                <p className="font-extralight">
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </section>

            <section className="relative flex justify-center items-center min-h-screen min-w-screen">
                {/* Yellow Background (Right Half) */}
                <div className="absolute right-0 top-0 h-full w-1/2 bg-yellow-100 z-0"></div>

                {/* Image Container (On Top) */}
                <div className="relative flex items-center space-x-6 z-10">
                    {/* Left Image (Bigger) */}
                    <div className="w-[800px]">
                        <Image
                            src="https://www.timedoctor.com/blog/images/2021/08/new-ways-of-working1.jpg"
                            alt="working"
                            width={800}
                            height={800}
                        />
                    </div>

                    {/* Right Image (Smaller) */}
                    <div className="w-[500px]">
                        <Image
                            src="https://www.timedoctor.com/blog/images/2021/08/new-ways-of-working1.jpg"
                            alt="working"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>

            <section className="text-lg font-light w-[800px] leading-[2rem] h-[300px] flex items-center">
                <p className="font-extralight">
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </section>

        </div>
    );
}

