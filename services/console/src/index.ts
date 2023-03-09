import { logger } from "./logger";
import { createServer } from "./server";

async function main() {
    const server = createServer();
    await server.listen({ port: 3000 });
}

if (require.main === module) {
    main();
}
