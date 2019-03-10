import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
	if (!song) {
		return (
            <div className="jumbotron">
			    <h1 className="display-4">Select a song</h1>
		    </div>
        );
	}
	return (
		<div className="jumbotron">
			<h1 className="display-4">{song.title}</h1>
			<p className="lead">Duration: {song.duration}</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
