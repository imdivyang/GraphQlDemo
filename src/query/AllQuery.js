import {gql} from '@apollo/client';
export const Matches = gql`
  query schedule {
    newSchedule(type: "All", status: "upcoing", page: 1) {
      seriesID
      matchType
      seriesName
      seriesView
      league
      seriesAvailable
    }
  }
`;
