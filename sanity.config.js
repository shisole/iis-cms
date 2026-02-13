import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { CompressedUploadSource } from './components/CompressedImageInput';

export default defineConfig({
  name: 'iloilo-integrated-school',
  title: 'Iloilo Integrated School Inc.',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes
  },

  form: {
    image: {
      assetSources: (previousAssetSources) => [
        CompressedUploadSource,
        ...previousAssetSources,
      ],
    },
  },
});
