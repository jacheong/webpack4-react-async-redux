import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    renderList() {
        return this.props.songs.map( (song) => {
            return (
                <div className="list-group-item" key={song.title}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="song-title">{song.title}</div>
                        <button className="btn btn-primary" 
                            onClick={() => this.props.selectSong(song)} 
                            type="button"
                        >
                            Select
                        </button>
                    </div>
                </div>
            );
        } );
    }

    render() {
        return (
            <div className="list-group">{this.renderList()}</div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
};

export default connect(
    mapStateToProps, 
    {
        selectSong: selectSong
    }   
)(SongList);