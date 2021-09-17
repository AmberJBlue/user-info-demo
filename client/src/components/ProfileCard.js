import React from 'react';

const ProfileCard = () => (
    <div className="card">
    <div className="card-body">
        <div className="d-flex flex-column align-items-center text-center">
            <div className="pic">JD</div>
            <div className="mt-3">
                <h4>John Doe</h4>
                <p className="text-secondary mb-1">DOB: 01/02/2003</p>
                <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                <button className="btn btn-primary">Follow</button>
                <button className="btn btn-outline-primary">Message</button>
            </div>
        </div>
        <hr className="my-4"/>
        <ul className="list-group list-group-flush">
        <h3>Interests</h3>
        <div className="d-flex flex-wrap my-5"> 
            <a className="items"  title="Music Production" href="/#">Music Production</a>
            <a className="items"  title="Synthesizers" href="/#">Synthesizers</a>
            <a className="items"  title="Audio Plug-Ins" href="/#">Audio Plug-Ins</a>
            <a className="items"  title="Sound Design" href="/#">Sound Design</a>
            <a className="items"  title="Performance" href="/#">Performance</a>
            <a className="items"  title="Soundscapes" href="/#">Soundscapes</a>
            <a className="items"  title="Rock" href="/#">Rock</a>
            <a className="items"  title="Jazz" href="/#">Jazz</a>
            <a className="items"  title="Pop" href="/#">Pop</a>
        </div>
        </ul>
    </div>
</div>

);

export default ProfileCard;