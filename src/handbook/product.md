---
layout: layouts/handbook.njk
title: ideas42 Venture Studio Handbook - Product
---

## Product

The goal of this document is to paint a vivid picture of how we build technology projects for you, the reader. If we have not accomplished that as a whole or in individual sections, email Tyler at [tyler@ideas42ventures.com](mailto:tyler@ideas42ventures.com) and let him know.

This is how we build technology products. We use the principles and processes described here when making both long-term strategic decisions and day-to-day tactical decisions.

Note that Design and Engineering are within Product, not separate. This is by design. All Design and Engineering is in service of the products we build.

<figure>
  <img src="/images/handbook/team-structure-graphic.svg" alt="A representation of our team structure. A large circle to represent Product with two smaller, equal-size, overlapping circles to represent Design and Engineering.">
  <figcaption>The structure of our Product team. Design and Engineering are in service of the product. They also intersect. No one works in silos.</figcaption>
</figure>

### For Entrepreneurs

If you are thinking about applying to join the Studio or already a part of it, this is here to give as clear a picture as possible of how we’ll build products together. Every product development process is different, but they all have overlapping characteristics. We’ll use the principles, processes, and technology described here to bring your product to life.

### For Candidates

If you are thinking about applying to join the Studio or already in the interview process, this is here to give you as clear a picture as possible about our day to day work. And to give you an idea of the expectations we’ll have of you depending on your role.

### For Team Members

WIP

### Principles

These are a select few principles that we follow. They’re inspired and informed by others’ similar principles. Some specific lists we’ve taken inspiration from include, but are not limited to:

- [GOV.UK Design Principles](https://www.gov.uk/guidance/government-design-principles)
- [Calm Technology](https://calmtech.com)
- [GitLab Product Principles](https://about.gitlab.com/handbook/product/product-principles/#our-product-principles)

#### 1. Start with problems, not solutions

At every point in the product life cycle we must work towards defining, refining, and clearly communicating root problems. There must be a shared understanding of the problems we’re working to solve.

**If you don’t have a problem to solve, don’t work on solutions.**

#### 2. Do no harm

Before building any product feature we must first consider how it could cause or be used to cause harm to people. Nothing should be considered too far fetched, if we can think of a way to use our products to do harm, so will others.

**If it will do harm, don’t do it.**

#### 3. Accessibility is a requirement, not a feature

Accessible products are good for everyone. Everything we build must be as inclusive, legible, and readable as possible. Accessibility is not something we add on at the end, it’s the way we build.

**If something will break accessibility, pick something else.**

#### 4. Do one thing well

It’s better to do a single thing well than many things poorly. At every point in the product life cycle we must prioritize ruthlessly to stay focused on doing that one thing well.

**If the product or feature isn’t doing the single thing well, don’t do other things.**

#### 5. Iterate

Our first attempts will be wrong. Our second attempts may be wrong. Our third, our fourth, and so on may be wrong. That is what we need. Every iteration we make helps us learn more and get closer to an ideal solution.

**Can we ship a thing that doesn’t violate other principles that we can continue to improve? Do that.**

### Design

We follow the [Rule of Least Power](https://www.w3.org/2001/tag/doc/leastPower.html) when making all design decisions.

#### Tools

- **Pencil and paper**: Don’t forget about these, they are your friends. We sketch and draw ideas for fast iteration and sharing.
- **Figma**: This is our primary UI design software. We’ve chosen it over alternatives because it’s open by default.
- **Adobe Illustrator**: This is our preferred vector illustration tool. If you’re producing illustrations and need to share a working file, this is what we want.
- **Adobe Photoshop**: This is our preferred raster illustration tool. If you’re producing raster photo illustrations and need to share a working file, this is what we want.

#### Process

This a general design process that we follow for large and small projects. We apply these steps when building a first MVP of an entire product and also when building new features of an existing product. Some projects won’t require every one these steps, we often use a subset.

1. Define, refine, and communicate the root problem we’re working to solve
1. Produce static designs and prototypes in Figma
1. Present and get feedback on static designs
1. Iterate on static designs
1. Get more feedback on static designs as needed
1. Refine and organize static designs and prototypes
1. Further refine designs during implementation
1. Iterate on static designs as needed based on learnings during implementation

#### Design Reviews

WIP

### Engineering

We follow the [Rule of Least Power](https://www.w3.org/2001/tag/doc/leastPower.html) when making all engineering decisions.

#### Technology recommendations

The recommendations are not an attempt to say which technologies are the best. They are the ones that work best for **us**. They're what we have expertise and experience using. These recommendations may change over time as our team, and tech in general, changes.

##### Front-end recommendations

- **Browser native HTML, CSS, JavaScript**: We don’t use libraries, frameworks, or other abstractions unless there is a clear need for them.
- **Yarn**: We prefer this over npm. This is more about choosing a single tool than it is saying one is better than the other. We ignore npm’s package-lock.json file in most projects.
- **Eleventy**: For static sites. We have a starter template and numerous practical examples to help build most things you’ll need.
- **Netlify**: We use this to host all static sites. Static doesn’t mean non-interactive. Many of these have server-side driven interactions made possible via Netlify Functions or other APIs internal and third-party.
- **React**: When a project calls for it, this is our choice of JS UI library
- **React Native**: When a project calls for native iOS and Android apps, this is our choice of library.

##### Server-side recommendations

- **Python**: Our preferred language for server side code.
- **Django**: We build CRUD applications. We use Django because it’s very good at building and maintaining CRUD applications.
- **Flask**: Not all our applications are CRUD that necessitate Django. We use Flask for applications with fewer needs.
- **Node.js**: While Python is our preferred language for server side code, Node.js is ubiquitous and we use it in certain instances. We write Netlify Functions in Node.js and may spin up quick services in it as needed.
- **PostgreSQL**: Document storage or NoSQL approaches are tempting, but we don’t use them unless we determine they’re absolutely necessary. Postgres is boring and predictable. We like boring and predictable.
- **Heroku**: We’re building new products. That means they will have low usage and high iteration. Products of this age do not need the type of fine-grained control offered by using AWS, Google Cloud, etc directly. For us, it’s better to pay money to be able to spin up services quickly with the less amount of time spent on configuration as possible.
