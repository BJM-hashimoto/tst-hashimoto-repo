import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  MaenuItem: a
    .model({
      id: a.id().required(),
      name: a.string().required(),
      description: a.string(),
      category: a.string(),
      price: a.float(),
      isVegetarian: a.boolean()
      }).authorization(allow => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apikey',
    apikeyAuthorizationMode: { expiresInDays: 30}
  },
  name: "MenuItemApi"
});

