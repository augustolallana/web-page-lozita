import Image from "next/image";
export default function CardProyect() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                                DOS ARROYOS DESARROLLO
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-gray-100">
                                Un lugar para disfrutar y vivir en la montaña.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image
                        className="w-[48rem] max-w-none rounded-xl bg-gray-400 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="https://dosarroyoseldurazno.com.ar/wp-content/uploads/2023/03/qs.jpg"
                        alt=""
                        width={612}
                        height={612}
                    ></Image>
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg">
                            <p>
                                Dos Arroyos, es un desarrollo de montaña ubicado
                                a orillas del arroyo El Cajón, a minutos de El
                                Durazno, un pequeño pueblo localizado al pie del
                                Cerro Champaquí, con una belleza particular
                                caracterizada por su río homónimo, variedad de
                                arroyos y grandes extensiones de pinares sobre
                                sus cerros. Zona de gran crecimiento turístico
                                en los últimos años y de enorme potencial para
                                los próximos.
                                <br />
                                <br />
                            </p>
                            {/*
                            <ul
                                role="list"
                                className="mt-8 space-y-8 text-gray-200"
                            >
                                <li className="flex gap-x-3">
                                    <svg
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        <strong className="font-semibold text-gray-100">
                                            Push to deploy.
                                        </strong>{" "}
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit
                                        perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <svg
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        <strong className="font-semibold text-gray-100">
                                            SSL certificates.
                                        </strong>{" "}
                                        Anim aute id magna aliqua ad ad non
                                        deserunt sunt. Qui irure qui lorem
                                        cupidatat commodo.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <svg
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        <strong className="font-semibold text-gray-100">
                                            Database backups.
                                        </strong>{" "}
                                        Ac tincidunt sapien vehicula erat auctor
                                        pellentesque rhoncus. Et magna sit morbi
                                        lobortis.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                Et vitae blandit facilisi magna lacus commodo.
                                Vitae sapien duis odio id et. Id blandit
                                molestie auctor fermentum dignissim. Lacus diam
                                tincidunt ac cursus in vel. Mauris varius
                                vulputate et ultrices hac adipiscing egestas.
                                Iaculis convallis ac tempor et ut. Ac lorem vel
                                integer orci.
                            </p>
                            */}
                            <h2> PARCELAS EN VENTA </h2>
                            <p className="mt-6">
                                El desarrollo cuenta con un total de 20 chacras
                                exclusivas, planteadas desde una filosofía
                                sustentable y de respeto a la naturaleza, donde
                                el diseño y tamaño de las mismas junto al
                                aprovechamiento de las energías renovables hacen
                                al cuidado de la montaña, la vegetación y los
                                animales que allí habitan. La presencia de sus
                                arroyos con caudal de agua todo el año, sus
                                abundantes pinos y pendientes, hacen de Dos
                                Arroyos un espacio ideal para disfrutar la
                                conexión con la montaña, la vida silvestre y la
                                tranquilidad.
                            </p>
                            <a
                                href="#"
                                className="mt-[2rem] inline-block rounded border-blue-950 bg-blue-950 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-950 focus:outline-none focus:ring active:text-blue-950"
                            >
                                Visita Web
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
