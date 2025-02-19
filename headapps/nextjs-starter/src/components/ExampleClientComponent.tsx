import * as FEAAS from '@sitecore-feaas/clientside/react';

interface Book {
  title: string;
  author: string;
  genre: string;
  publication_year: number;
  isbn: string;
}

export default function ExampleClientsideComponent(props: { bold: boolean; books: Book[] }) {
  console.log('comp props', props);
  return (
    <>
      <h2>Hybrid</h2>
      <dl style={props.bold ? { fontWeight: 'bold' } : {}}>
        <dt>Rendered on</dt>
        <dd>{typeof window != 'undefined' ? 'Clientside' : 'Server'}</dd>
        <dt>Data</dt>
        {props.books
          ? props.books.map((book) => (
              <>
                <dt>
                  {book.title} {book.author} / {book.genre}
                </dt>
                <dd>
                  {book.publication_year} {book.isbn}
                </dd>
              </>
            ))
          : 'No data'}
      </dl>
    </>
  );
}

FEAAS.registerComponent(ExampleClientsideComponent, {
  name: 'hybrid',
  title: 'Hybrid server/client',
  description: 'Interactive UI with SEO-friendly fallback',
  thumbnail: 'https://feaasstatic.blob.core.windows.net/assets/thumbnails/byoc.svg',
  group: 'Examples',
  required: ['firstName'],
  properties: {
    bold: {
      type: 'boolean',
      title: 'Show text in bold weight',
    },
    books: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          author: { type: 'string' },
          genre: { type: 'string' },
          publication_year: { type: 'number' },
          isbn: { type: 'string' },
        },
      },
    },
  },
  ui: {
    title: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:placeholder': 'Write your first name',
    },
    bold: {
      'ui:widget': 'radio',
    },
  },
});
