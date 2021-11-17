---
template: BlogPost
path: /pair-programming
date: 2018-07-02T07:31:40.362Z
title: 'Pair Programming'
thumbnail: /assets/2018-07-02-extreme-pair-programming.jpg
metaDescription: How to establish pair programming, benefits and challenges
---

As many people know, pair programming tends to be a good practice. However, it is not so often that it is actually used by every programmer. There is a lot of one-member team, also a misunderstanding or an undervalue commitment on this topic in a lot of industries (like TDD you can assume). Come on, you know this is not right. Take the basis, and share this habit with your team and/or your friends. 

> "Write all production programs with two people sitting at one machine." _Kent Beck_

Pair programming is like buying new shoes. First, you hesitate. You don't know where to find the good ones. Until you find them. Then you ask yourselves how you were able to live without them.

<div class="custom-images" style="max-width: 600px; margin: 40px auto 40px auto;">
	<img src="/assets/2018-07-02-extreme-pair-programming-benefits.jpg"></img>
</div>

## Pair styles

### Driver and Navigator

**Driver** conducts the tiny goals and is focused on programming stuff. 

> "A driver should always talk through what he is doing while doing it."

**Navigator** keeps an eye on higher tasks and focus on following the session roadmap. He reviews the code on-the-go, gives directions and shares thoughts. 

The idea is to keep two perspectives at one time: strategic and tactical. One observes, during the other make the concrete actions.

A common flow goes like:
- Start with a reasonnable task
- Agree on one tiny goal at a time
- Switch keyboard and roles regularly
- Park next steps, obstacles and ideas on sticky notes

<div class="custom-images" style="max-width: 400px; margin: 40px auto 40px auto;">
	<img src="/assets/2018-07-02-extreme-pair-programming-driver-navigator-a.png"></img>
</div>

### Ping Pong

Ideal for Test-Driven Development (TDD), when your task could be written in a test-driven way:
- "Ping": Developer A writes a failing test
- "Pong": Develop B writes the implementation that makes it pass
- Each "Pong": can be followed by refactoring the code together

<div class="custom-images" style="max-width: 400px; margin: 40px auto 40px auto;">
	<img src="/assets/2018-07-02-extreme-pair-programming-ping-pong-a.png"></img>
</div>

### Strong-Style Pairing

Ideal for knowledge transfer, the rule is simple:

> "For an idea to go from your head into the computer, it MUST go through someone else's hands".

Strong point here is to have an absolute trust in the navigator. Often a person with much more experience, when the driver is a novice (with language, tools, codebase...).

It is a very strong technique to apply: "learning by doing". As it is great for initial knowledge transfer, it must not be abused because pair programming is about switching roles after some time. A sign that the knowledge transfer worked is the ease out of the micro management mode.

<div class="custom-images" style="max-width: 600px; margin: 40px auto 40px auto;">
	<img src="/assets/2018-07-02-extreme-pair-programming-strong-style.png"></img>
</div>

### Pair Development

Pair Development is a collaborative mindset where you plan, research, explore and document your tasks and or user stories. To understand the problem, you will work with a pair and try to come up with a solution which will fit your approach.  

Define a list of questions that you need to answer, split up the questions among peers, and get back together after previously agreed upon timebox.

<div class="custom-images" style="max-width: 250px; margin: 40px auto 40px auto;">
	<img src="/assets/2018-07-02-extreme-pair-programming-pair-development.png"></img>
</div>

### Remote Pairing

Current internet broadcast and tools widely authorize the remote pair programming practices through [Visual Studio Live Share](https://visualstudio.microsoft.com/fr/services/live-share/) (for example). You can both edit a document at the same time, which can be also effective for the navigator to keep focus on the tasks while participating in it.  

There are a lot of tools available, such as **[CodeTogether](https://www.codetogether.com)** or [CodeWithMe](https://www.jetbrains.com/fr-fr/code-with-me/). One last difficulty may reside in the authorization of your security team to allow those connections, but hey, nothing good comes easy! And the remote pairing is one of the most powerful practice nowadays, so it really worth the efforts.  

<div class="custom-images" style="max-width: 500px; margin: 40px auto 40px auto;">
	<img src="/assets/2018-07-02-extreme-pair-programming-remote.png"></img>
</div>

### Going further with: Mob Programming

Mob Programming is a software development approach where the whole team works on the same thing, at the same time, in the same space, and at the same computer. With mob programming, the collaboration is extended to everyone on the team, while still using a single computer for writing the code and inputting it into the code base.

> "The basic concept of mob programming is simple: the entire team works as a team together on one task at the time. That is: one team – one (active) keyboard – one screen (projector of course)." - *Marcus Hammarberg, Mob programming – Full Team, Full Throttle*

## How to make pair programming a reality in your company?

From the casual perspective of an untrained eye, pair programming can easily be misinterpreted as a big waste of time. Two developers engaging in separate tasks would be able to accomplish twice the amount of work, right? Wrong. Because of the programming complexity, and human weaknesses, twice the production means twice errors in that case. Industry years of experience will learn people that doing pairs is not only a necessity, but a strategic decision to make and to dedicate with. Not only pair programming saves time (how many time will you loose fixing a bug in production?), but it will also ingeniously generate high-quality code and improve knowledge sharing and code ownership distribution.  

<div class="custom-images" style="max-width: 550px; margin: 40px auto 40px auto;">
	<img src="/assets/2018-07-02-extreme-pair-programming-crazy-situation.png"></img>
</div>

Starting projects with tandem, instead of letting solo developers which is the worst experience ever, involving an "anchor" which already knows a little or a lot on the project is a good way to start pair programming.  

Also, if it is not a cultural evidence of your organization, you can start small. Get the presentation in the link at the end of this article, and summarize the idea to your colleagues at the coffee machine for example. Then, without any more preliminary, search for a pair nearby and stick with him/her for an hour on a task. Then, repeat the process. 

> "Seeing is believing."

If your managers don't trust you on this topic at the beginning, they will soon understand how you improve the programming process and develop the collective intelligence in your area.

You are doing good! Keep it up!

[&rarr; Download Powerpoint Presentation](https://www.dropbox.com/scl/fi/d731obgnp7en6oophvlfg/About-Pair-Programming.pptx?dl=0&rlkey=1y9m3qr63zu4gu3vb9gryg5bv)

Sources:  

[On Pair Programming](https://martinfowler.com/articles/on-pair-programming.html#DriverAndNavigator)  
[Llewellyns Strong Style Pairing](https://llewellynfalco.blogspot.com/2014/06/llewellyns-strong-style-pairing.html)  
[Why we back Pair Programming](https://softwareplanetgroup.co.uk/why-we-back-pair-programming/)  
[Sarah Mei Twitter Status](https://twitter.com/sarahmei/status/877738639991611392)  
[Comprendre les avantages du Pair (et Mob) Programming](https://promyze.com/fr/avantages-pair-et-mob-programming/)  
[Pair Programming](https://codelikethis.com/lessons/agile/pair-programming)
