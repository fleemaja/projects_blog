import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {codeInput} from '@sanity/code-input'
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: '32fjkibc',
    dataset: 'production',
    title: 'Learning Projects Blog',
    apiVersion: '2023-06-27',
    basePath: '/admin',
    plugins: [deskTool(), codeInput()],
    schema: { types: schemas }
})

export default config;