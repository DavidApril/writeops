import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import books from '@/content/books.json'

export function Books() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="books">
        Books
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {books.map((book) => (
          <div key={book.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {book.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {book.description}
            </p>
            <p className="mt-4">
              <Button href={book.href} variant="text" arrow="right">
                Write up
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
