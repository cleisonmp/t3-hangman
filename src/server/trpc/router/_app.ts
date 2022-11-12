import { router } from '../trpc'
import { defineRouter } from './define'

export const appRouter = router({
  define: defineRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
