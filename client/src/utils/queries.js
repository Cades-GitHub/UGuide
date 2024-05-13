import { gql } from '@apollo/client';

export const QUERY_ALL_GUIDES = gql`
  {
    guides {
      _id
      title
      videoUrl
      imageUrl
      description
    }
  }
`;
