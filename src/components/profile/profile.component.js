import React from 'react';
import { Container } from 'react-bootstrap';
import { profile } from '../../services/user.service';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  async componentDidMount() {
    const user = await profile();
    this.setState({ user });
  }

  render() {
    return (
      <Container>
        <h1 className="display-1">{this.state.user.username}</h1>
        <p>{JSON.stringify(this.state.user)}</p>
      </Container>
    )
  };
}
