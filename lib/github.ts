export async function getContributions(
  username: string,
): Promise<Record<string, number>> {
  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { username } }),
    next: { revalidate: 3600 }, // cache for 1 hour, re-fetch in background
  });

  if (!res.ok) throw new Error("Failed to fetch GitHub contributions");

  const json = await res.json();
  const weeks =
    json.data.user.contributionsCollection.contributionCalendar.weeks;

  const history: Record<string, number> = {};
  for (const week of weeks) {
    for (const day of week.contributionDays) {
      history[day.date] = day.contributionCount;
    }
  }
  return history;
}
