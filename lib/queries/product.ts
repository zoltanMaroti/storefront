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

export const GetProductRecommendationsQuery = gql`
    query ($starts_with: String, $with_tag: String) {
        ProductItems(starts_with: $starts_with, with_tag: $with_tag) {
            items {
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
    }
`;

export const getProductsQuery = gql`
    query GetProducts($starts_with: String) {
        ProductItems(starts_with: $starts_with) {
            items {
                uuid
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
    }
`;

export const getProductsByCategoryQuery = gql`
    query GetProductsByCategory($starts_with: String, $category: String) {
        ProductItems(
            starts_with: $starts_with
            filter_query_v2: { category: { like: $category } }
        ) {
            items {
                uuid
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
    }
`;
