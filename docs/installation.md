---
id: installation
title: Installation
slug: "/installation"
hide_table_of_contents: true
---

## Installing Tapestry

```sh
npm i -g tapestry-pipeline
```

**Note:** With the exception of `init`, all Tapestry commands should be run from the root directory of your Tapestry project.

## Tapestry Commands

The following commands are provided to you upon installation:

| Command                 | Description                                                                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tapestry init`         | Gathers project information and provision necessary project folders and template files.                                                                                |
| `tapestry deploy`       | Deploys a full data pipeline including Airbyte for ingestion and Grouparoo for syncing, both provisioned on AWS resources and connected to a Snowflake data warehouse. |
| `tapestry kickstart`    | Deploys the same pipeline as `deploy`, but also includes configuration for Zoom and Salesforce as Airbyte sources and Mailchimp as a Grouparoo destination.            |
| `tapestry start-server` | Launches Tapestry UI dashboard locally on port 7777.                                                                                                                   |
| `tapestry rebuild`      | Rebuilds local Grouparoo image and pushes that udpdated image to user's ECR repository, updating the Grouparoo Cloudformation stack in the process.                    |
| `tapestry teardown`     | Kills pipeline ingestion and syncing by tearing down most of the provisioned AWS resources.                                                                            |
