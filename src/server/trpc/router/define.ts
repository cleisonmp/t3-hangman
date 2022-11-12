import { z } from 'zod'

import { router, publicProcedure } from '../trpc'

export const defineRouter = router({
  getDefinition: publicProcedure
    .input(
      z.object({
        language: z.enum(['EN', 'PT']),
        word: z.string(),
      }),
    )
    .query(async ({ input: { language, word } }) => {
      let definition = ''

      if (word !== '') {
        if (language === 'EN') {
          const result = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
          ).then((res) => res.json())

          definition =
            result[0]?.meanings[0]?.definitions[0]?.definition ??
            'Could not get word info'
        }
        if (language === 'PT') {
          const result = await fetch(
            `https://significado.herokuapp.com/${word}`,
          ).then((res) => res.json())

          definition = result[0]?.meanings[0] ?? 'Could not get word info'
        }
      }

      return {
        definition,
      }
    }),
})
