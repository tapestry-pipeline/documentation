---
id: management-maintenance
title: Management & Maintenance
slug: "/management-maintenance"
hide_table_of_contents: true
---

## `tapestry start-server`

- Launches Tapestry dashboard UI

**Note:** Both `deploy` and `kickstart` will automatically launch your Tapestry dashboard upon successful deployment. Use `start-server` to launch your dashboard otherwise.

## `tapestry rebuild`

Specific to the syncing phase of the pipeline. While most updates to Airbyte can be done right in their UI, Grouparoo’s dashboard is mainly for application visibility and observance. In order to add, remove, or update any sources or destinations, changes need to be made to the configuration files in your local Grouparoo directory.

- Awaits confirmation from user for any changes made to configuration files
- Rebuilds Grouparoo Docker image locally
- Pushes local Grouparoo image to ECR
- Updated Cloudformation stack
