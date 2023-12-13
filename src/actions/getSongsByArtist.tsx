import axios from "axios";

const DEEZER_API_BASE_URL =
	"https://cors-anywhere.herokuapp.com/https://api.deezer.com";

const deezerService = axios.create({
	baseURL: DEEZER_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const getTopTracksByArtist = async (artistId: string) => {
	try {
		const response = await deezerService.get(
			`/artist/${artistId}/top?limit=50`
		);
		const tracks = response.data.data;
		return { success: true, tracks };
	} catch (error) {
		console.error("Error getting top tracks by artist:", error);
		return { success: false, error };
	}
};

export const playTrackPreview = async (trackId: string) => {
	try {
		const response = await deezerService.get(`/track/${trackId}`);
		const previewUrl = response.data.preview;
		return { success: true, previewUrl };
	} catch (error) {
		console.error("Error playing track preview:", error);
		return { success: false, error };
	}
};

export default deezerService;
