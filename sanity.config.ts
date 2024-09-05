import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {draftReviewPluginV3} from 'sanity-plugin-draft-review-v3'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'MurphyWork',

  projectId: '2mn7rz7g',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), draftReviewPluginV3()],

  schema: {
    types: schemaTypes,
  },
})
