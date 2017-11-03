import React from 'react';
import { Helmet } from 'react-helmet';

export class Repo extends React.Component {

  render() {
    const { match } = this.props;
    const repo = this.props.repos.find(r => +r.id === +match.params.repoId);
    return (
      <div>
        <Helmet>
          <title>{repo.name} - Test Page</title>
          <meta name="description" content={`Test github ${repo.description || ''}`}/>
          <meta property="og:title" content={`Test github ${repo.name || ''}`}/>
          <meta property="og:description" content={`description for ${repo.description || ''}`}/>
          <meta property="og:image" content={`${repo.owner.avatar_url}.jpg`}/>
        </Helmet>
        <h5>{repo.name}</h5>
        <p>{repo.description ? repo.description : '[no description]'}</p>
        <p><a href={repo.html_url}>view on GitHub</a></p>
      </div>
    )
  }
}

export default {
  component: Repo
}