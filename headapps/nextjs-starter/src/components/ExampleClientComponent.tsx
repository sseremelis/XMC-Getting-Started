import * as FEAAS from '@sitecore-feaas/clientside/react';

export default function ExampleClientsideComponent(props: {
  title: string;
  author: string;
  genre: string;
  publication_year: number;
  isbn: string;
  bold: boolean;
}) {
  return (
    <>
      <h2>Hybrid</h2>
      <dl style={props.bold ? { fontWeight: 'bold' } : {}}>
        <dt>Rendered on</dt>
        <dd>{typeof window != 'undefined' ? 'Clientside' : 'Server'}</dd>
        <dt>Data</dt>
        <dd>
          {props.title} {props.author} / {props.genre}
        </dd>
        <dd>
          {props.publication_year} {props.isbn}
        </dd>
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
    title: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    genre: {
      type: 'string',
    },
    publication_year: {
      type: 'number',
    },
    isbn: {
      type: 'string',
    },
    bold: {
      type: 'boolean',
      title: 'Show text in bold weight',
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
