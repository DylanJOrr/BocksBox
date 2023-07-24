import { gql } from 'apollo-boost';

export default gql`query GetAllProducts {
    recipes(where: { published: true }) {
        id
        name
        desc_sm
        desc_lg
        rating
        cookTime
        facts
        tags
    }
}`;
