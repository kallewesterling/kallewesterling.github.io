---
layout: page
title: Mapping Drag
description: 
img: /assets/img/portfolio-mapping-drag.png
importance: 1
category: code snippets
---

<p class="lead">My current research examines boylesque, a contemporary genre of neo-burlesque performance, which I argue is a culmination of a history of a gender-nonconforming style of burlesque that stretches back through the 20th century. Engaging a speculative historiographic investigation of drag performers in burlesque history, in one of my dissertation chapters, I am pursuing research inquiries into historical data, attempting to find queer foundational structures in popular entertainment through social network analysis.</p>

“Mapping Female Impersonators in Billboard’s and Variety’s Archives” was funded through [a Connect New York (CNY) research grant in Summer 2018](https://connectny.commons.gc.cuny.edu/2018/08/20/kalle-westerling). With this funding, I was able to begin creating a dataset that linked drag and “pansy” performers in New York City to burlesque theatres and nightclubs in the 1920s–30s. The research was primarily based on the archives of Billboard and Variety as they exist in their entire runs in ProQuest’s Entertainment Archive database. I also started mapping theatres and other venues where such performers regularly appeared.

As I was browsing through the database, I was continuously blocked because ProQuest’s system perceived me as a bot causing too much traffic. To be able to sift through the search results in a database format without interruption, I constructed a script that created a local database consisting of the metadata from the thousands of articles in the search result files. During the grant’s research time, I was able to learn some foundational Python programming skills and wrote a program that used BeautifulSoup to traverse ProQuest’s search results and generated an easily navigable Pandas DataFrame: [github.com/kallewesterling/process-entertainment-archive](https://github.com/kallewesterling/process-entertainment-archive).

The tedious process made it clear that I should make available the entire dataset in a repository. Moving the data from my local storage to GitHub is still in progress because I have concerns with the privacy of the performers in the dataset. Regardless of whether they are still alive or not, there are prejudiced opinions about professions in art forms such as female impersonations, burlesque, and striptease. I want to make sure that the project provides some context to the data. The dataset, above all, will live in the digital component of my dissertation, which is still under construction: [github.com/kallewesterling/early-female-impersonators](https://github.com/kallewesterling/early-female-impersonators).
