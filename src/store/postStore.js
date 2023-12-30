import { create } from "zustand";

const usePostStore = create((set) => ({
    posts: [],
    createPost: (post) => set(state => ({ posts: [...state.posts, post] })),
    deletePost: (id) => set(state => ({
        posts: state.posts.filter(post => post.id !== id)
    })),
    addComment: (postId, comment) => set(state => ({
        posts: state.posts.map(post => post.id === postId ? { ...post, comments: [...post.comments, comment] } : post)
    })),
    setPosts: (posts) => set({ posts }),
}));

export default usePostStore;