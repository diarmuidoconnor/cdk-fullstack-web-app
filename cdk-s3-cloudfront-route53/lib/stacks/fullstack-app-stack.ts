import * as route53 from "aws-cdk-lib/aws-route53";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import { Stack, StackProps, RemovalPolicy } from "aws-cdk-lib";
import { Construct } from "constructs";
import { AppAPI } from "../constructs/app-api";
import { FrontendApp } from "../constructs/frontend";
import { UserPool } from "aws-cdk-lib/aws-cognito";

type FullStackProps = StackProps & {
  certificate?: acm.Certificate;
  zone: route53.IHostedZone;
};

export class FullStackAppStack extends Stack {
  constructor(scope: Construct, id: string, props: FullStackProps) {
    super(scope, id, props);

    const appAPI = new AppAPI(this, "APIApp");

    new FrontendApp(this, "FrontendApp", {
      apiUrl: appAPI.apiUrl,
      certificate: props.certificate,
      zone: props.zone,
    });

  }
}
