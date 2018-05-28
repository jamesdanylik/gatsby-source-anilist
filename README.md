# gatsby-source-anilist

This is a Gatsby source plugin to pull data from the [Anilist GraphQL API](https://github.com/AniList/ApiV2-GraphQL-Docs).  It is heavily based on the excellent [gatsby-source-github](https://github.com/DSchau/gatsby-source-github) (which I aslo use and cannot recommend enough) by [Dustin Schau](https://github.com/DSchau), who as far as I know came up with this stategy of connecting graphql databases.  I modified this technique to work with the Anilist API with minimal changes.

# Install
```bash
npm install gatsby-source-anilist --save-dev
```

# Usage
```javascript
// In your gatsby-config.js
plugins: [
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
	...
]
```

Where queries is an array of valid graphql queries for Anilist.  These can be tested live in [AniList's GraphQL Explorer](https://anilist.co/graphiql).

# Querying Data

Returned results are added to Gatsby's GraphQL nodes with the renaming convention from the original gatsby-source-gtihub.  [See David's description here](https://github.com/DSchau/gatsby-source-github#the-algorithm) for more information.

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