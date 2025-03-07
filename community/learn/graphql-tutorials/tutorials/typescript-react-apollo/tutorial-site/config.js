const config = {
	"gatsby": {
		"pathPrefix": "/graphql/typescript-react-apollo",
		"siteUrl": "https://learn.hasura.io",
		"gaTrackingId": "UA-59768903-1"
	},
	"header": {
		"logo": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/logo.png",
		"logoLink": "https://learn.hasura.io",
		"title": "<a href='https://learn.hasura.io'>/ graphql </a><a href='https://learn.hasura.io/graphql/typescript-react-apollo'>/ typescript-react-apollo</a>",
		"githubUrl": "https://github.com/hasura/graphql-engine",
		"helpUrl": "https://discordapp.com/invite/vBPpJkS",
		"tweetText": "Check out this GraphQL course for React, Typescript developers by @HasuraHQ https://learn.hasura.io/graphql/typescript-react-apollo",
		"links": [{
			"text": "hasura.io",
			"link": "https://hasura.io"
		}],
		"search": {
			"enabled": true,
			"indexName": "learn-typescript-react-apollo",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/intro-to-graphql",
    		"/setup",
    		"/apollo-client",
    		"/codegen",
    		"/queries",
    		"/mutations-variables",
    		"/optimistic-update-mutations",
    		"/subscriptions",
    		"/realtime-feed",
    		"/what-next"
    	],
		"links": [
			{
			"text": "Hasura Docs",
			"link": "https://docs.hasura.io"
			},
			{
			"text": "GraphQL Docs",
			"link": "https://graphql.org/learn"
			}
		],
		"frontline": false,
		"ignoreIndex": true
	},
	"siteMetadata": {
		"title": "2 hour GraphQL course for React Typescript developers | Hasura",
		"description": "A concise and powerful tutorial that covers fundamental concepts of both GraphQL and using GraphQL in React + Typescript",
		"ogImage": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/twitter-card-typescript-react-apollo.png",
		"docsLocation": "https://github.com/hasura/graphql-engine/tree/master/community/learn/graphql-tutorials/tutorials/typescript-react-apollo/tutorial-site/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-typescript-react-apollo/typescript-favicon.png"
	},
};

module.exports = config;
