import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: '32fjkibc',
    dataset: 'production',
    title: 'Learning Projects Blog',
    apiVersion: '2023-06-27',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;