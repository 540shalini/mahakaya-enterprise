// Compatibility export for older imports. New backend code imports from backend/src/config/database.js.
export { sequelize as default, sequelize, connectDatabase } from './backend/src/config/database.js';
