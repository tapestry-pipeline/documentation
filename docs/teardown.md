---
id: teardown
title: Teardown
slug: "/teardown"
hide_table_of_contents: true
---

## `tapestry teardown`

- Most AWS resources for ingestion and syncing phases are completely torn down and deleted from your AWS account

**Note:** We say “most” AWS resources because we leave your S3 bucket and parameters in your Parameters Store intact so that you may retain access to this data even after your pipeline has been torn down.
