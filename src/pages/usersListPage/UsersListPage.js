import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from '../../redux/actions';

const UsersListPage = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.userReducer);

  

  useEffect(() => {
    dispatch(fetchUsersRequest());

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dispatch(fetchUsersSuccess(data)))
      .catch((err) => dispatch(fetchUsersFailure(err)));
  }, [dispatch]);


  return (
    <Container>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default UsersListPage;