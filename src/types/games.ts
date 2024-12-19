export interface Game {
    id: number,
    slug: string,
    name: string,
    released: string,
    tba: boolean,
    background_image: string,
    rating: number,
    rating_top: number,
    ratings: Rating[],
    ratings_count: number,
    reviews_text_count: number,
    added: number,
    name_original?: string,
    added_by_status: {
        yet: number,
        owned: number,
        beaten: number,
        toplay: number,
        dropped: number,
        playing: number
    },
    metacritic: number,
    playtime: number,
    suggestions_count: number,
    updated: string,
    user_game: null,
    reviews_count: number,
    saturated_color: string,
    dominant_color: string,
    platforms: MainPlatform[],
    metacritic_platforms?: MetacriticPlatform[] | null,
    parent_platforms: [
        {
            platform: Platform
        },
    ],
    genres: Genre[],
    stores: [
        {
            id: number,
            store: Store
        },
    ],
    clip: null,
    tags: Tag[],
    esrb_rating: {
        id: number,
        name: string,
        slug: string
    },
    short_screenshots: [
        {
            id: number,
            image: string
        },
    ]
}

export interface GameType {
    id: number,
    slug: string,
    name: string,
    name_original: string,
    description: string,
    metacritic: number | null,
    metacritic_platforms: MetacriticPlatform[] | null,
    released: string,
    tba: boolean,
    updated: string,
    background_image: string,
    background_image_additional: string,
    website: string,
    rating: number,
    rating_top: number,
    ratings: Rating[] | null,
    reactions: {
        1: number,
        2: number
        3: number,
        4: number,
        5: number,
        6: number,
        7: number,
        8: number,
        9: number,
        10: number,
        11: number,
        12: number,
        13: number,
        14: number,
        15: number,
        16: number,
        18: number,
        20: number,
        21: number,
    },
    added: number,
    added_by_status: {
        yet: number
        owned: number,
        beaten: number,
        toplay: number,
        dropped: number,
        playing: number,
    },
    playtime: number,
    screenshots_count: number,
    movies_count: number,
    creators_count: number,
    achievements_count: number,
    parent_achievements_count: number,
    reddit_url: string,
    reddit_name: string,
    reddit_description: string,
    reddit_logo: string,
    reddit_count: number,
    twitch_count: number,
    youtube_count: number,
    reviews_text_count: number,
    ratings_count: number,
    suggestions_count: number,
    alternative_names: string[],
    metacritic_url: string,
    parents_count: number,
    additions_count: number,
    game_series_count: number,
    user_game: null | string,
    reviews_count: number,
    saturated_color: string,
    dominant_color: string,
    parent_platforms: Platform[],
    platforms: MainPlatform[],
    stores: null | Store[],
    developers: Developer[],
    genres: Genre[],
    tags: Tag[],
    publishers: Publisher[],
    esrb_rating: {
        id: number,
        name: string,
        slug: string
    },
    clip: null,
    description_raw: string,
    data?: GameType,
    game?: GameType
}

interface MetaPlatform {
    platform: number,
    name: string,
    slug: string
}

export interface MetacriticPlatform {
    metascore: number,
    url: string,
    platform: MetaPlatform
}

export interface Rating {
    id: number,
    title: string,
    count: number,
    percent: number
}

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface MainPlatform {
    platform: {
        id: number,
        name: string,
        slug: string,
        image: null | string,
        year_end: null | string,
        year_start: null | string,
        games_count: number,
        image_background: string
    },
    released_at: string,
    requirements: {
        minimum: string,
        recommended: string
    }
}

export interface Store {
    id: number,
    url: string | null,
    store: {
        id: number,
        name: string,
        slug: string,
        domain: string | null,
        games_count: number,
        image_background: string
    }
}

export interface Developer {
    id: number,
    name: string,
    slug: string,
    games_count: number,
    image_background: string
}

export interface Genre {
    id: number,
    name: string,
    slug: string,
    games_count: number,
    image_background: string
}

export interface Tag {
    id: number,
    name: string,
    slug: string,
    language: string,
    games_count: number,
    image_background: string
}

export interface Publisher {
    id: number,
    name: string,
    slug: string,
    games_count: number,
    image_background: string
}