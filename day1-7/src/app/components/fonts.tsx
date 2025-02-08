import { Playfair_Display, Cinzel, Bodoni_Moda, Prata, Montserrat } from "next/font/google"; 

const Playfair = Playfair_Display({subsets:["latin"]});
const Cinze = Cinzel({subsets:["latin"]});

const Prat = Prata({
    subsets: ["latin"],
    weight: "400"
});
const Montserra = Montserrat({subsets:["latin"]});

export default function fonts(){
    return(
        <div className="w-full h-[122px] bg-black max-w-screen-2xl mx-auto">
        <div className="w-full lg:w-[1240px] h-full max-w-full mx-auto bg-black space-x-4 flex justify-evenly md:justify-between items-center flex-wrap">
            <h1 className={`${ Playfair.className}  text-white text-2xl md:text-4xl`}>VERSACE</h1>
            <h1 className={`${Cinze.className} text-white text-2xl md:text-4xl`}>ZARA</h1>
            <h1 className="text-white text-2xl md:text-4xl">GUCCI</h1>
            <h1 className={`${Prat.className} text-white text-2xl md:text-4xl font-extrabold`}>PRADA</h1>
            <h1 className={`${Montserra.className} text-white text-2xl md:text-4xl`}>Calvin Klein</h1>
        </div>
        </div>
    )
}