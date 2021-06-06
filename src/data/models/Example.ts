import Sequelize from 'sequelize';

import { ExampleInstance } from 'data/interfaces';
import { databaseService } from 'services/database';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Examples = databaseService.define<ExampleInstance>('examples', {
  name: {
    type: Sequelize.STRING(75),
  },
  email: {
    type: Sequelize.STRING(150),
  }
});
