import React from 'react';
import AddTracks from './components/AddTracks';
import './App.css';
import TracksList from './components/TracksList';
import ProfileCard from './components/ProfileCard';

const App = () => (
  <div className="container mt-4">
		<div className="main-body">
			<div className="row">
				<div className="col-lg-4">
					<ProfileCard/>
				</div>
				<div className="col-lg-8">
					<div className="card">
						<div className="card-body">
            			<AddTracks/>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<div className="card">
								<div className="card-body">
									<h5 className="d-flex align-items-center mb-3">Tracks</h5>
									<TracksList/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

);

export default App;