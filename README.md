# gatsby-source-anilist

This is a Gatsby source plugin to pull data from the Anilist GraphQL API.  It is heavily based on the excellent gatsby-source-github (which I aslo use and cannot recommend enough) by AUTHOR_HERE, who as far as I know came up with this stategy of connecting graphql databases.  I modified this technique to work with the Anilist API with minimal changes.

# Install
TODO

# Usage
TODO

# Designing Queries
TODO

# Example

```javascript
{
  resolve: 'gatsby-source-anilist',
  options: {
    queries: [
      `
        {
          MediaListCollection(userId: 122315, type:ANIME) {
            lists {
              name
              entries {
                id
                media {
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                }
              }
              isCustomList
              isSplitCompletedList
              status
            }
          }
        }
      `
    ]
  }
},
```

Produces:

```graphql
{
  allAnilistMedialistcollection {
    edges {
      node {
        id
        lists {
          name
          entries {
            media {
              id
              title {
                romaji
                english
                native
                userPreferred
              }
            }
          }
          isCustomList
          isSplitCompletedList
          status
        }
      }
    }
  }
}
```