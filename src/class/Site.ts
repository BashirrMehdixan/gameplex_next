import axios from "axios";

class Site {
    private apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
    private apiKey: string | undefined = process.env.NEXT_PUBLIC_API_KEY;
    private api = {
        games: `${this.apiUrl}/games?key=${this.apiKey}`,
    }

    public banners = async () => {
        try {
            const response = await axios.get(this.api.games);
            return response.data.results;
        } catch (e) {
            console.log(e);
        }
    }
}

export default Site;