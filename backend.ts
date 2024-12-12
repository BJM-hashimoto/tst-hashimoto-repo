import { defineBackend } from '@aws-amplify/backend';
import { helloWorld } from './function/hello-world/resource';
import { data } from './data/resource';

const backend = defineBackend({
  helloWorld,
});

backend.addOutput({
  custom: {
    helloWorldFunctionName: backend.helloWorld.resources.lambda.functionName,
  },
});

export const backend = defineBackend({
  data
});
