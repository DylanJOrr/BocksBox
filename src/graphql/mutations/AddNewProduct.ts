import { gql } from 'apollo-boost';

export default gql`mutation AddProduct(
    $name: String!
    $desc_sm: String!
    $desc_lg: String!
    $rating: Float
    $cookTime: String!
    $facts: String!
    $tags: String!
) {
    createProduct(
        data: {
            name: $name
            title: $desc_sm
            ingredients: $desc_lg
            rating: $rating
            cookTime: $cookTime
            facts: $facts
            tags: $tags
        }
    ) {
        id
    }
}`;
