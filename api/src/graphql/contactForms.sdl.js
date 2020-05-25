export const schema = gql`
  type ContactForm {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    contactForms: [ContactForm!]!
  }

  input CreateContactFormInput {
    name: String!
    email: String!
    message: String!
  }

  input UpdateContactFormInput {
    name: String
    email: String
    message: String
  }

  type Mutation {
    createContactForm(input: CreateContactInput!): Contact
  }
`
