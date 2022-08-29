import { useEffect, useState } from 'react';

interface Repo {
  id: string;
  name: string;
}

export function Example1() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState('');

  console.log('>>> render: App.tsx');

  const filteredItems = search.length
    ? repos.filter((repo) => {
        console.log('filter');
        return repo.name.includes(search);
      })
    : [];

  const repoList = filteredItems.length ? filteredItems : repos;

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      const response = await fetch(
        'https://api.github.com/users/phbarao/repos',
        { signal: abortController.signal }
      );

      const data = await response.json();
      setRepos(data);
    })();

    return () => abortController.abort();
  }, []);

  return (
    <div className="App">
      <p>{search}</p>

      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      {search.length && !filteredItems.length ? (
        <p>No items found</p>
      ) : (
        <ul>
          {repoList?.map((repo) => (
            <li style={{ textAlign: 'left' }} key={repo.id}>
              {repo.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
