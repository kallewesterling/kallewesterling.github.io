---
layout: page
title: Social Media Research
description: 
img: /assets/img/portfolio-social-media.png
importance: 1
category: code snippets
---

<p class="lead">In my research, I have inquired into the changing art forms of boylesque and drag in contemporary social media platforms, particularly the fraught tension between social media platforms and artists working in the overlap between burlesque, drag, and striptease.</p>

To facilitate these analyses, I have built some rudimentary understanding of libraries that help visualize and analyze related data points such as NetworkX, Matplotlib, and seaborn. The data points come from public post data aggregated around specific hashtags on Twitter and Instagram.

However, since Instagram notoriously closed down their API, I had to write my own package for accessing the JSON information available in the web rendering of the Instagram app, available on GitHub: [github.com/kallewesterling/instagram](https://github.com/kallewesterling/instagram).

To access data from Twitter, I have long used Martin Hawksey’s TAGS as a tool to download tweets continuously. However, TAGS generates a static format without the complete information needed to create the datasets for my research. I am in the progress of moving from TAGS into my own package, which I am currently building as in two parts. The first uses the tweet IDs from the TAGS documents to download all of the tweets and the user information using TweetScraper: [github.com/kallewesterling/process-tags](https://github.com/kallewesterling/process-tags). The second generates content based on a Twitter username using Tweepy and an internally constructed cache system: [github.com/kallewesterling/twitter-analysis](https://github.com/kallewesterling/twitter-analysis).

