# Datocms Plugin Full Preview Links

A simple plugin that displays full preview links in the sidebar

## Configuration

When applying this plugin to your field, please insert the following settings:

![Plugin settings](https://github.com/FoxyGirl/datocms-plugin-full-preview-links/raw/master/docs/01-preview-links-settings.jpg)

1. URL prefix of your site is required.
2. Develop URL prefix of your test develop site is optional.
3. Alias for Model, which will be used instead of `Model ID` is optional.

The full preview links are created from `[URL prefix][locale][Model ID][slug]`
and look like **https://sitename.netlify.com/en/advice/first-advice**

## Using

The result of plugin working appears in the sidebar:

![Preview links in the sidebar](https://github.com/FoxyGirl/datocms-plugin-full-preview-links/raw/master/docs/02-preview-links.jpg)

1. Clicking on "Link on prod"/"Link on test server" opens these links in new tabs.
2. Clicking on the button shows/hides the full preview link (e.g. for copying or checking).
