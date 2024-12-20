'use client';
import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import Site from "@/class/Site";
import {Game} from "@/types/games";
import {Navigation} from "swiper/modules";
import {PopularCard} from "@/components/CardComponents";
import {SectionTitle} from "@/components/Titles";

const HomeTrend = () => {
    const site = new Site();
    const [data, setData] = useState<Game[]>([]);
    useEffect(() => {
        site.popular().then(res => setData(res));
    }, []);
    return (
        <>
            <section className={`py-8`}>
                <div className="container">
                    <SectionTitle title={`popular games`} page={`/games`}/>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={true}
                        modules={[Navigation]}
                        className={`custom_navigation`}
                        breakpoints={{
                            640: {
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {data.length > 0 && data.map((game: Game) => <SwiperSlide key={game.id}><PopularCard game={game}/></SwiperSlide>)}
                    </Swiper>
                </div>
            </section>
        </>
    )
}
export default HomeTrend;