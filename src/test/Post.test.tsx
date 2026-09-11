import { render, cleanup } from '@testing-library/react';
import { vi, describe, beforeEach, afterEach, it, expect } from 'vitest';
import Post from '../components/Post';

afterEach(() => {
    cleanup();
});

describe("Post", () => {
    beforeEach(() => {
        globalThis.fetch = vi.fn();
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    it("Should fetch correct post according to id", async () => {
        // Arrange
        const mockResponse = { id: 4, title: "Test Post", body: "Hej hej" };
        
        (globalThis.fetch as any).mockResolvedValue({
            json: async () => mockResponse
        } as Response);

        // Act
        render(<Post id={4} />);

        // Assert
        expect(globalThis.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts/4");
    });
});