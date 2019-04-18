import queryString from "query-string";
import RivenStats from "#data/RivenStats";

import { trim } from "lodash/string";
import {isEmpty} from "./StringUtils";

const corsProxy = {
  lambda : "/.netlify/functions/corsproxy",
  fallback : "https://cors-anywhere.herokuapp.com/"
};

// Gracefully handles fallback
const fetchCORS = async(url, type) => {
  const parser = type === 'text' ? "text" : "json";
  // Try our Netlify Lambda
 const resp = await fetch(corsProxy.lambda ,{
    headers : {
      "Target-URL" : url
    }
  })
  const body = await resp[parser]()
  return body;

  // Fallback 
//  ${corsProxy}${rmURL.uapi}
}

const rmURL = {
  api: "https://riven.market/_modules/riven/showrivens.php",
  uapi: "https://riven.market/profile"
};

const devURL = {
  api: "/dumps/rm.resp/profile_api.html",
  uapi: "/dumps/rm.resp/profile.html"
};

const cap = {
  platform: "string",
  limit: "number",
  recency: "string",
  veiled: "",
  onlinefirst: "",
  polarity: "",
  rank: "",
  mastery: "",
  weapon: "",
  stats: "",
  neg: "",
  price: "",
  rerolls: "",
  sort: "",
  direction: "",
  page: ""
};

const homePageQuery = {
  direction: "ASC",
  baseurl: "Lw==",
  limit: "25",
  mastery: "16",
  neg: "all",
  onlinefirst: "true",
  page: "1",
  platform: "PC",
  polarity: "all",
  price: "99999",
  rank: "all",
  recency: "-1",
  rerolls: "-1",
  sort: "time",
  stats: "Any",
  veiled: "false",
  weapon: "Any"
};

function parseUserData(html, name) {
  // Stored in 2nd and 3d paragraphs
  const p = { comms: 2, timezone: 3 };
  // Splitte by one <br>
  const commsText = html[p.comms].innerHTML.split("<br>")[1];
  const timezoneText = html[p.timezone].innerHTML.split("<br>")[1];
  return {
    name: name,
    comms: trim(commsText),
    timezone: trim(timezoneText)
  };
}
function parseUserId(html) {
  const userIdString = trim(html.getAttribute("onclick"));
  const inParens = /\(([0-9]*?)\)/;
  const userId = userIdString.match(inParens);
  return userId[1] ? userId[1] : null;
}

export async function fetchRivenProfile(pName, isDev) {
  // Create an proxy
  const uapi = isDev ? devURL.uapi : `${rmURL.uapi}/${pName}`;

  const respHTML = await fetchCORS(uapi, "text");
  const cachedFragment = document.createElement("template");
  cachedFragment.innerHTML = respHTML;

  const userContent = cachedFragment.content.querySelectorAll("div.container")[0];

  // Account data div has a class so its easy.
  const userDataDiv = userContent.querySelectorAll("div.account-data p");
  const userData = parseUserData(userDataDiv, pName);

  // For button we need to Copy Selector
  const userIdButton = userContent.querySelector(
    "div > div.col-6.m-6.s-12.xs-12 > div:nth-child(2) > div > button"
  );
  const userId = parseUserId(userIdButton);
  // Debug
  // console.log(userContent);
  console.dir(userData);
  console.log(userId);
  const userRivensQuery = Object.assign(homePageQuery, {
    user: userId
  });
  return [userData, userRivensQuery];
}

export async function fetchRivenHTML(query, isDev) {
  const qs = query ? queryString.stringify(query) : queryString.stringify(homePageQuery);
  // Create an proxy
  const api = isDev ? "/dumps/rm.resp/profile_api.html" : `${rmURL.api}?${qs}`;
  const respHTML = await fetchCORS(api, "text");
  const cachedFragment = document.createElement("template");
  cachedFragment.innerHTML = respHTML;
  const rivens = cachedFragment.content.querySelectorAll("div.riven");

  const rivenDatas = Array.prototype.map.call(rivens, ele => Object.assign({}, ele.dataset));

  return rivenDatas;
}

export function parseRivenData(rivenAttrs) {
  return rivenAttrs.map(r => {
    console.log(r);
    const parseName = `${r.weapon} ${r.name} `;
    const parsedPositiveStats = [1, 2, 3].reduce((acc, n) => {
      const statId = r["stat" + n];
      if (!isEmpty(statId)) {
        return [
          ...acc,
          {
            stat: RivenStats[statId].Desc,
            value: r["stat" + n + "val"]
          }
        ];
      }
      return acc;
    }, []);
    const negativeId = r["stat" + 4];
    const parsedNegativeStat = isEmpty(negativeId)
      ? "none"
      : {
          stat: RivenStats[negativeId].Desc,
          value: r["stat" + 4 + "val"]
        };
    const parsedInfo = {
      mr: r.mr,
      rerolls: r.rerolls,
      polarity: r.polarity,
      price: r.price
    };
    return {
      name: parseName,
      stats: {
        positive: parsedPositiveStats,
        negative: parsedNegativeStat
      },
      info: parsedInfo
    };
  });
}
