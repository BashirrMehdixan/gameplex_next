import {Game, Genre} from "@/types/games";
// Icons
import {FaStar} from "react-icons/fa";
import React from "react";
import Link from "next/link";

export const BannerComponent = ({game}: { game: Game }) => {
    return (
        typeof game !== undefined &&
        <>
            <div className={`relative h-screen bg-center bg-full bg-no-repeat`} style={{backgroundImage: `url(${game?.background_image})`}}>
                <div className="absolute w-full h-full linear_right"></div>
                <div className="h-full container">
                    <div className="relative h-full flex flex-col items-start justify-center gap-7">
                        <div className="flex items-center gap-3">
                            {game?.genres.map((genre: Genre, index: number) =>
                                <span key={index} className="text-2xl text-main">
                                    {genre.name}
                                </span>
                            )}
                        </div>
                        <Link href={`/games/${game?.slug}`} className="text-6xl font-semibold transition duration-500 hover:text-main">
                            {game?.name}
                        </Link>
                        <ul className="flex items-center space-x-8">
                            <li className={`relative flex items-center gap-2 after:absolute after:w-1.5 after:h-1.5 after:bg-gray-200 after:rounded-full after:-right-4`}>
                                <span className={`text-main`}>
                                    <FaStar/>
                                </span>
                                <span>
                                    {game?.rating}
                                </span>
                            </li>
                            <li className={`relative`}>
                                {game?.released.slice(0, 4)}
                            </li>
                        </ul>
                        <Link href={`/games/${game?.slug}`}
                              className={`relative inline-block px-8 py-3 bg-gradient-to-r from-main to-primary capitalize rounded-md transition duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-main`}>
                            buy now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}