import heroBackground from "@/public/hero-background.svg"
import heroProduct from "@/public/hero-product.png"
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
    return (
        <section className="min-h-screen flex justify-center items-center relative">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-white">
                <Image src={heroBackground} fill alt="hero-background" className="object-cover" />
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center max-w-screen-2xl w-full px-6 z-10">
                <div className="flex flex-col items-center justify-center text-primary-content text-center space-y-8 px-4 pt-12 lg:py-12">
                    <p className="text-3xl md:text-5xl font-extrabold leading-tight">
                        Everything You Need. Just a Click Away.
                    </p>
                    <p className="text-lg md:text-2xl font-medium max-w-2xl">
                        From essentials to must-haves—shop it all, hassle-free.
                    </p>
                    <Link href="/shop" className="btn btn-outline btn-lg rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                        Explore the Shop
                    </Link>
                </div>

                <figure className="max-h-screen flex items-center mb-40 lg:mb-0">
                    <Image src={heroProduct} width={1024} height={1536} alt="image of a headphone" className="lg:h-[90vh] w-auto object-contain" draggable={false} />
                </figure>
            </div>
        </section>
    );
}

export default HeroSection;