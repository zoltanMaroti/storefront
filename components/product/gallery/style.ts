import styled from '@emotion/styled';

export const GalleryContainer = styled.div`
    min-width: 0;

    .image-gallery-thumbnail {
        &.active,
        &:hover,
        &:focus {
            border: 4px solid var(--color-accent);
        }
    }

    .image-gallery-thumbnail-image {
        object-fit: cover;
        cursor: pointer;
    }
`;
