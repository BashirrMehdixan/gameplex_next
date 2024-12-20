import axios from "axios";

class Site {
    private apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
    private apiKey: string | undefined = process.env.NEXT_PUBLIC_API_KEY;
    private api: { games: string } = {
        games: `${this.apiUrl}`,
    }

    public banners = async () => {
        try {
            const response = await axios.get(`${this.api.games}/games?key=${this.apiKey}`);
            return response.data.results;
        } catch (e) {
            console.log(e);
        }
    }
    public popular = async () => {
        try {
            const response = await axios.get(`${this.api.games}/games?ordering=-rating&key=${this.apiKey}`);
            return response.data.results;
        } catch (e) {
            console.log(e);
        }
    }

}

export default Site;