/** Declaration file generated by dts-gen */

export function addConnectionCheck(name: any, connectionCheck: any): void;

export function createNodeHttpHealthCheckServer(options?: any): any;

export function exposeHealthEndpoint(
  server: any,
  endpoint: any,
  framework: any
): void;

export function generateRequestListener(options: any): any;

export function resetConnectionCheck(): void;

export namespace checks {
  function checkMongoDbConnection(dbConnection: any): any;

  function checkRedisConnection(redisClient: any): any;
}