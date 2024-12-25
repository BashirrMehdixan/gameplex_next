import React from "react";
import {Game, Genre} from "@/types/games";
// Icons
import {FaStar} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const BannerComponent = ({game}: { game: Game }) => {
    return (
        typeof game !== undefined &&
        <>
            <div className={`relative h-screen bg-center bg-full bg-no-repeat`} style={{backgroundImage: `url(${game?.background_image})`}}>
                <div className="absolute w-full h-full linear_right"></div>
                <div className="h-full container">
                    <div className="relative h-full flex flex-col items-start justify-center gap-7">
                        <div className="text-2xl text-main flex items-center gap-3">
                            {game?.genres.map((genre: Genre) => genre?.name).join(', ')}
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

export const PopularCard = ({game}: { game: Game }) => {
    console.log(game)
    return (
        Object.keys(game).length &&
        <>
            <div className="rounded-lg mb-8">
                <Link href={`/games/${game?.slug}`} className={`relative block w-full h-36`}>
                    <Image src={game.background_image} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={game.name}/>
                </Link>
                <div className="mt-5">
                    <Link href={`/games/${game?.slug}`} className="block min-h-14 text-lg transition duration-500 hover:text-main mb-3">
                        {game?.name}
                    </Link>
                    <ul className="flex items-center gap-4">
                        <li>
                            {game?.released?.slice(0, 4)}
                        </li>
                        <li>
                            {game?.genres?.map((genre: Genre) => genre.name).join(', ')}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export const ReleasesCard = ({game}: { game: Game }) => {
    return (
        <>
            <div className="mb-5">
                <div className="relative block w-full h-96 group z-0">
                    <Link href={`/games/${game?.slug}`} className="block w-full h-full">
                        <Image src={game.background_image} fill={true} alt={game.name}/>
                    </Link>
                    <button
                        className="absolute w-11/12 left-4 bottom-0 bg-white/50 py-2 z-10 transition-all duration-500 opacity-0 capitalize group-hover:opacity-100 group-hover:bottom-2  hover:bg-main">Add
                        to my list
                    </button>
                </div>
                <div className="py-5">
                    <Link href={`/games/${game?.slug}`} className="block text-lg transition duration-500 hover:text-main mb-3">
                        {game?.name}
                    </Link>
                    <ul className="flex items-center text-white/60 gap-5">
                        <li>
                            {game?.released?.slice(0, 4)}
                        </li>
                        <li>
                            {game?.genres?.map((genre: Genre) => genre.name).join(', ')}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}