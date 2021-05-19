---
title: Kalle Westerling's Curriculum Vitae
hide:
#  - navigation
---

{{ bio.long }}

## Education

|  |  |
|--------|-------
| Ph.D. | **Theatre and Performance**, The Graduate Center, CUNY, New York (Expected May 2021)<br />_Graduate Certificate_, Women's and Gender Studies |
| M.A. | **Performance and Theatre Studies**, Stockholm University, Sweden (2006)

## Teaching

### Courses

{% for t in cv.courses %}
???{% if loop.index == 1 %}+{% endif %} teach "{{ t.title }} ({{ t.when }})"
    **{{ t.title }}** ({{ t.level }})  
    {{ t.description }}  
      
    _Where:_ {{ t.where }}  
    _When:_ {{ t.when }}
{% endfor %}

### Invited Lectures
<!--  -->
{% for t in cv.invited_lectures %}
???{% if loop.index == 1 %}+{% endif %} lecture "{{ t.title }} ({{ t.when }})"
    **{{ t.title }}** ({{ t.when }})  
    {{ t.description }}

    _Invited by_: {{ t.invitedby }}  
    _Presented at_: {{ t.where }}
{% endfor %}

## Lightning Talks

{% for t in cv.lightning_talks %}
???{% if loop.index == 1 %}+{% endif %} lightning-talk "{{ t.title }} ({{ t.when }})"
    {% if t.url %}[**{{ t.title }}**]({{ t.url }}){% else %}**{{ t.title }}**{% endif %} ({{ t.when }})  
    {{ t.description }}

    {% if t.invitedby %}_Invited by_: {{ t.invitedby }}  {% endif %}
    _Presented_: {{ t.when }}  
    _Presented at_: {{ t.event_name }} ({{ t.event }}), {{ t.where }}  
    _Organizer_: {{ t.organizer }}
{% endfor %}

## Professional Workshops Organized

{% for t in cv.workshops_organized %}
???{% if loop.index == 1 %}+{% endif %} workshops-organized "{{ t.title }} ({{ t.when }})"
    {% if t.url %}[**{{ t.title }}**]({{ t.url }}){% else %}**{{ t.title }}**{% endif %} ({{ t.when }})  
    {% if t.description %}{{ t.description }}  {% endif %}
    {% if t.type %}_Type_: {{ t.type }}  {% endif %}
    {% if t.invitedby %}_Invited by_: {{ t.invitedby }}  {% endif %}
    _Presented_: {{ t.when }}  
    _Presented at_: {{ t.event_name }} ({{ t.event }}), {{ t.where }}  
    {% if t.organizer %}_Organizer_: {{ t.organizer }}  {% endif %}
{% endfor %}

## Conference Presentations
<!-- title, panel, panel_type, url, event, event_name, where, when, description -->
{% for t in cv.conference_presentations %}
???{% if loop.index == 1 %}+{% endif %} conference-presentations "{{ t.title }} ({{ t.when }})"
    {% if t.url %}[**{{ t.title }}**]({{ t.url }}){% else %}**{{ t.title }}**{% endif %} ({{ t.when }})  
    {% if t.description %}{{ t.description }}  {% endif %}
    {% if t.type %}_Type_: {{ t.type }}  {% endif %}
    {% if t.invitedby %}_Invited by_: {{ t.invitedby }}  {% endif %}
    _Presented_: {{ t.when }}  
    _Presented at_: {{ t.event_name }} ({{ t.event }}), {{ t.where }}  
    {% if t.organizer %}_Organizer_: {{ t.organizer }}  {% endif %}
{% endfor %}

## Publications


### Monograph
<!-- title, publisher, where, when, description -->


### Book and Performance Reviews
<!-- type, book/performance, title, published_in, vol, no, month, year, pages, doi, special_issue -->



### Invited Book Chapters and Journal Articles
<!-- title, book, ed (list), city, publisher, year, description, journal, vol, no, pages -->


## Notable Blog Posts
<!-- title, url, site_title, date, description -->

## Artistic Projects
<!-- title, url, where, when, role, description, collaborators (list) -->

## Fellowships and Awards
<!-- name, from, when, description, url -->

## Professional Experience
<!-- title, employer, where, start_year, end_year, bullets, url -->

### Event Organizing
<!-- role, event_type, event, event_name, url, where, when, bullets -->

### Peer Review
<!-- for, type, where, start_year, end_year, url, bullets -->

## Elected Positions (Boards, Committees, etc.)
<!-- position, board, where, url, start_year, end_year -->

## Technological Skills
<!-- technology... -->

## Memberships
<!-- organization... -->

## Interviews
<!-- by, media, url, title, publication, date, show -->
