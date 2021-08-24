---
id: deployment
title: Deploying a Tapestry Pipeline
slug: "/deployment"
hide_table_of_contents: true
---

## Prerequisites:

- Snowflake Account (`deploy`/`kickstart`)
- Zoom Account (`kickstart`)
  - A Zoom account with the paid webinar add-on is required to sync data about your webinar registrants
  - [access Zoom API key article](https://devforum.zoom.us/t/finding-your-api-key-secret-credentials-in-marketplace/3471)
- Salesforce Account (`kickstart`)
  - Either a Salesforce developer account (only allowed for non-production/commerical use) or a paid account is required
    - (the free trial may not allow API access); so this is not a good option
  - Helpful Resources
    - Tutorial Video to set-up account and access refresh token (required by `kickstart`)
      - this video also shows you how to access the `access token`
      - but for kickstart all you is the refresh token along with your client id (consumer key) and consumer secret(client secret)
    - [access salesforce token article](https://medium.com/@bpmmendis94/obtain-access-refresh-tokens-from-salesforce-rest-api-a324fe4ccd9b)
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
