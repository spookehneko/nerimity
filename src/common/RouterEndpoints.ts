export default {

  SERVER_MESSAGES: (serverId: string, channelId: string) => `/app/servers/${serverId}/${channelId}`,
  
  SERVER_SETTINGS_INVITES: (serverId: string) => `/app/servers/${serverId}/settings/invites`,
  
  EXPLORE_SERVER_INVITE: (inviteId: string) => `/app/explore/servers/invites/${inviteId}`,
  EXPLORE_SERVER_INVITE_SHORT: (inviteId: string) => `/i/${inviteId}`,
  
  INBOX: () => '/app/inbox',
  INBOX_MESSAGES: (channelId: string) => `/app/inbox/${channelId}`,
}
