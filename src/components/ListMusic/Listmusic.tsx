import React, { useState, useEffect } from "react";
import { getTopTracksByArtist } from "../../actions/getSongsByArtist";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import {
	Container,
	ArtistInfo,
	ArtistImage,
	ArtistDetails,
	ArtistName,
	PlaylistName,
	TrackList,
	TrackItem,
	TrackTitle,
	PreviewButton,
	AudioPlayerContainer,
} from "../../styles/styles";

const Listmusic: React.FC = () => {
	const [topTracks, setTopTracks] = useState<any[]>([]);
	const [selectedTrackPreview, setSelectedTrackPreview] = useState<
		string | null
	>(null);

	useEffect(() => {
		const fetchTopTracks = async () => {
			const { success, tracks } = await getTopTracksByArtist("10977");
			if (success) {
				setTopTracks(tracks);
			} else {
				console.error("Erro to fetch api");
			}
		};

		fetchTopTracks();
	}, []);

	const handlePreviewClick = (previewUrl: string) => {
		setSelectedTrackPreview(previewUrl);
	};

	return (
		<>
			<Container>
				<ArtistInfo>
					<ArtistImage
						src="https://assets.papelpop.com/wp-content/uploads/2023/10/paramore-re-this-is-why-lancamento.jpg"
						alt="Paramore photo"
					/>
					<ArtistDetails>
						<ArtistName>Paramore</ArtistName>
						<PlaylistName>Top 50 Songs</PlaylistName>
					</ArtistDetails>
				</ArtistInfo>
				<TrackList>
					{topTracks.map((track) => (
						<TrackItem key={track.id}>
							<TrackTitle>{track.title}</TrackTitle>
							<PreviewButton onClick={() => handlePreviewClick(track.preview)}>
								<MdOutlinePlayCircleFilled size={50} color="#eb4034" />
							</PreviewButton>
						</TrackItem>
					))}
				</TrackList>
			</Container>
			{selectedTrackPreview && (
				<AudioPlayerContainer>
					<AudioPlayer src={selectedTrackPreview} />
				</AudioPlayerContainer>
			)}
			<footer>
				Developed by Vitoria CM Vicentin
			</footer>
		</>
	);
};

export default Listmusic;
