import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Properties')
        .schemaType('property')
        .child(S.documentTypeList('property').title('Properties').defaultOrdering([{field: '_createdAt', direction: 'desc'}])),
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'property'),
    ])
