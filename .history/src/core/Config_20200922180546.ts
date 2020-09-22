export default class Config {
  // 应用ID
  appId: String;
  constructor(settings: any) {
    this.appId = settings.appId;
  }
}
