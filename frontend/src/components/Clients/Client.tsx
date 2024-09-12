import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';

interface Client {
  id: number;
  username: string;
  email: string;
  password: string;
}

const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<Client[]>('http://localhost:3001/users')
      .then(response => {
        setClients(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('API Error:', error);
        setError('Failed to fetch clients');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <h2>Client List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Correo</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {clients.length > 0 ? (
            clients.map(client => (
              <tr key={client.id}>
                <td>{client.username}</td>
                <td>{client.email}</td>
                <td>{client.password}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No clients found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default ClientList;
