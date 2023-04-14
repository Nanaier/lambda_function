#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";

// Import the custom stack class
import { AssigmentStack } from "../lib/assigment-stack";

// Create a new CDK app
const app = new cdk.App();

// Instantiate a new instance of the custom stack class and pass in the app and stack name
const assigmentStack = new AssigmentStack(app, "AssigmentStack");