export interface GithubRepo {
  id: number;
  name: string;
}

export function getReposOfUser(githubUsername: string): Promise<GithubRepo[]> {
  return fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then((response) => response.json())
    .catch(console.error);
}
