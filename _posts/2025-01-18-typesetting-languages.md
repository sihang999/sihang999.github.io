---
layout: post
title: Three typesetting languages
# 注意时间格式，23年以上都得这个格式
date: 2025-01-17 08:57:00-0400
description:  The post will introduce three typesetting languages
#注意新的tags和categories在config.yml文件里添加，否则不会显示
tags: Typesetting
categories: code
featured: true
---

The post will introduce three typesetting languages.

## 1. Latex

### Intro
LaTeX is a mature typesetting language particularly well-suited for processing complex mathematical formulas and tables. The generated documents have high-quality typesetting, making it a popular choice for academic papers and publications.
### How to use?
I recommend the online application [Overleaf](https://www.overleaf.com/). It is easy to use without requiring any installations or dependencies. Overleaf also supports collaborative editing, allowing multiple people to work on the same document simultaneously. Additionally, the latest version includes Git functionality!

If you are a student, your university might have a partnership with Overleaf, granting you access to the Pro version for free. For instance, as a TUM student, I can use the [Overleaf LRZ](https://collab.dvb.bayern/display/TUMShareLaTeX) portal and log in with my TUM ID. This provides access to the Overleaf Pro version, along with various TUM-specific templates such as thesis, article, and report formats.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wirting-languages/tumTemplate.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## 2. Typst

### Intro

Typst is a emerging document typesetting language with a concise and user-friendly syntax. While it shares similarities with LaTeX, Typst is generally easier to learn and use.

### How to use?

Typst offers its own online application. Visit the official website [typst](https://typst.app/) to create an account and start using it. You can begin with templates or upload other files (e.g., DOC, Markdown, or LaTeX) to convert them into the Typst format. Typst also supports collaborative editing and Git integration.

## 3. Markdown

### Intro

Markdown (MD) is a lightweight markup language ideal for quickly writing structured documents such as blogs, technical reports, notes, and instructions. Its simplicity makes it easy to learn and widely adopted. For example, this post itself is written in Markdown.

### How to use?

Markdown is supported on multiple platforms (e.g., GitHub, GitLab, VSCode, Notion) and allows for direct rendering. If you want to edit Markdown files on your laptop (Windows system), you can download VSCode. Simply open a file with the .md extension in VSCode and start editing. You can use the integrated preview tool or install relevant plugins to view the rendered results.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wirting-languages/markdown.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

