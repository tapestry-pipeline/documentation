---
id: prerequisites
title: Prerequisites
slug: "/prequisites"
hide_table_of_contents: true
---

- Node.js (v12+)
- NPM
- AWS Account
- AWS CLI configured locally
- Docker

You'll need to have the above accounts and tools before running any Tapestry commands. Being that Tapestry is an Node package, both Node.js and NPM must be installed on your machine. Tapestry also requires you to have an AWS account and the AWS CLI configured locally since it relies your local environment to spin up AWS resources. Finally, Tapestry uses Docker images and containers to run both the ingestion and syncing phases of your pipeline, and so you must have Docker installed and running on your machine.
