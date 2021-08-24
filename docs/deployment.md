---
id: deployment
title: Deploying a Tapestry Pipeline
slug: "/deployment"
hide_table_of_contents: true
---

## Prerequisites:

- Snowflake Account (`deploy`/`kickstart`)
- Zoom Account (`kickstart`)
- Salesforce Account (`kickstart`)
- Mailchimp Account (`kickstart`)

You have a choice between two commands for the pipeline deployment process. The `deploy` command will configure and launch a full user data pipeline equipped with Airbyte for the ingestion tool, Snowflake as your data warehouse, Grouparoo as the syncing tool, and a number of AWS resources needed to host and connect these tools to complete the pipeline.

The `kickstart` command is similar in that it does everything deploy does, but it also configures two Airbyte sources (Zoom and Salesforce) and a Grouparoo destination (Mailchimp).

Regardless of which command you choose, note that a Snowflake account is required for both `deploy` and `kickstart`.

## `tapestry deploy`

- Tapestry prompts you for your Snowflake credentials
- AWS resources for ingestion phase (Airbyte) are provisioned
- Snowflake is configured as an Airbyte destination
- AWS resources for syncing phase (Grouparoo) are provisioned
- Snowflake is configured as a Grouparoo source

## `tapestry kickstart`

- Tapestry prompts you for your Snowflake credentials
- AWS resources for ingestion phase (Airbyte) are provisioned
- Snowflake is configured as an Airbyte destination
- Zoom and Salesforce are configured as Airbyte sources
- User is prompted to follow instructions for DBT setup found [here](https://github.com/tapestry-pipeline/dbt#readme)
- AWS resources for syncing phase (Grouparoo) are provisioned
- Snowflake is configured as a Grouparoo source
- Mailchimp is configured as a Grouparoo destination
