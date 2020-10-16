export interface Repository {
  id: number;
  name: string;
}

export function getByUsername(username: string): Promise<Repository[]> {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}
