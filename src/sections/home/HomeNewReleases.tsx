'use client';
import {useState, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {SectionTitle} from "@/components/Titles";
import {Navigation} from "swiper/modules";
import Site from "@/class/Site";
import {Game} from "@/types/games";
import {ReleasesCard} from "@/components/CardComponents";

const HomeNewReleases = () => {
    const site = new Site();
    const [data, setData] = useState<Game[]>([]);
    useEffect(() => {
        site.news().then(res => setData(res));
    }, [])
    return (
        (data.length > 0 || typeof data !== undefined) &&
        <section>
            <div className="container">
                <SectionTitle title={`New releases`} page={`/games`}/>
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
                    }}>
                    {data.map((game: Game, index: number) => <SwiperSlide key={index}><ReleasesCard game={game}/></SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    )
}

export default HomeNewReleases;