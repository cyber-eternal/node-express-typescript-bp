import { Router } from 'express';

import { healthController } from 'controllers/health';

const router = Router();

// Service API

/**
 * @api {get} /api/v1/health Request Health information
 * @apiVersion 0.0.0
 * @apiName GetHealth
 * @apiDescription Provides health of the service.
 * @apiGroup Health
 *
 * @apiSuccess {Object} health Health of the Service.
 * @apiSuccess {String} health.status Status.
 * @apiSuccess {String} health.date Date.
 *
 * @apiError {Object} error Error description
 */
router.get('/health', healthController);

export default router;
