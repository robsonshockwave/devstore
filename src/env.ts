import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  APP_URL: z.string().url(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    'Environment validation error:',
    parsedEnv.error.flatten().fieldErrors
  );

  throw new Error('Environment validation error');
}

export const env = parsedEnv.data;
