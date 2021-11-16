---
template: BlogPost
path: /git-flow-branching-model
date: 2013-07-21T08:35:30.125Z
title: 'Go with Git Flow'
thumbnail: /assets/2013-07-21-git-flow-b.jpg
metaDescription:
---

A Gitflow workflow is a published Git workflow design popularized by [Vincent Driessen](http://nvie.com/posts/a-successful-git-branching-model/) ([nvie](http://nvie.com/posts/a-successful-git-branching-model/)). The Gitflow workflow defines a strict branch creation model built around project delivery. This provides a solid framework for managing larger projects, in a constantly changing environment where code is integrated more and more quickly, without always knowing where it comes from.

<div class="custom-images" style="width: 700px; margin: auto;">
	<img src="/assets/2013-07-21-git-flow-general-scheme.png"></img>
</div>

Git flow provides command-line access to the power of Git, following the branch model described above. These shortcuts save developers valuable time while securing actions on the production pipeline(s).

Among the basic techniques to be rapidly deployed, the protection of the master branch as well as the implementation of systematic pull-requests will make it possible to reduce the scope of possible technical debts, improve communication and develop the skills of developers by sharing their experiences.

A pull-request guide could be find below, detailing the necessary little operations to perform great teamwork fast as lightning:

`video: /assets/2013-07-21-git-flow-pull-request.mp4`

Deployments will be able to be quickly rolled back, made possible by the practice of exhaustive traceability between the time tasks are assigned, up to how they are processed, through one or two refactoring.

Among the industry models that may be of interest to a small to medium-sized enterprise project or structure, the V-Next industry model may be appropriate in the first place. The important thing behind Git’s practice is to always have a working version on a branch of its tree, if possible on master.

Hotfix management is live, allowing major patches to be delivered quickly to production without users noticing. Different deployment models are possible depending on the context of the project.

Do you have any questions? Are you blocked by a Git-related operation? Don't hesitate to get in touch with me I will be glad to support you on those tasks.