import Link from "next/link";
import Image from "next/image";

export default function CarrouselMamado() {
    return (
        <section className="bg-gray-900">
            <div className="h-[39rem] bg-gray-800">
                <div className="container px-6 pt-7 pb-0 mx-auto sm:pt-0 sm:pb-12">
                    <h1 className="text-4xl mb-4 font-semibold text-center  capitalize lg:text-6xl text-white">
                        Mis Proyectos
                    </h1>

                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                    </div>

                    <p className="max-w-2xl mx-auto mt-6 text-center text-gray-300">
                        Cada proyecto es una historia única de creatividad y
                        eficiencia, donde la excelencia en el diseño se combina
                        con un profundo compromiso con la sostenibilidad y la
                        calidad de vida. Explora para descubrir cómo mis
                        habilidades y visión han dado forma a entornos urbanos
                        vibrantes y funcionales.
                    </p>
                </div>
            </div>

            <div className="container px-6 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
                <div className="grid grid-cols-1 gap-8 mt-0 xl:mt-1 md:grid-cols-2 xl:grid-cols-3">
                    <div className="flex flex-col items-center p-4 border sm:p-6 rounded-sm dark:border-gray-700">
                        <Image
                            className="object-cover w-full rounded-sm aspect-square"
                            src="/foto_dos_arroyos.jpg"
                            alt=""
                            width={2000}
                            height={2000}
                        ></Image>

                        <h1 className="mt-4 text-2xl font-semibold  capitalize text-white">
                            Dos Arroyos
                        </h1>

                        <p className="mt-2  capitalize text-gray-300">
                            Un desarrollo a la rivera del arroyo El Cajón 
                        </p>

                        <div className="flex mt-3 -mx-2">
                            <a
                                href="#"
                                className="mx-2  transition-colors duration-300 text-gray-300 hover:text-blue-500 "
                                aria-label="Facebook"
                            >
                                <svg
                                    className="w-6 h-6 fill-current"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-4 border sm:p-6 rounded-sm dark:border-gray-700">
                        <Image
                            className="object-cover w-full rounded-sm aspect-square"
                            src="/arroyo_hondo.JPG"
                            alt=""
                            width={2000}
                            height={2000}
                        ></Image>

                        <h1 className="mt-4 text-2xl font-semibold  capitalize text-white">
                            Reserva privada Arroyo Hondo
                        </h1>

                        <p className="mt-2  capitalize text-gray-300">
                            Un desarrollo sobre fincas con bosques y arroyos
                        </p>

                        <div className="flex mt-3 -mx-2">
                            <a
                                href="#"
                                className="mx-2  transition-colors duration-300 text-gray-300 hover:text-blue-500 "
                                aria-label="Facebook"
                            >
                                <svg
                                    className="w-6 h-6 fill-current"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-4 border sm:p-6 rounded-sm dark:border-gray-700">
                        <Image
                            className="object-cover w-full rounded-sm aspect-square"
                            src="/don_erasmo_frente.jpeg"
                            alt=""
                            width={2000}
                            height={2000}
                        ></Image>

                        <h1 className="mt-4 text-2xl font-semibold  capitalize text-white">
                            Puesto Don Erasmo
                        </h1>

                        <p className="mt-2  capitalize text-gray-300">
                            Un saneamiento de un rancho centenario
                        </p>

                        <div className="flex mt-3 -mx-2">
                            <a
                                href="#"
                                className="mx-2  transition-colors duration-300 text-gray-300 hover:text-blue-500"
                                aria-label="Facebook"
                            >
                                <svg
                                    className="w-6 h-6 fill-current"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center pb-8 pt-8 ">
                <Link
                    href="/proyects"
                    className=" inline-block rounded border border-blue-950 bg-blue-950 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-950 focus:outline-none focus:ring active:text-blue-950"
                >
                    Ver Proyectos
                </Link>
            </div>
        </section>
    );
}
