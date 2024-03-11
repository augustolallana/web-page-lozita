import Image from "next/image";
export default function DobleImgV2() {
    return (
        <section className="bg-gray-800 text-gray-800">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-white">
                        Proyectos en Desarrollo
                    </h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-300">
                        Conoce en lo que estoy trabajando
                    </p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-100">
                            LOTEO RESIDENCIAL EN VILLA MARIA
                        </h3>
                        <p className="mt-3 text-lg text-gray-200">
                            Villa María es la tercera ciudad más importante de la provincia 
                            de Córdoba, Argentina. Es cabecera del departamento General San 
                            Martín. Actualmente me encuentro trabajando en un loteo residencial 
                            en esta localidad. 
                        </p>

                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Image
                            src="/villa_maria.jpg"
                            alt="Villa María, Córdoba, Argentina"
                            className="mx-auto rounded-lg shadow-lg bg-gray-500"
                            width={612}
                            height={612}
                        ></Image>
                    </div>
                </div>
                {/*
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracki sm:text-3xl text-white">
                                Eam nibh gloriatur ex
                            </h3>
                            <p className="mt-3 text-lg text-gray-300">
                                Per odio fabellas consulatu cu. Utroque detracto
                                mel ea, quo te latine theophrastus. Ea his tale
                                nibh dissentias, mei exerci tamquam euripidis
                                cu.
                            </p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-7 h-7"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi text-gray-100">
                                            Cibo augue offendit has ad
                                        </h4>
                                        <p className="mt-2 text-gray-300">
                                            An per velit appellantur, ut utinam
                                            minimum nominavi sit, odio nostro
                                            habemus ne nec. Ne sonet regione
                                            contentiones est.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-7 h-7"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi text-gray-100">
                                            At eum ferri luptatum lobortis
                                        </h4>
                                        <p className="mt-2 text-gray-300">
                                            Te per quidam maiorum ocurreret,
                                            etiam delicatissimi usu ad. Ne has
                                            quod periculis. Te sit primis iisque
                                            efficiantur.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-7 h-7"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi text-gray-100">
                                            Dicunt verterem evertitur eu sea
                                        </h4>
                                        <p className="mt-2 text-gray-300">
                                            Audire principes rationibus eam an,
                                            autem nominavi luptatum per te. Sumo
                                            fabulas vim eu, sonet saperet
                                            eleifend ut vix.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <Image
                                src="https://source.unsplash.com/random/361x481"
                                alt=""
                                className="mx-auto rounded-lg shadow-lg bg-gray-500"
                                width={612}
                                height={612}
                            ></Image>
                        </div>
                    </div>
                </div>
                */}
            </div>
        </section>
    );
}