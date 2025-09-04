---
layout: about
title: About
permalink: /
subtitle: PhD @ <a href="https://cs.illinois.edu/">UIUC</a>

profile:
  align: right
  image: formal_profile.JPG
  image_cicular: true # crops the image to make it circular
  alt: "Nirav Diwan"

news: true  # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page
---

<p>
I am a second-year Ph.D. student in Computer Science at the [University of Illinois Urbana-Champaign](https://cs.illinois.edu/), advised by [Prof. Gang Wang](https://gangw.cs.illinois.edu/) in the [Siebel School of Computing and Data Science](https://siebelschool.illinois.edu/). My research focuses on the intersection of Security & Privacy and Machine Learning, with particular emphasis on practical adversarial attacks against large language models (LLMs).
</p>

<p>
Recently, I co-led the creation of [PurpCode](https://purpcode-uiuc.github.io/), the winning project of the Amazon Nova AI Challenge 2025. PurpCode is the first reasoning model for cybersafety.
</p>

<p id="collapsible">
<b>Collaboration.</b> This is an active call for collaboration1 Feel free to send me an email a[email](nirdiwan@gmail.com) with a subject line "[Research Idea] or [Research Collaboration]" to talk about ideas, projects, or research questions. 
</p>

<p id="collapsible">
Previously, I completed my research-track M.S. at the [University of Illinois Urbana-Champaign](https://cs.illinois.edu/). Prior to this, I did my B.Tech. degree in Computer Science from [IIIT Delhi](https://www.iitg.ac.in/) in June 2021/ I was a member of [LCS2](https://lcs2.in/) and the [Complex Systems Lab](https://cosylab.iiitd.edu.in/).  Previously, I worked on watermarking fine-tuned LLM-generated text (ACL Findings '21) with [Prof. Zubair Shafiq](https://web.cs.ucdavis.edu/~zubair/) (UC Davis) and [Prof. Tanmoy Chakraborty](https://tanmoychak.com/) (IIT Delhi).
</p>

<p id="collapsible">
<b>Industry experience.</b> I interned at LG AI Research in summer 2024 with the Bi-lingual LLM team. I worked on alignment algorithms for LLMs with [Tolga Ergen](https://tolgaergen.github.io/) and [Honglak Lee](https://web.eecs.umich.edu/~honglak/). Prior to this, I interned at [Ema Unlimited](https://ema.co/) in summer 2023 with the Generative AI Team on the problem of converting natural language intents to SQL Commands. I have also worked as a Natural Language Processing (NLP) Engineer at [Prodigal Technologies](https://www.prodigaltech.com/) for a year, where I focused on problems of Dialogue State Tracking (DST), Information Retrieval (IR), and optimizing search queries with a specific focus on finance-related conversations.
</p>

<script>
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('#collapsible').forEach((block, index) => {
    // Wrap block content in a container
    const wrapper = document.createElement("div");
    wrapper.classList.add("collapsible", "collapsed");
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);

    // Add toggle link
    const toggleLink = document.createElement("a");
    toggleLink.href = "javascript:void(0)";
    toggleLink.textContent = " Read more »";
    toggleLink.className = "toggle-link";
    wrapper.insertBefore(toggleLink, block);

    // Toggle behavior
    toggleLink.addEventListener("click", function() {
      if (wrapper.classList.contains("collapsed")) {
        wrapper.classList.remove("collapsed");
        wrapper.classList.add("expanded");
        toggleLink.textContent = " Read less «";
      } else {
        wrapper.classList.remove("expanded");
        wrapper.classList.add("collapsed");
        toggleLink.textContent = " Read more »";
      }
    });
  });
});
</script>
