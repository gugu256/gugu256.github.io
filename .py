"""templates = ["blog", "contacts", "donating", "index.html"]

from markdownify import markdownify as tomd # from HTML to MD

open("projs.md", "w+").write(tomd(open("projects.html").read()))"""

from markdown import markdown as frmd # from MD to HTML

projs = frmd(open("projects.md").read())
projs = projs.replace("<a ", "<a target=\"_blank\" ")

open("projects.html", "w+").write(projs)

blog = frmd(open("blog.md").read())
blog = blog.replace("<a ", "<a target=\"_blank\" ")

open("articles.html", "w+").write(blog)