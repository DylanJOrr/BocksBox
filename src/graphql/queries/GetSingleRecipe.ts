import { gql } from 'apollo-boost';

export default gql`query GetSingleProduct($productId: ID!) {
    recipe(where: { id: $productId }) {
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
