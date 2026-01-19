import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'photo-gallery',
  title: 'Photo Gallery CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'k0kcgxd8',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Albums')
              .schemaType('album')
              .child(S.documentTypeList('album').title('Albums')),
            S.listItem()
              .title('Photos')
              .schemaType('photo')
              .child(S.documentTypeList('photo').title('Photos')),
            S.divider(),
            S.listItem()
              .title('Client Galleries')
              .schemaType('clientGallery')
              .child(S.documentTypeList('clientGallery').title('Client Galleries')),
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
