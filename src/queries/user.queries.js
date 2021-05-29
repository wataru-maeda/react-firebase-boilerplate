import { gql } from '@apollo/client'

const getMe = gql`
  query me {
    me {
      id
      name
      email
    }
  }
`

const updateMe = gql`
  mutation updateMe($input: UserInput!) {
    updateMe(input: $input) {
      id
      name
      email
    }
  }
`

const createUser = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
`

export default {
  getMe,
  updateMe,
  createUser,
}
