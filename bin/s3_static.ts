#!/usr/bin/env node
import 'source-map-support/register';
// import * as cdk from 'aws-cdk-lib';
import { S3StaticStack } from '../lib/s3_static-stack';
import * as cdk from '@aws-cdk/core';
const envOregon = { account: 'accnt_num_here', region: 'region_here' };

const app = new cdk.App();
new S3StaticStack(app, 'S3StaticStack', {env: envOregon});