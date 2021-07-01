import React from 'react';
import { withRouter } from 'react-router';

const ShowLocationInfo = ({ location }) => (
    <div>You are now at "{location.pathname}"</div>
);

const ShowLocationInfoWithRouter = withRouter(ShowLocationInfo);

export default ShowLocationInfoWithRouter;