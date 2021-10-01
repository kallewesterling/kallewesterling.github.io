---
layout: page
permalink: /publications/
title: publications
description: this is a list of my publications
years: [2022, 2021, 2020, 2018, 2017, 2012, 2011, 2008, 2007, 2006, 2004]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
