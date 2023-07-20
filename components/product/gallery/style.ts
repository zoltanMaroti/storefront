import styled from '@emotion/styled';

export const GalleryContainer = styled.div`
    min-width: 0;

    .image-gallery-thumbnail {
        &.active,
        &:hover,
        &:focus {
            border: 4px solid var(--color-accent-primary);
        }
    }

    .image-gallery-thumbnail-image {
        object-fit: cover;
        cursor: pointer;
    }

    .image-gallery-fullscreen-button {
        &:hover {
            color: var(--color-accent-primary);
        }
    }
`;
