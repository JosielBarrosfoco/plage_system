// Cloudflare Workers Types
interface D1Database {
	prepare(query: string): D1PreparedStatement;
	batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
	exec(query: string): Promise<D1ExecResult>;
}

interface D1PreparedStatement {
	bind(...values: unknown[]): D1PreparedStatement;
	first<T = unknown>(colName?: string): Promise<T | null>;
	run<T = unknown>(): Promise<D1Result<T>>;
	all<T = unknown>(): Promise<D1Result<T>>;
	raw<T = unknown>(): Promise<T[]>;
}

interface D1Result<T = unknown> {
	results: T[];
	success: boolean;
	meta: {
		changed_db: boolean;
		changes: number;
		duration: number;
		last_row_id: number;
		rows_read: number;
		rows_written: number;
		size_after: number;
	};
}

interface D1ExecResult {
	count: number;
	duration: number;
}

interface R2Bucket {
	get(key: string, options?: R2GetOptions): Promise<R2ObjectBody | R2ObjectBody | null>;
	put(key: string, value: ReadableStream | ArrayBuffer | ArrayBufferView | string | null | Blob, options?: R2PutOptions): Promise<R2Object>;
	delete(keys: string | string[]): Promise<void>;
	head(key: string): Promise<R2Object | null>;
	list(options?: R2ListOptions): Promise<R2Objects>;
}

interface R2Object {
	key: string;
	version: string;
	size: number;
	etag: string;
	httpEtag: string;
	checksums: R2Checksums;
	uploaded: Date;
	httpMetadata?: R2HTTPMetadata;
	customMetadata?: Record<string, string>;
	range?: R2Range;
}

interface R2ObjectBody extends R2Object {
	body: ReadableStream;
	bodyUsed: boolean;
	arrayBuffer(): Promise<ArrayBuffer>;
	text(): Promise<string>;
	json<T = unknown>(): Promise<T>;
	blob(): Promise<Blob>;
}

interface R2GetOptions {
	onlyIf?: R2Conditional;
	range?: R2Range;
}

interface R2PutOptions {
	onlyIf?: R2Conditional;
	httpMetadata?: R2HTTPMetadata;
	customMetadata?: Record<string, string>;
}

interface R2ListOptions {
	limit?: number;
	prefix?: string;
	cursor?: string;
	delimiter?: string;
	include?: ("httpMetadata" | "customMetadata")[];
}

interface R2Objects {
	objects: R2Object[];
	truncated: boolean;
	cursor?: string;
	delimitedPrefixes: string[];
}

interface R2Conditional {
	etagMatches?: string;
	etagDoesNotMatch?: string;
	uploadedBefore?: Date;
	uploadedAfter?: Date;
}

interface R2Range {
	offset?: number;
	length?: number;
	suffix?: number;
}

interface R2HTTPMetadata {
	contentType?: string;
	contentLanguage?: string;
	contentEncoding?: string;
	contentDisposition?: string;
	cacheControl?: string;
	cacheExpiry?: Date;
}

interface R2Checksums {
	md5?: ArrayBuffer;
	sha1?: ArrayBuffer;
	sha256?: ArrayBuffer;
	sha384?: ArrayBuffer;
	sha512?: ArrayBuffer;
}

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

