import Image from "next/image";

export default function AboutMeEvents() {
    return (
        <div className="bg-gray-800 ">
            <div className="container py-24 mx-auto md:px-6">
                <section className="mb-32 text-center">
                    <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
                        <div className="mb-6 lg:mb-0">
                            <div className="relative block rounded-lg bg-gray-900 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                                <div className="flex">
                                    <div
                                        className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg shadow-black/20"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >   
                                        {/* usar componente Image ??? */}
                                        <img
                                            src="ACA ACA ACA"
                                            className="w-full"
                                        />
                                        <Image
                                            alt="Feria 21"
                                            className="block h-full w-full rounded-lg object-cover object-center"
                                            src="/feria_siglo21.jpeg"
                                            width={347}
                                            height={478}
                                        ></Image>
                                        <a href="#!">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-3 text-lg font-bold text-white">
                                        Feria 21
                                    </h5>
                                    <p className="mb-8 pb-20 text-gray-200">
                                        Fui exponente por diseño disruptivo de triple impacto de 
                                        desarrollo inmobiliario en las sierras de Córdoba
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 lg:mb-0">
                            <div className="relative block rounded-lg bg-gray-900 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                                <div className="flex">
                                    <div
                                        className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg shadow-black/20"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >
                                        <Image
                                            alt="Real Estate Business Tour 2021"
                                            className="block h-full w-full rounded-lg object-cover object-center"
                                            src="/congreso_extranjero.jpeg"
                                            width={347}
                                            height={478}
                                        ></Image>
                                        <a href="#!">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-3 text-lg font-bold text-white">
                                        Real Estate Business Tour 2021
                                    </h5>
                                    <p className="mb-8 pb-20 text-gray-200">
                                        Fui parte de un viaje de negocios de desarrollo inmobiliario
                                        sobre las tendencias en Miami y Estados Unidos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 lg:mb-0">
                            <div className="relative block rounded-lg bg-gray-900 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                                <div className="flex">
                                    <div
                                        className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg shadow-black/20"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >
                                        <Image
                                            alt="Expo Real State Argentina 2022"
                                            className="block h-full w-full rounded-lg object-cover object-center"
                                            src="/congreso.jpeg"
                                            width={347}
                                            height={478}
                                        ></Image>
                                        <a href="#!">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-3 text-lg font-bold text-white">
                                        Congresos
                                    </h5>
                                    <p className="mb-8 pb-20 text-gray-200">
                                        Participé como oyente en congresos de desarrollo inmobiliario 
                                        en Córdoba y Buenos Aires, como el Doceavo Congreso de Desarrollo 
                                        e Inversiones Inmobiliarias, Expo Real State Argentina 2022.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
