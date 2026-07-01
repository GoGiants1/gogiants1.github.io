---
layout: page
permalink: /repositories/
title: repositories
description: Selected GitHub repositories
nav: true
nav_order: 4
---

{% include repository/repo_card_styles.liquid %}

{% if site.data.repositories.github_users %}

## GitHub

<div class="repositories repository-grid">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% endif %}

{% if site.data.repositories.github_repos %}

## Selected Repositories

<div class="repositories repository-grid">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
