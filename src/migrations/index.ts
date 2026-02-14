import * as migration_20260213_060900 from './20260213_060900';
import * as migration_20260214_104735 from './20260214_104735';

export const migrations = [
  {
    up: migration_20260213_060900.up,
    down: migration_20260213_060900.down,
    name: '20260213_060900',
  },
  {
    up: migration_20260214_104735.up,
    down: migration_20260214_104735.down,
    name: '20260214_104735'
  },
];
