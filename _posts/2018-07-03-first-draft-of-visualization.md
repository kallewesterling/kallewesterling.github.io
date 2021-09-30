---
layout: post
title: "First Draft of Visualization"
date: 2018-07-03 12:00:00
description: 
---

<p>I'm working towards a visualization of female impersonators and have produced a first, <em>really messy</em> visualization. That's OK, though. I like working under the principle of "shitty first drafts." (see <a href="https://wrd.as.uky.edu/sites/default/files/1-Shitty%20First%20Drafts.pdf" target="_blank">Anne Lamotte's text here</a>) </p>
<p>This is the first step I'm taking toward the Connect New York grant this summer, where I hope to "visualize the networks between [pansy] performers in [New York City's] burlesque and vaudeville theatres . . . It will also entail mapping the theatres and other venues where such performers regularly performed" (<a href="http://www.westerling.nu/blog/received-a-connect-new-york-fellowship/">read more here</a>). It is, of course, also part of my <a href="/dissertation/">dissertation research</a>.</p>
<p>Here it is:</p>
<p><a href="/static/2018/07/first-draft.png"><img class="img-fluid" height="665" src="/static/2018/07/first-draft-955x1024.png" width="620"/></a></p>
<p></p><div style="float:right;clear:both;"><em>Click the image to see an enlarged version of it.<br/> </em></div><div style="clear:both;"></div>
<p>Basically what I have done is that I have searched ProQuest's <em>Entertainment Industry Magazine Archive</em> and looked at all the articles mentioning any of the following search terms:</p>
<p></p><ul>
<p></p><li><code>"fem impersonator"</code> -- not "female impersonator" yet, see below.</li>
<p></p><li><code>"fem impersonation"</code></li>
<p></p><li><code>"fem impressionist"</code></li>
<p></p><li><code>"female impressionist"</code> -- interestingly a term really only used in British outlets until 1970s in the U.S.</li>
<p></p><li><code>"femme imp"</code></li>
<p></p><li><code>"femme impersonator"</code></li>
<p></p><li><code>"fem mimic"</code></li>
<p></p><li><code>"femme mimic"</code></li>
<p></p><li><code>"female mimic"</code></li>
<p></p><li><code>"dragqueen"</code> -- I haven't looked into "drag queen" and "female impersonator" as a search term yet because it would have expanded this search by thousands of articles. I will do so in the next step of this visualization.</li>
<p></p><li><code>"in drag"</code> -- only looked until March 1961 (arbitrarily chosen but it just ended up being too much information and beyond the scope of what I want to do).</li>
<p></p></ul>
<p>For each of these news articles, I wrote down the artists' names that were mentioned, and whichever group/company or production that they were performing in, and linked those to each of the theatres/nightclubs/physical venues where they appeared. I created a <a href="https://fileinfo.com/extension/tsv" rel="noopener" target="_blank">TSV file</a> based on this information, in the hope that I'll be able to use <a href="https://gephi.org/" rel="noopener" target="_blank">Gephi</a> at some point to map this all out. For the purposes of my short-term goal, however, of visualizing this small world of performance, I then mapped, manually (don't try this at home), all of those nodes using <a href="https://www.omnigroup.com/omnigraffle" rel="noopener" target="_blank">OmniGraffle</a>. This is why we've ended up with this mess of a visualization. But: as messy as this looks, I'm still able to grab nodes and drag them around.</p>
<p>Below the graph, you can see all the sources for the nodes and connections (edges).</p>
<p>Note that I have kept the unnamed artists and groups as an empty slot ("______") in the visualization to make sure that the lacking information is as visible as the available information. This, of course, isn't the whole truth: there is more lacking information than only those artists.</p>
<p>Next steps that I'd love to take:</p>
<p></p><ul>
<p></p><li>Obviously add the results from "drag queen" and "female impersonator" -- though I need to figure out a way to use some scraping to get the names out of these thousands of articles... I am working on a Python solution, and will post more about it here eventually.</li>
<p></p><li>Add more information using other archives</li>
<p></p><ul>
<p></p><li>for instance, I'd <em>LOVE</em> to find the entire run of <em>Broadway Brevities</em>, a publication that "hinted at the same-sex relationships or moral lapses of prominent industrialists and entertainment stars, and, in a remarkable series with the title Nights in Fairyland, described in detail the sites of gay and lesbian mingling in Manhattan." (<a href="https://willstraw.com/broadway-brevities-1916-1925/" target="_blank">Will Straw</a>) Some of the issues exist in <a href="https://archive.org/search.php?query=%22Broadway%20Brevities%22" target="_blank">the Internet Archive</a>, just not the parts that I'm really interested in.</li>
<p></p><li>I should also just broaden the search in ProQuest and include other newspaper sources. The problem is, to give you a preview of the problem that a search for <code>"female impersonator" OR "female impersonators" OR "female impersonation" OR "female impersonations</code> across the databases in ProQuest provided via my CUNY access, gives over 10,000 results, which means that the server cuts me off at results past 1934—i.e. only between 1841–1934, there are 10,000 newspaper articles available (note that this includes British sources like <em>The Stage</em>). That means that I have to go in chunks and download all the results.</li>
<p></p></ul>
<p></p><li>Geotag each of these cities and venues and map out these relationships geographically</li>
<p></p><li>Build a larger database, potentially with crowdsourcing capacity, so that you all can help me find more sources, mentions, etc. and that can run a d3 visualization based on the growing information in the database.</li>
<p></p></ul>