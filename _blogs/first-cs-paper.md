---
layout: blog
date: 2024-03-15
title: "Writing Your First CS Workshop Paper"
tags: ["Computer Science", "Research", "Writing"]
description: "Some tips on writing your first computer science research paper."
---

*These are unorganized thoughts I had while giving feedback to high school and undergrad students who were writing their first paper for a workshop. If you have never written a CS research paper, you might find this useful.*

#### Starting Point
A good starting point is to pick one of the papers you are building on top of and use that as reference for writing. An initial worry is that if your writing ends up resembling the paper you picked. Don't worry about that because as you are writing, you will get more ideas on how to differentiate.

For the paper you select, you want to ensure top quality. Two good rules of thumb are the paper should be from (a) a [top CS conference](https://chatgpt.com/share/68ac0371-2b94-8007-9bb4-42520250d0cb) (b) If possible, also from a top lab (Stanford, CS, MIT) or a lab renowned in the area (e.g Berkeley in Systems or UIUC in PL). Use [CS rankings](https://csrankings.org/#/index?all&us) for the latter.

**LaTeX.** LaTeX is the domain-specific language you will likely be using to write your papers. It can be particularly annoying to deal with. The good news is that ChatGPT excels at LaTeX syntax help and troubleshooting compilation errors, and I would highly recommend using it while writing it. Also linking some beginner blogs, which may be useful to initial users of LaTeX - [Basic LaTeX tips](https://data-mining.philippe-fournier-viger.com/useful-latex-tricks-for-writing-research-papers/), [Using math in LaTeX](https://fanpu.io/blog/2023/latex-tips/#align-environment-for-multiline-equations). Additionally, install Grammarly Plugin.


### Writing Process & Strategy

**Be verbose in your 1st draft, and then cut.** It is ok to be verbose in your first draft. Provide as much information as possible to yourself and anyone who will edit it. Generally, you want to be more concise and clear in your later iterations.

**Clarity.** Once you have the first draft, prioritize clarity above everything else. The one test you can do is to make sure that your writing is clear at the bare minimum to you. This seems obvious, but something a lot of people forget while writing. For instance, the following 

*Each website was evaluated using developer tools to determine its eligibility for one of the six categories. This classification was essential to analyze how the tools perform as complexity increases and to observe tool failure thresholds.*

This is an unclear and unsubstantiated claim because it is not mentioned how the tools were used or applied.

**Write one section at a time.** After writing a section, ask for feedback after each section. The feedback will likely be so much that you may need to rewrite the full section. This is ok and expected. The general order can be: Introduction, Related Work, Experiment Setup, Results, Discussion. 

**Section-wise feedback.** There are a couple of sections that generally have a similar structure across most CS papers:

- **Introduction** is to clearly define the motivation, giving a brief overview of the threat model, explaining the key intuition of the methodology, and highlighting the main results.
- **Related Work.** A good related work does two things: give the reader a broad classification of the related concepts, and importantly, point out the limitations/gaps which our method tries to address.
- **Threat Model.** This is a security specific section. A good threat model is a clear and concise description of the threats, the actor that introduces the threat, the assumptions and the impact of the threat. 


### Images
Almost certainly in CS papers, there will be an image in the introduction which shows your main intuition/workflow. This image is important because this is likely the first visual representation of your intuition that the reviewers will have. A good and professional impression here makes a huge difference.

It is always hard and time-consuming to draw this image from scratch (even for the most experienced researchers), so if your first image gets a lot of feedback from your professor – this is ok. For instance, this is an example of a first image -

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXciunpmKZjtMDHmpAgx9jv1JZSatfCcmSOmhbXbD7HDa0LnOjReTlX-X2ieKpvv4_m3JMm8PVChNEmbgMZrP1mbYQvB7pZD0K1IcXJUDCSnpHO6myUvasW08LpSCQkHAVVsPMO19g?key=f_1VvEjoqCBdMWdlay0M4w)

**Some feedback to improve this**
- Include clear headings in each box and structure the information inside the boxes so that it is easy to read
- Use consistent and meaningful color schemes - limit yourself to 2-3 colors maximum and ensure each color has a purpose
- Simplify language throughout - "Validate the output and results" becomes simply "Validation"
- Structure information hierarchically with main headings and supporting bullet points
- Consider using appropriate icons or emojis depending on your paper's context

You can find the final draft of the main workflow image here - [AI Crawler](https://docs.google.com/drawings/d/1pvXCmqBE2zJVMVA6ESbiKwCY7IIRTCFihs0bgMX63po/edit?usp=sharing). Feel free to copy it.

Note - Make sure you label the images and tables you create and mention them in the main text `\label{sec:<img_name>}`.

**Tools.** For drawing figures, I recommend using Google Drawings over [draw.io](http://draw.io) - but both are fine. I also strongly recommend exporting the image as a PDF - it maintains the quality of the original image better.


### LLM usage
I would discourage using LLMs to write your first draft, especially if you are writing your first research paper. The whole point of doing this exercise is to develop YOUR style of writing, which is also a way of thinking. Using LLM to do ALL your writing will diminish this. If you really want to do this:
- **First draft** - Write a first draft of the idea. This may be broken sentences/English, just the ideas should be there, and there should be some resemblance of a style and flow. Then use an LLM to polish it up but not changing the content too much. One way to do this is to prompt the LLM to make minimal changes while making sure the grammar is correct, the style and flow is retained.

- **Telltale signs** - If you use LLM, make sure your writing does NOT have obvious telltale signs of AI - too many em dashes, "it's not just X, it's Y", overly verbose sentences – these will likely evolve, so no point in mentioning all of these, but reviewers are experienced researchers who have read hundreds of papers in the field so they recognize these patterns.
  