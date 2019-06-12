# Datocms Plugin Full Preview Links

A simple plugin that displays full preview links in the sidebar

## Configuration

When applying this plugin to your field, please insert the following settings:

![Plugin settings](https://github.com/FoxyGirl/datocms-plugin-full-preview-links/raw/master/docs/01-preview-links-settings.jpg)

1. URL prefix of your site is required.
2. Develop URL prefix of your develop site is optional.

The full preview links are created from `[URL prefix][locale][Model ID][slug]`
and look like **https://sitename.netlify.com/en/advice/first-advice**

## Using

The result of plugin working appears in the sidebar:

![Preview links in the sidebar](https://github.com/FoxyGirl/datocms-plugin-full-preview-links/raw/master/docs/02-preview-links.jpg)

1. Clicking on preview link opens this link in new tab.
2. Clicking on the button shows/hides the full preview link (ex. for copying or checking).

## Development

Install all the project dependencies with:

```
yarn install
```

Add this plugin in development mode to one of your DatoCMS project with:

```
yarn addToProject
```

Start the local development server with:

```
yarn start
```

The plugin will be served from [https://datocms-plugin-datocms-plugin-full-preview-link.localtunnel.me/](https://datocms-plugin-datocms-plugin-full-preview-link.localtunnel.me/). Insert this URL as the plugin [Entry point URL](https://www.datocms.com/docs/plugins/creating-a-new-plugin/).

## Publishing

Before publishing this plugin, make sure:

- you've properly described any configuration parameters in this README file;
- you've properly compiled this project's `package.json` following the [official rules](https://www.datocms.com/docs/plugins/publishing/);
- you've added a cover image (`cover.png`) and a preview GIF (`preview.gif`) into the `docs` folder.

When everything's ready, just run:

```
yarn publish
```
