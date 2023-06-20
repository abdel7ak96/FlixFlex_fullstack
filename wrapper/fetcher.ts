const myHeaders = new Headers();

if(!process.env.NEXT_PUBLIC_MOVIE_DB_KEY) throw Error('MOVIE_DB_KEY environment variable is missing');

myHeaders.append(
  'Authorization',
  process.env.NEXT_PUBLIC_MOVIE_DB_KEY || ''
);

const requestOptions: RequestInit = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export default function fetcher(url: string) {
  return fetch(url, requestOptions);
}
