import Fastify from "fastify";

import { logger } from "./logger";

export function createServer() {
    const fastify = Fastify({
        logger
    });

    return fastify;
}
