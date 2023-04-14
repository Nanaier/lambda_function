import * as cdk from "aws-cdk-lib";
import * as events from "aws-cdk-lib/aws-events";
import * as targets from "aws-cdk-lib/aws-events-targets";
import { join } from "path";
import { Construct } from "constructs";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

// Define a new stack that inherits from the `cdk.Stack` class
export class AssigmentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    // Call the parent constructor to initialize the stack
    super(scope, id, props);

    // Define a new Lambda function that uses Node.js and TypeScript
    const myLambda = new NodejsFunction(this, "MyLambda", {
      entry: join(
        __dirname,
        "..",
        "services",
        "lambda-func",
        "lambda-function.ts"
      ),
      handler: "getPosts", // The name of the exported function in the entry file
    });

    // Create a new CloudWatch Events rule that triggers the Lambda function every hour
    const everyHourRateER = new events.Rule(this, "everyHourRateER", {
      schedule: events.Schedule.expression("rate(1 hour)"),
    });

    // Add the Lambda function as a target for the CloudWatch Events rule
    everyHourRateER.addTarget(new targets.LambdaFunction(myLambda));
  }
}
