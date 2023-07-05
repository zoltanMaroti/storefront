import gql from 'graphql-tag';

export const getProductQuery = gql`
    query GetProduct($slug: ID!, $language: String) {
        ProductItem(id: $slug, language: $language) {
            uuid
            tag_list
            slug
            content {
                name
                description
                images {
                    filename
                    alt
                }
                price
                inventory_level
                care_instructions
                materials
                width
                height
                length
                weight
                category
                is_active
            }
        }
    }
`;
