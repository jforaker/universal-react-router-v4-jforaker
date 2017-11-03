import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'

import { fetchRepos } from '../ducks';


class ReposListPage extends Component {
  componentDidMount() {
    this.props.fetchRepos();
  }

  renderRepos() {
    return this.props.repos.map(repo => {
      return (
        <li key={repo.id}>
          <Link to={`/repos/${repo.id}`}>
            {repo.name || 'no name'}
          </Link>
        </li>
      )
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.repos.length} repos Loaded`}</title>
        <meta property="og:title" content={`${this.props.repos.length} title repos Loaded`}/>
        <meta property="og:description" content={`description ${this.props.repos.length} repos Loaded`}/>
      </Helmet>
    );
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        {this.head()}
        <aside style={{ width: '300px', padding: '10px'}}>
          <ul>{this.renderRepos()}</ul>
        </aside>
        <main style={{ padding: '16px', flex: '1' }}>
          {/*path: '/repos/:repoId'*/}
          {renderRoutes(this.props.route.routes, { repos: this.props.repos })}
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { repos: state.repos };
}

export default {
  loadData: ({ dispatch }) => dispatch(fetchRepos()),
  component: connect(mapStateToProps, { fetchRepos })(ReposListPage)
};
