import PubSubController from './PubSubController';
import { IPubSubConsumerFailedResponse, IPubSubConsumerPayload } from './PubSubHandler';
export abstract class PubSubResponseHandler {
  pubSubController: PubSubController;
  constructor(pubSubController: PubSubController) {
    this.pubSubController = pubSubController;
  }

  public abstract responseHandler(message: IPubSubConsumerPayload): Promise<any>;
  protected abstract handleError(messageData: IPubSubConsumerFailedResponse, message: IPubSubConsumerPayload): Promise<any>;
}