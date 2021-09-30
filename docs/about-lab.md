
## Testing

{% set item_count = cv.courses | length %}
{% for t in cv.courses %}{% if loop.index == 1 %}
<table><thead>
<tr>
<th role="columnheader">Information</th>
<th role="columnheader">Level</th>
<th role="columnheader">Where</th>
<th role="columnheader">When</th>
</tr>
</thead>
<tbody>
{% endif %}
    <tr>
        <td>
            <p><strong>{{ t.title}}</strong></p>
            <p>{{ t.description }}</p>
        </td>
        <td>{{ t.level }}</td>
        <td>{{ t.where }}</td>
        <td>{{ t.when }}</td>
    </tr>
{% if loop.index == item_count %}
</tbody>
</table>
{% endif %}
{% endfor %}