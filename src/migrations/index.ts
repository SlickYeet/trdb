import * as migration_20260213_060900 from './20260213_060900';

export const migrations = [
  {
    up: migration_20260213_060900.up,
    down: migration_20260213_060900.down,
    name: '20260213_060900'
  },
];
