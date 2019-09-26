import _ from 'lodash'

export default function component() {
    let meta = document.createElement('meta');
    meta.name = "description";
    meta.content = "This is a great SEO description";
    document.getElementsByTagName('head')[0].appendChild(meta);
    return "<p>Here's a paragraph</p>"
}