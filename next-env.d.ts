/// <reference types="next" />

/// <reference types="next/types/global" />
declare namespace NodeJS {
	export interface ProcessEnv {
		API_HOST: string;
		NEXT_PUBLIC_API_HOST: string;
	}
}
