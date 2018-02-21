import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StackExchangeSites, StackExchangeSite} from "../definitions/StackExchangeSites";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SitesService {
  constructor(private _http: HttpClient) {}

  get(): Observable<StackExchangeSite[]> {
    return Observable.of({
      items: [
        {
          aliases: [
            "http://www.stackoverflow.com",
            "http://facebook.stackoverflow.com"
          ],
          styling: {
            tag_background_color: "#E0EAF1",
            tag_foreground_color: "#3E6D8E",
            link_color: "#0077CC"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "meta.stackoverflow",
              site_url: "https://meta.stackoverflow.com",
              name: "Meta Stack Overflow"
            },
            {
              relation: "chat",
              site_url: "https://chat.stackoverflow.com",
              name: "Stack Overflow Chat"
            }
          ],
          markdown_extensions: ["Prettify"],
          launch_date: 1221436800,
          open_beta_date: 1217462400,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png",
          favicon_url:
            "https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png",
          audience: "professional and enthusiast programmers",
          site_url: "https://stackoverflow.com",
          api_site_parameter: "stackoverflow",
          logo_url: "https://cdn.sstatic.net/Sites/stackoverflow/img/logo.png",
          name: "Stack Overflow",
          site_type: "main_site"
        },
        {
          styling: {
            tag_background_color: "#F3F1D9",
            tag_foreground_color: "#444444",
            link_color: "#10456A"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "meta.serverfault",
              site_url: "https://meta.serverfault.com",
              name: "Meta Server Fault"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=serverfault.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["Prettify"],
          launch_date: 1243296000,
          open_beta_date: 1241049600,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/serverfault/img/apple-touch-icon@2.png",
          twitter_account: "ServerFault",
          favicon_url:
            "https://cdn.sstatic.net/Sites/serverfault/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/serverfault/img/apple-touch-icon.png",
          audience: "system and network administrators",
          site_url: "https://serverfault.com",
          api_site_parameter: "serverfault",
          logo_url: "https://cdn.sstatic.net/Sites/serverfault/img/logo.png",
          name: "Server Fault",
          site_type: "main_site"
        },
        {
          styling: {
            tag_background_color: "#FFFFFF",
            tag_foreground_color: "#1087A4",
            link_color: "#1086A4"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "meta.superuser",
              site_url: "https://meta.superuser.com",
              name: "Meta Super User"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=superuser.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["Prettify"],
          launch_date: 1250553600,
          open_beta_date: 1247529600,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/superuser/img/apple-touch-icon@2.png",
          twitter_account: "super_user",
          favicon_url:
            "https://cdn.sstatic.net/Sites/superuser/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/superuser/img/apple-touch-icon.png",
          audience: "computer enthusiasts and power users",
          site_url: "https://superuser.com",
          api_site_parameter: "superuser",
          logo_url: "https://cdn.sstatic.net/Sites/superuser/img/logo.png",
          name: "Super User",
          site_type: "main_site"
        },
        {
          styling: {
            tag_background_color: "#F7FDFF",
            tag_foreground_color: "#566E76",
            link_color: "#4E82C2"
          },
          related_sites: [
            {
              relation: "chat",
              site_url: "https://chat.meta.stackexchange.com",
              name: "Meta Stack Exchange Chat"
            }
          ],
          markdown_extensions: ["Prettify"],
          launch_date: 1246147200,
          open_beta_date: 1246147200,
          site_state: "normal",
          high_resolution_icon_url:
            "https://meta.stackexchange.com/content/Sites/stackexchangemeta/img/apple-touch-icon@2.png",
          favicon_url:
            "https://meta.stackexchange.com/content/Sites/stackexchangemeta/img/favicon.ico",
          icon_url:
            "https://meta.stackexchange.com/content/Sites/stackexchangemeta/img/apple-touch-icon.png",
          audience:
            "meta-discussion of the Stack Exchange family of Q&amp;A websites",
          site_url: "https://meta.stackexchange.com",
          api_site_parameter: "meta",
          logo_url:
            "https://meta.stackexchange.com/content/Sites/stackexchangemeta/img/logo.png",
          name: "Meta Stack Exchange",
          site_type: "main_site"
        },
        {
          aliases: ["http://nothingtoinstall.com"],
          styling: {
            tag_background_color: "#E2EDFA",
            tag_foreground_color: "#5D7A9C",
            link_color: "#426389"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "webapps.meta",
              site_url: "https://webapps.meta.stackexchange.com",
              name: "Web Applications Meta Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=webapps.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          launch_date: 1285874037,
          open_beta_date: 1278529200,
          closed_beta_date: 1277924400,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/webapps/img/apple-touch-icon@2.png",
          twitter_account: "StackWebApps",
          favicon_url: "https://cdn.sstatic.net/Sites/webapps/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/webapps/img/apple-touch-icon.png",
          audience: "power users of web applications",
          site_url: "https://webapps.stackexchange.com",
          api_site_parameter: "webapps",
          logo_url: "https://cdn.sstatic.net/Sites/webapps/img/logo.png",
          name: "Web Applications",
          site_type: "main_site"
        },
        {
          aliases: [
            "http://meta.nothingtoinstall.com",
            "http://meta.webapps.stackexchange.com"
          ],
          styling: {
            tag_background_color: "#EBEBEB",
            tag_foreground_color: "#666",
            link_color: "#333C43"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "webapps",
              site_url: "https://webapps.stackexchange.com",
              name: "Web Applications Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=webapps.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          open_beta_date: 1311274880,
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/webappsmeta/img/apple-touch-icon@2.png",
          favicon_url:
            "https://cdn.sstatic.net/Sites/webappsmeta/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/webappsmeta/img/apple-touch-icon.png",
          audience: "power users of web applications",
          site_url: "https://webapps.meta.stackexchange.com",
          api_site_parameter: "webapps.meta",
          logo_url: "https://cdn.sstatic.net/Sites/webappsmeta/img/logo.png",
          name: "Web Applications Meta",
          site_type: "meta_site"
        },
        {
          aliases: ["http://arqade.com", "http://thearqade.com"],
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#666",
            link_color: "#5A8F53"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "gaming.meta",
              site_url: "https://gaming.meta.stackexchange.com",
              name: "Arqade Meta"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=gaming.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          launch_date: 1286391600,
          open_beta_date: 1279134000,
          closed_beta_date: 1278529200,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/gaming/img/apple-touch-icon@2.png",
          twitter_account: "TheArqade",
          favicon_url: "https://cdn.sstatic.net/Sites/gaming/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/gaming/img/apple-touch-icon.png",
          audience: "passionate videogamers on all platforms",
          site_url: "https://gaming.stackexchange.com",
          api_site_parameter: "gaming",
          logo_url: "https://cdn.sstatic.net/Sites/gaming/img/logo.png",
          name: "Arqade",
          site_type: "main_site"
        },
        {
          aliases: [
            "http://meta.arqade.com",
            "http://meta.thearqade.com",
            "http://meta.gaming.stackexchange.com"
          ],
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#666",
            link_color: "#666666"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "gaming",
              site_url: "https://gaming.stackexchange.com",
              name: "Arqade"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=gaming.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          open_beta_date: 1315582136,
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/gamingmeta/img/apple-touch-icon@2.png",
          favicon_url:
            "https://cdn.sstatic.net/Sites/gamingmeta/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/gamingmeta/img/apple-touch-icon.png",
          audience: "passionate videogamers on all platforms",
          site_url: "https://gaming.meta.stackexchange.com",
          api_site_parameter: "gaming.meta",
          logo_url: "https://cdn.sstatic.net/Sites/gamingmeta/img/logo.png",
          name: "Arqade Meta",
          site_type: "meta_site"
        },
        {
          aliases: ["http://webmaster.stackexchange.com"],
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#1B8FBB",
            link_color: "#1C69A4"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "webmasters.meta",
              site_url: "https://webmasters.meta.stackexchange.com",
              name: "Webmasters Meta Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=webmasters.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["Prettify"],
          launch_date: 1286997420,
          open_beta_date: 1279220400,
          closed_beta_date: 1278615600,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/webmasters/img/apple-touch-icon@2.png",
          twitter_account: "StackWebmasters",
          favicon_url:
            "https://cdn.sstatic.net/Sites/webmasters/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/webmasters/img/apple-touch-icon.png",
          audience: "pro webmasters",
          site_url: "https://webmasters.stackexchange.com",
          api_site_parameter: "webmasters",
          logo_url: "https://cdn.sstatic.net/Sites/webmasters/img/logo.png",
          name: "Webmasters",
          site_type: "main_site"
        },
        {
          aliases: [
            "http://meta.webmaster.stackexchange.com",
            "http://meta.webmasters.stackexchange.com"
          ],
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#666666",
            link_color: "#3D3D3D"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "webmasters",
              site_url: "https://webmasters.stackexchange.com",
              name: "Webmasters Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=webmasters.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["Prettify"],
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/webmastersmeta/img/apple-touch-icon@2.png",
          favicon_url:
            "https://cdn.sstatic.net/Sites/webmastersmeta/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/webmastersmeta/img/apple-touch-icon.png",
          audience: "pro webmasters",
          site_url: "https://webmasters.meta.stackexchange.com",
          api_site_parameter: "webmasters.meta",
          logo_url: "https://cdn.sstatic.net/Sites/webmastersmeta/img/logo.png",
          name: "Webmasters Meta",
          site_type: "meta_site"
        },
        {
          aliases: ["http://seasonedadvice.com"],
          styling: {
            tag_background_color: "#FFF5E4",
            tag_foreground_color: "#847454",
            link_color: "#AB2020"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "cooking.meta",
              site_url: "https://cooking.meta.stackexchange.com",
              name: "Seasoned Advice Meta"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=cooking.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          launch_date: 1287084715,
          open_beta_date: 1279306800,
          closed_beta_date: 1278702000,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/cooking/img/apple-touch-icon@2.png",
          twitter_account: "StackCooking",
          favicon_url: "https://cdn.sstatic.net/Sites/cooking/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/cooking/img/apple-touch-icon.png",
          audience: "professional and amateur chefs",
          site_url: "https://cooking.stackexchange.com",
          api_site_parameter: "cooking",
          logo_url: "https://cdn.sstatic.net/Sites/cooking/img/logo.png",
          name: "Seasoned Advice",
          site_type: "main_site"
        },
        {
          aliases: [
            "http://meta.seasonedadvice.com",
            "http://meta.cooking.stackexchange.com"
          ],
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#666666",
            link_color: "#3D3D3D"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "cooking",
              site_url: "https://cooking.stackexchange.com",
              name: "Seasoned Advice"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=cooking.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/cookingmeta/img/apple-touch-icon@2.png",
          favicon_url:
            "https://cdn.sstatic.net/Sites/cookingmeta/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/cookingmeta/img/apple-touch-icon.png",
          audience: "professional and amateur chefs",
          site_url: "https://cooking.meta.stackexchange.com",
          api_site_parameter: "cooking.meta",
          logo_url: "https://cdn.sstatic.net/Sites/cookingmeta/img/logo.png",
          name: "Seasoned Advice Meta",
          site_type: "meta_site"
        },
        {
          styling: {
            tag_background_color: "#eeeeee",
            tag_foreground_color: "#444444",
            link_color: "#416D63"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "gamedev.meta",
              site_url: "https://gamedev.meta.stackexchange.com",
              name: "Game Development Meta Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=gamedev.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["MathJax", "Prettify"],
          launch_date: 1287695708,
          open_beta_date: 1279738800,
          closed_beta_date: 1279134000,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/gamedev/img/apple-touch-icon@2.png",
          twitter_account: "StackGameDev",
          favicon_url: "https://cdn.sstatic.net/Sites/gamedev/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/gamedev/img/apple-touch-icon.png",
          audience: "professional and independent game developers",
          site_url: "https://gamedev.stackexchange.com",
          api_site_parameter: "gamedev",
          logo_url: "https://cdn.sstatic.net/Sites/gamedev/img/logo.png",
          name: "Game Development",
          site_type: "main_site"
        },
        {
          aliases: ["http://meta.gamedev.stackexchange.com"],
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#666666",
            link_color: "#3D3D3D"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "gamedev",
              site_url: "https://gamedev.stackexchange.com",
              name: "Game Development Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=gamedev.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["MathJax"],
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/gamedevmeta/img/apple-touch-icon@2.png",
          favicon_url:
            "https://cdn.sstatic.net/Sites/gamedevmeta/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/gamedevmeta/img/apple-touch-icon.png",
          audience: "professional and independent game developers",
          site_url: "https://gamedev.meta.stackexchange.com",
          api_site_parameter: "gamedev.meta",
          logo_url: "https://cdn.sstatic.net/Sites/gamedevmeta/img/logo.png",
          name: "Game Development Meta",
          site_type: "meta_site"
        },
        {
          aliases: [
            "http://photography.stackexchange.com",
            "http://photos.stackexchange.com"
          ],
          styling: {
            tag_background_color: "#F7F7F7",
            tag_foreground_color: "#444",
            link_color: "#0077CC"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "photo.meta",
              site_url: "https://photo.meta.stackexchange.com",
              name: "Photography Meta Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=photo.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          launch_date: 1288296279,
          open_beta_date: 1279825200,
          closed_beta_date: 1279220400,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/photo/img/apple-touch-icon@2.png",
          twitter_account: "StackPhotos",
          favicon_url: "https://cdn.sstatic.net/Sites/photo/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/photo/img/apple-touch-icon.png",
          audience: "professional, enthusiast and amateur photographers",
          site_url: "https://photo.stackexchange.com",
          api_site_parameter: "photo",
          logo_url: "https://cdn.sstatic.net/Sites/photo/img/logo.png",
          name: "Photography",
          site_type: "main_site"
        },
        {
          aliases: [
            "http://meta.photography.stackexchange.com",
            "http://meta.photos.stackexchange.com",
            "http://meta.photo.stackexchange.com"
          ],
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#666666",
            link_color: "#3D3D3D"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "photo",
              site_url: "https://photo.stackexchange.com",
              name: "Photography Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=photo.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/photometa/img/apple-touch-icon@2.png",
          favicon_url:
            "https://cdn.sstatic.net/Sites/photometa/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/photometa/img/apple-touch-icon.png",
          audience: "professional, enthusiast and amateur photographers",
          site_url: "https://photo.meta.stackexchange.com",
          api_site_parameter: "photo.meta",
          logo_url: "https://cdn.sstatic.net/Sites/photometa/img/logo.png",
          name: "Photography Meta",
          site_type: "meta_site"
        },
        {
          aliases: [
            "http://statistics.stackexchange.com",
            "http://crossvalidated.com"
          ],
          styling: {
            tag_background_color: "#edefed",
            tag_foreground_color: "#5D5D5D",
            link_color: "#0077CC"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "stats.meta",
              site_url: "https://stats.meta.stackexchange.com",
              name: "Cross Validated Meta"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=stats.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["MathJax", "Prettify"],
          launch_date: 1288900046,
          open_beta_date: 1280170800,
          closed_beta_date: 1279566000,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/stats/img/apple-touch-icon@2.png",
          twitter_account: "StackStats",
          favicon_url: "https://cdn.sstatic.net/Sites/stats/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/stats/img/apple-touch-icon.png",
          audience:
            "people interested in statistics, machine learning, data analysis, data mining, and data visualization",
          site_url: "https://stats.stackexchange.com",
          api_site_parameter: "stats",
          logo_url: "https://cdn.sstatic.net/Sites/stats/img/logo.png",
          name: "Cross Validated",
          site_type: "main_site"
        },
        {
          aliases: [
            "http://meta.statistics.stackexchange.com",
            "http://meta.stats.stackexchange.com"
          ],
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#666666",
            link_color: "#3D3D3D"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "stats",
              site_url: "https://stats.stackexchange.com",
              name: "Cross Validated"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=stats.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["MathJax"],
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/statsmeta/img/apple-touch-icon@2.png",
          favicon_url:
            "https://cdn.sstatic.net/Sites/statsmeta/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/statsmeta/img/apple-touch-icon.png",
          audience:
            "people interested in statistics, machine learning, data analysis, data mining, and data visualization",
          site_url: "https://stats.meta.stackexchange.com",
          api_site_parameter: "stats.meta",
          logo_url: "https://cdn.sstatic.net/Sites/statsmeta/img/logo.png",
          name: "Cross Validated Meta",
          site_type: "meta_site"
        },
        {
          aliases: [
            "http://maths.stackexchange.com",
            "http://mathematics.stackexchange.com"
          ],
          styling: {
            tag_background_color: "#888888",
            tag_foreground_color: "#000",
            link_color: "#0077CC"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "math.meta",
              site_url: "https://math.meta.stackexchange.com",
              name: "Mathematics Meta Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=math.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["MathJax"],
          launch_date: 1288038715,
          open_beta_date: 1280257200,
          closed_beta_date: 1279652400,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/math/img/apple-touch-icon@2.png",
          twitter_account: "StackMath",
          favicon_url: "https://cdn.sstatic.net/Sites/math/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/math/img/apple-touch-icon.png",
          audience:
            "people studying math at any level and professionals in related fields",
          site_url: "https://math.stackexchange.com",
          api_site_parameter: "math",
          logo_url: "https://cdn.sstatic.net/Sites/math/img/logo.png",
          name: "Mathematics",
          site_type: "main_site"
        },
        {
          aliases: ["http://meta.math.stackexchange.com"],
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#666666",
            link_color: "#3D3D3D"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "math",
              site_url: "https://math.stackexchange.com",
              name: "Mathematics Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=math.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["MathJax"],
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/mathmeta/img/apple-touch-icon@2.png",
          favicon_url: "https://cdn.sstatic.net/Sites/mathmeta/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/mathmeta/img/apple-touch-icon.png",
          audience:
            "people studying math at any level and professionals in related fields",
          site_url: "https://math.meta.stackexchange.com",
          api_site_parameter: "math.meta",
          logo_url: "https://cdn.sstatic.net/Sites/mathmeta/img/logo.png",
          name: "Mathematics Meta",
          site_type: "meta_site"
        },
        {
          styling: {
            tag_background_color: "#f5f5f5",
            tag_foreground_color: "#696969",
            link_color: "#0077CC"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "diy.meta",
              site_url: "https://diy.meta.stackexchange.com",
              name: "Home Improvement Meta Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=diy.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          launch_date: 1299184860,
          open_beta_date: 1280343600,
          closed_beta_date: 1279738800,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/diy/img/apple-touch-icon@2.png",
          twitter_account: "StackDIY",
          favicon_url: "https://cdn.sstatic.net/Sites/diy/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/diy/img/apple-touch-icon.png",
          audience: "contractors and serious DIYers",
          site_url: "https://diy.stackexchange.com",
          api_site_parameter: "diy",
          logo_url: "https://cdn.sstatic.net/Sites/diy/img/logo.png",
          name: "Home Improvement",
          site_type: "main_site"
        },
        {
          aliases: ["http://meta.diy.stackexchange.com"],
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#666666",
            link_color: "#3D3D3D"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "diy",
              site_url: "https://diy.stackexchange.com",
              name: "Home Improvement Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=diy.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/diymeta/img/apple-touch-icon@2.png",
          favicon_url: "https://cdn.sstatic.net/Sites/diymeta/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/diymeta/img/apple-touch-icon.png",
          audience: "contractors and serious DIYers",
          site_url: "https://diy.meta.stackexchange.com",
          api_site_parameter: "diy.meta",
          logo_url: "https://cdn.sstatic.net/Sites/diymeta/img/logo.png",
          name: "Home Improvement Meta",
          site_type: "meta_site"
        },
        {
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#000",
            link_color: "#0077CC"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "superuser",
              site_url: "https://superuser.com",
              name: "Super User"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=superuser.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["Prettify"],
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/superusermeta/img/apple-touch-icon@2.png",
          favicon_url:
            "https://cdn.sstatic.net/Sites/superusermeta/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/superusermeta/img/apple-touch-icon.png",
          audience: "computer enthusiasts and power users",
          site_url: "https://meta.superuser.com",
          api_site_parameter: "meta.superuser",
          logo_url: "https://cdn.sstatic.net/Sites/superusermeta/img/logo.png",
          name: "Meta Super User",
          site_type: "meta_site"
        },
        {
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#000",
            link_color: "#0077CC"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "serverfault",
              site_url: "https://serverfault.com",
              name: "Server Fault"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=serverfault.com",
              name: "Chat Stack Exchange"
            }
          ],
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/serverfaultmeta/img/apple-touch-icon@2.png",
          favicon_url:
            "https://cdn.sstatic.net/Sites/serverfaultmeta/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/serverfaultmeta/img/apple-touch-icon.png",
          audience: "system and network administrators",
          site_url: "https://meta.serverfault.com",
          api_site_parameter: "meta.serverfault",
          logo_url:
            "https://cdn.sstatic.net/Sites/serverfaultmeta/img/logo.png",
          name: "Meta Server Fault",
          site_type: "meta_site"
        },
        {
          styling: {
            tag_background_color: "#f5f5f5",
            tag_foreground_color: "#696969",
            link_color: "#176F8C"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "gis.meta",
              site_url: "https://gis.meta.stackexchange.com",
              name: "Geographic Information Systems Meta Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=gis.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["Prettify"],
          launch_date: 1299486043,
          open_beta_date: 1280430000,
          closed_beta_date: 1279825200,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/gis/img/apple-touch-icon@2.png",
          twitter_account: "StackGIS",
          favicon_url: "https://cdn.sstatic.net/Sites/gis/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/gis/img/apple-touch-icon.png",
          audience: "cartographers, geographers and GIS professionals",
          site_url: "https://gis.stackexchange.com",
          api_site_parameter: "gis",
          logo_url: "https://cdn.sstatic.net/Sites/gis/img/logo.png",
          name: "Geographic Information Systems",
          site_type: "main_site"
        },
        {
          aliases: ["http://meta.gis.stackexchange.com"],
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#666666",
            link_color: "#3D3D3D"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "gis",
              site_url: "https://gis.stackexchange.com",
              name: "Geographic Information Systems Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=gis.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/gismeta/img/apple-touch-icon@2.png",
          favicon_url: "https://cdn.sstatic.net/Sites/gismeta/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/gismeta/img/apple-touch-icon.png",
          audience: "cartographers, geographers and GIS professionals",
          site_url: "https://gis.meta.stackexchange.com",
          api_site_parameter: "gis.meta",
          logo_url: "https://cdn.sstatic.net/Sites/gismeta/img/logo.png",
          name: "Geographic Information Systems Meta",
          site_type: "meta_site"
        },
        {
          styling: {
            tag_background_color: "#FEFEFA",
            tag_foreground_color: "#444444",
            link_color: "#0077CC"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "tex.meta",
              site_url: "https://tex.meta.stackexchange.com",
              name: "TeX - LaTeX Meta Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=tex.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["Prettify"],
          launch_date: 1289510398,
          open_beta_date: 1280775600,
          closed_beta_date: 1280170800,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/tex/img/apple-touch-icon@2.png",
          twitter_account: "StackTeX",
          favicon_url: "https://cdn.sstatic.net/Sites/tex/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/tex/img/apple-touch-icon.png",
          audience:
            "users of TeX, LaTeX, ConTeXt, and related typesetting systems",
          site_url: "https://tex.stackexchange.com",
          api_site_parameter: "tex",
          logo_url: "https://cdn.sstatic.net/Sites/tex/img/logo.png",
          name: "TeX - LaTeX",
          site_type: "main_site"
        },
        {
          aliases: ["http://meta.tex.stackexchange.com"],
          styling: {
            tag_background_color: "#FFF",
            tag_foreground_color: "#666666",
            link_color: "#3D3D3D"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "tex",
              site_url: "https://tex.stackexchange.com",
              name: "TeX - LaTeX Stack Exchange"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=tex.stackexchange.com",
              name: "Chat Stack Exchange"
            }
          ],
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/texmeta/img/apple-touch-icon@2.png",
          favicon_url: "https://cdn.sstatic.net/Sites/texmeta/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/texmeta/img/apple-touch-icon.png",
          audience:
            "users of TeX, LaTeX, ConTeXt, and related typesetting systems",
          site_url: "https://tex.meta.stackexchange.com",
          api_site_parameter: "tex.meta",
          logo_url: "https://cdn.sstatic.net/Sites/texmeta/img/logo.png",
          name: "TeX - LaTeX Meta",
          site_type: "meta_site"
        },
        {
          aliases: ["http://ubuntu.stackexchange.com"],
          styling: {
            tag_background_color: "#E8E7E5",
            tag_foreground_color: "#5E5E5E",
            link_color: "#333333"
          },
          related_sites: [
            {
              relation: "meta",
              api_site_parameter: "meta.askubuntu",
              site_url: "https://meta.askubuntu.com",
              name: "Ask Ubuntu Meta"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=askubuntu.com",
              name: "Chat Stack Exchange"
            }
          ],
          markdown_extensions: ["Prettify"],
          launch_date: 1286712000,
          open_beta_date: 1280948400,
          closed_beta_date: 1280343600,
          site_state: "normal",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/askubuntu/img/apple-touch-icon@2.png",
          twitter_account: "AskUbuntu",
          favicon_url:
            "https://cdn.sstatic.net/Sites/askubuntu/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/askubuntu/img/apple-touch-icon.png",
          audience: "Ubuntu users and developers",
          site_url: "https://askubuntu.com",
          api_site_parameter: "askubuntu",
          logo_url: "https://cdn.sstatic.net/Sites/askubuntu/img/logo.png",
          name: "Ask Ubuntu",
          site_type: "main_site"
        },
        {
          aliases: ["http://meta.ubuntu.stackexchange.com"],
          styling: {
            tag_background_color: "#E8E7E5",
            tag_foreground_color: "#5E5E5E",
            link_color: "#222222"
          },
          related_sites: [
            {
              relation: "parent",
              api_site_parameter: "askubuntu",
              site_url: "https://askubuntu.com",
              name: "Ask Ubuntu"
            },
            {
              relation: "chat",
              site_url:
                "https://chat.stackexchange.com?tab=site&host=askubuntu.com",
              name: "Chat Stack Exchange"
            }
          ],
          site_state: "linked_meta",
          high_resolution_icon_url:
            "https://cdn.sstatic.net/Sites/askubuntumeta/img/apple-touch-icon@2.png",
          favicon_url:
            "https://cdn.sstatic.net/Sites/askubuntumeta/img/favicon.ico",
          icon_url:
            "https://cdn.sstatic.net/Sites/askubuntumeta/img/apple-touch-icon.png",
          audience: "Ubuntu users and developers",
          site_url: "https://meta.askubuntu.com",
          api_site_parameter: "meta.askubuntu",
          logo_url: "https://cdn.sstatic.net/Sites/askubuntumeta/img/logo.png",
          name: "Ask Ubuntu Meta",
          site_type: "meta_site"
        }
      ],
      has_more: true,
      quota_max: 10000,
      quota_remaining: 9998,
      page: 1
    }).map(this._toSite);
  }

  private readonly _toSite = (sites: StackExchangeSites):StackExchangeSite[] => {
    return sites.items;
  };
}
