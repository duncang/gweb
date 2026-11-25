---
layout: default
title: Home
---

# Blog

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url | relative_url }})

<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>

{{ post.excerpt }}
{% endfor %}
