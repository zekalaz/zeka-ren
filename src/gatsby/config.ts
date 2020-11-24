import path from 'path';

export const rootDir = path.join(__dirname, '../../');

const siteMetadata = {
    title: `Zeka 的记事本`,
    description: `分享不值得纪念的东西`,
    author: `@zeka`,
};

const plugins: MyPlugin[] = [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-json`,
    `gatsby-plugin-netlify-cms`,
    {
        resolve: `gatsby-plugin-layout`,
        options: {
            component: require.resolve(`${rootDir}/src/layout/layout.tsx`),
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `audio`,
            path: `${rootDir}/stuff/audio`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `friends`,
            path: `${rootDir}/stuff/friends`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `diary`,
            path: `${rootDir}/stuff/diary`,
        }
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                {
                    resolve: `gatsby-remark-prismjs`,
                    options: {
                        // Class prefix for <pre> tags containing syntax highlighting;
                        // defaults to 'language-' (e.g. <pre class="language-js">).
                        // If your site loads Prism into the browser at runtime,
                        // (e.g. for use with libraries like react-live),
                        // you may use this to prevent Prism from re-processing syntax.
                        // This is an uncommon use-case though;
                        // If you're unsure, it's best to use the default value.
                        classPrefix: "language-",
                        // This is used to allow setting a language for inline code
                        // (i.e. single backticks) by creating a separator.
                        // This separator is a string and will do no white-space
                        // stripping.
                        // A suggested value for English speakers is the non-ascii
                        // character '›'.
                        inlineCodeMarker: null,
                        // This lets you set up language aliases.  For example,
                        // setting this to '{ sh: "bash" }' will let you use
                        // the language "sh" which will highlight using the
                        // bash highlighter.
                        aliases: {},
                        // This toggles the display of line numbers globally alongside the code.
                        // To use it, add the following line in gatsby-browser.js
                        // right after importing the prism color scheme:
                        //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                        // Defaults to false.
                        // If you wish to only show line numbers on certain code blocks,
                        // leave false and use the {numberLines: true} syntax below
                        showLineNumbers: false,
                        // If setting this to true, the parser won't handle and highlight inline
                        // code used in markdown i.e. single backtick code like `this`.
                        noInlineHighlight: false,
                        // This adds a new language definition to Prism or extend an already
                        // existing language definition. More details on this option can be
                        // found under the header "Add new language definition or extend an
                        // existing language" below.
                        languageExtensions: [
                            {
                                language: "superscript",
                                extend: "javascript",
                                definition: {
                                    superscript_types: /(SuperType)/,
                                },
                                insertBefore: {
                                    function: {
                                        superscript_keywords: /(superif|superelse)/,
                                    },
                                },
                            },
                        ],
                        // Customize the prompt used in shell output
                        // Values below are default
                        prompt: {
                            user: "zeka",
                            host: "laz",
                            global: false,
                        },
                        // By default the HTML entities <>&'" are escaped.
                        // Add additional HTML escapes by providing a mapping
                        // of HTML entities and their escape value IE: { '}': '&#123;' }
                        escapeEntities: {},
                    },
                },
                {
                    resolve: `gatsby-remark-katex`,
                    options: {
                        // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
                        strict: `ignore`
                    }
                },
                {
                    resolve: `gatsby-remark-admonitions`,
                    options: {
                        customTypes: {
                            custom: {
                                keyword: "test",
                                emoji: '💻',
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>'
                            },
                        },
                        tag: ":::",
                        icons: "svg",
                    }
                },
            ]
        }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        },
    },
];

const config = {
    siteMetadata,
    plugins
}

export default config;

interface PluginWithOptions {
    resolve: string,
    options?: {}
}

type MyPlugin = string | PluginWithOptions;
