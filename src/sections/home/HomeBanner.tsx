'use client';
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import Site from "@/class/Site";
import {BannerComponent} from "@/components/Components";
import {Game} from "@/types/games";

const HomeBanner = () => {
    const site = new Site();
    const [data, setData] = useState<Game[]>([]);
    useEffect(() => {
        site.banners().then(data => setData(data));
    }, []);

    return (
        data.length > 0 &&
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
            >
                {data.length > 0 && data.map((item: Game, index: number) => <SwiperSlide key={index}><BannerComponent game={item}/></SwiperSlide>)}
            </Swiper>
        </>
    )
}

export default HomeBanner;