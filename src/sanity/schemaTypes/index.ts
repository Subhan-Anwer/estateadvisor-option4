import { type SchemaTypeDefinition } from 'sanity'
import { propertyType } from './propertyType'
import { blockContentType } from './blockContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, propertyType],
}
