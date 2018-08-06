import { VideoUpload } from '../graphql/generated/prisma';
import logger from '../util/logger';
import downloadController from './VideoDownload/VideoDownloadPubSubController';
import renderController from './VideoRender/VideoRenderPubSubController';
import thumbnailController from './VideoThumbnail/VideoThumbnailPubSubController';

export const publishDownloadJob = async(upload: VideoUpload) => {
  const dataBuffer = getBuffer(upload);
  try {
    const messageId = await downloadController.downloadTopic.publisher().publish(dataBuffer);
    logger.info(`Published download message for video (Video: ${upload.id}, Message: ${messageId})`);
    return messageId;
  } catch (err) {
    logger.error(`Error publishing download job ${err}`);
    throw err;
  }
};

export const publishRenderJob = async (upload: VideoUpload) => {
  const dataBuffer = getBuffer(upload);
  try {
    const messageId = await renderController.renderTopic.publisher().publish(dataBuffer);
    logger.info(`Published render message for video (Video: ${upload.id}, Message: ${messageId})`);
    return messageId;
  } catch (err) {
    logger.error(`Error publishing render job ${err}`);
    throw err;
  }
};

export const publishThumbnailJob = async (upload: VideoUpload, timestamp: Number) => {
  const request = { upload, timestamp };
  const dataBuffer = getBuffer(request);
  try {
    const messageId = await thumbnailController.thumbnailTopic.publisher().publish(dataBuffer);
    logger.info(`Published thumbnail message for video (Video: ${upload.id}, Message: ${messageId})`);
    return messageId;
  } catch (err) {
    logger.error(`Error publishing render job ${err}`);
    throw err;
  }
};

const getBuffer = (obj: any) => { return Buffer.from(JSON.stringify(obj)); };
