declare namespace Cloudflare {
	interface GlobalProps {
		mainModule: typeof import("./src/worker/index");
	}
	interface Env {
		R2_BUCKET: R2Bucket;
		DB: D1Database;
	}
}
interface Env extends Cloudflare.Env {}

