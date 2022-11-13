import { z } from 'zod'
import { normalizeString } from '../../../utils/normalizeString'

import { router, publicProcedure } from '../trpc'

const filterResults = (meanings: string[], word: string) => {
  for (const meaning of meanings) {
    if (!normalizeString(meaning).toLowerCase().includes(word.toLowerCase())) {
      return meaning
    }
  }
  return 'Could not get word info'
}

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

          const apiMeanings = result[0]?.meanings[0]?.definitions
          //result[0]?.meanings[0]?.definitions[0]?.definition

          if (result[0]?.meanings[0]?.definitions?.length > 0) {
            type ApiDefinitionsType = { definition: string }

            definition = filterResults(
              apiMeanings.map(
                ({ definition }: ApiDefinitionsType) => definition,
              ),
              word,
            )
          } else {
            definition = 'Could not get word info'
          }
        }
        if (language === 'PT') {
          const result = await fetch(
            `https://significado.herokuapp.com/${word}`,
          ).then((res) => res.json())

          //definition = result[0]?.meanings[0] ?? 'Could not get word info'

          if (result[0]?.meanings?.length > 0) {
            type ApiDefinitionsType = { meanings: string[] }
            const meanings = result
              .map(({ meanings }: ApiDefinitionsType) => meanings)
              .flat(Infinity)

            definition = filterResults(meanings, word)
          } else {
            definition = 'Could not get word info'
          }
        }
      }

      return {
        definition,
      }
    }),
})
