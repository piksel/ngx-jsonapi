// jest headless dont have indexdb, we need a mock
// more info on https://stackoverflow.com/questions/47934383/indexeddb-testing-with-jest-enzyme-referenceerror-indexeddb-is-not-defined
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Dexie: any = require('dexie');
Dexie.dependencies.indexedDB = require('fake-indexeddb');
Dexie.dependencies.IDBKeyRange = require('fake-indexeddb/lib/FDBKeyRange');
