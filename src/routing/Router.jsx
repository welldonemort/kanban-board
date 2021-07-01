import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './Router.css';
import ShowLocationInfoWithRouter from './NavInfo.jsx';

const Home = () => <div>Home</div>;
const About = () =>
    <div>
        About
        <ShowLocationInfoWithRouter />
    </div>;

const Post = () => <div>Post</div>

const BlogPosts = props =>
    <div>
        BlogPosts
        <Route path={`${props.match.url}/post`} component={Post} />
    </div>;
const NotFound = () => <div>404</div>;

class ReactRouterRoute extends React.Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="is-active">About</NavLink></li>
                    <li><NavLink to="/blog-posts" activeStyle={{color: 'green'}}>BlogPosts</NavLink></li>
                </ul>
                
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Redirect from="/about" to="/blog-posts"/> */}
                    <Route path="/about" component={About} />
                    <Route path="/blog-posts" component={BlogPosts} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

export default ReactRouterRoute;