"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3StaticStack = void 0;
const s3 = require("@aws-cdk/aws-s3");
const s3Deployment = require("@aws-cdk/aws-s3-deployment");
const cdk = require("@aws-cdk/core");
// import * as sqs from 'aws-cdk-lib/aws-sqs';
class S3StaticStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const myBucket = new s3.Bucket(this, "my-static-website-bucket", {
            publicReadAccess: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            websiteIndexDocument: "index.html"
        });
        const deployment = new s3Deployment.BucketDeployment(this, "deployStaticWebsite", {
            sources: [s3Deployment.Source.asset("/lib")],
            destinationBucket: myBucket
        });
    }
}
exports.S3StaticStack = S3StaticStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczNfc3RhdGljLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiczNfc3RhdGljLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLHNDQUFzQztBQUN0QywyREFBMkQ7QUFDM0QscUNBQXFDO0FBR3JDLDhDQUE4QztBQUU5QyxNQUFhLGFBQWMsU0FBUSxHQUFHLENBQUMsS0FBSztJQUMxQyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsMEJBQTBCLEVBQUU7WUFDL0QsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPO1lBQ3hDLG9CQUFvQixFQUFFLFlBQVk7U0FDbkMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxVQUFVLEdBQUcsSUFBSSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQ2hGLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLGlCQUFpQixFQUFFLFFBQVE7U0FDNUIsQ0FBQyxDQUFDO0lBRUwsQ0FBQztDQUNGO0FBZkQsc0NBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFjaywgU3RhY2tQcm9wcyB9IGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgczMgZnJvbSAnQGF3cy1jZGsvYXdzLXMzJztcbmltcG9ydCAqIGFzIHMzRGVwbG95bWVudCBmcm9tICdAYXdzLWNkay9hd3MtczMtZGVwbG95bWVudCc7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5cblxuLy8gaW1wb3J0ICogYXMgc3FzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zcXMnO1xuXG5leHBvcnQgY2xhc3MgUzNTdGF0aWNTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBteUJ1Y2tldCA9IG5ldyBzMy5CdWNrZXQodGhpcywgXCJteS1zdGF0aWMtd2Vic2l0ZS1idWNrZXRcIiwge1xuICAgICAgcHVibGljUmVhZEFjY2VzczogdHJ1ZSxcbiAgICAgIHJlbW92YWxQb2xpY3k6IGNkay5SZW1vdmFsUG9saWN5LkRFU1RST1ksICAgICAgIFxuICAgICAgd2Vic2l0ZUluZGV4RG9jdW1lbnQ6IFwiaW5kZXguaHRtbFwiXG4gICAgfSk7XG4gICAgY29uc3QgZGVwbG95bWVudCA9IG5ldyBzM0RlcGxveW1lbnQuQnVja2V0RGVwbG95bWVudCh0aGlzLCBcImRlcGxveVN0YXRpY1dlYnNpdGVcIiwge1xuICAgICAgc291cmNlczogW3MzRGVwbG95bWVudC5Tb3VyY2UuYXNzZXQoXCIvbGliXCIpXSxcbiAgICAgIGRlc3RpbmF0aW9uQnVja2V0OiBteUJ1Y2tldFxuICAgIH0pO1xuICAgIFxuICB9XG59XG4iXX0=