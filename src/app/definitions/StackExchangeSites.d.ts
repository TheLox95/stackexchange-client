export interface StackExchangeSites {
  items?: (StackExchangeSite)[] | null;
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  page: number;
}
export interface StackExchangeSite {
  aliases?: (string)[] | null;
  styling: Styling;
  related_sites?: (RelatedSitesEntity)[] | null;
  markdown_extensions?: (string)[] | null;
  launch_date?: number | null;
  open_beta_date?: number | null;
  site_state: string;
  high_resolution_icon_url: string;
  favicon_url: string;
  icon_url: string;
  audience: string;
  site_url: string;
  api_site_parameter: string;
  logo_url: string;
  name: string;
  site_type: string;
  twitter_account?: string | null;
  closed_beta_date?: number | null;
}
export interface Styling {
  tag_background_color: string;
  tag_foreground_color: string;
  link_color: string;
}
export interface RelatedSitesEntity {
  relation: string;
  api_site_parameter?: string | null;
  site_url: string;
  name: string;
}
