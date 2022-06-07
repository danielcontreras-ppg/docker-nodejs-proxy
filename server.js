import createFastifyServer from "fastify";
import fastifyHttpProxy from "fastify-http-proxy";

/**
 * Create a Fastify server instance with logging enabled.
 * Fastify uses the library `pino` for logging.
 *
 * @see https://www.fastify.io/docs/latest/Logging/
 * @see https://github.com/pinojs/pino/
 */
const fastify = createFastifyServer({
	logger: true,
});

fastify.register(fastifyHttpProxy, {
	upstream: "http://items.lfa",
	undici: true,
});
try {
	/**
	 * Make use of top-level `await` i.e. outside of an `async` function.
	 *
	 * @see https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_top_level_await
	 */
	await fastify.listen(80);
} catch (error) {
	fastify.log.error(error);
	process.exit(1);
}