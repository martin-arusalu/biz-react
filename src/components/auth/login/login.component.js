import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { login } from '../../../services/auth.service';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    await login(this.state.username, this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <Form>
        <h1 className="display-1">Login</h1>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleInputChange} />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
        </Form.Group>
        <Button variant="primary" onClick={this.handleSubmit}>Login</Button>
      </Form>
    )
  };
}
