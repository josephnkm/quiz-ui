import { ComponentTypeEnum } from "../enums/ComponentTypeEnum";
import { SETTINGS_INPUT_TYPE_ENUM } from "../enums/InputTypeEnum";
import { SpeakerTypeEnum } from "../enums/SpeakerTypeEnum";

export const TOP_ENVIRONMENT_OPTIONS = ["Staging", "Production", "Sandbox"];
export const FILTER_BOOLEAN_OPTIONS = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];
export const BOOLEAN_OPTIONS = ["Yes", "No"];
export const COMPONENT_TYPE_OPTIONS = [
  ComponentTypeEnum.FEATURED_CARD,
  ComponentTypeEnum.FEATURED_CONTENT_SLIDER,
  ComponentTypeEnum.HIGHLIGHT_CARDS_DYNAMIC,
  ComponentTypeEnum.COPY_BLOCK,
  ComponentTypeEnum.PAGE_BANNER,
  ComponentTypeEnum.CHANNEL_CARDS,
  ComponentTypeEnum.FEATURED_SPEAKERS,
  ComponentTypeEnum.AGENDA,
  ComponentTypeEnum.SOCIAL,
  ComponentTypeEnum.MARQUEE,
  ComponentTypeEnum.HIGHLIGHT_CARDS_CUSTOM,
  ComponentTypeEnum.CONTENT_PICKER_CUSTOM,
  ComponentTypeEnum.FAQ,
  ComponentTypeEnum.SPOTLIGHT_CARD,
  ComponentTypeEnum.IMAGE_SELECTOR,
  ComponentTypeEnum.SPONSOR_LOGOS,
  ComponentTypeEnum.MY_PLAYLIST,
  ComponentTypeEnum.SESSION_CATALOG,
  ComponentTypeEnum.INFO_SPEAKER_TABS,
  ComponentTypeEnum.BRIGHTCOVE_PLAYER,
];
export const COMPONENT_CONTENT_TYPE_OPTIONS = [
  "Session",
  "Speaker",
  "Exhibitor",
  "Static",
];
export const EVENT_STATUS_OPTIONS = [
  "DRAFT",
  "PRE_LIVE",
  "LIVE",
  "DURING",
  "POST",
  "CONTINUOUS",
];

export const RELATED_SESSION_TYPE_OPTIONS = ["RELATED", "UPCOMING", "NONE"];

export const SOCIAL_OPTIONS = [
  { name: "Facebook", value: "facebook" },
  { name: "Instagram", value: "instagram" },
  { name: "Linkedin", value: "linkedin" },
  { name: "Twitter", value: "twitter" },
  { name: "YouTube", value: "youtube" },
];

export const ALLOWED_USER_OPTIONS = [
  { name: "Sponsor", value: "SPONSOR" },
  { name: "Speaker", value: "SPEAKER" },
  { name: "Virtual Attendee", value: "VIRTUAL_ATTENDEE" },
];

export const ALLOWED_IMAGE_TYPE = ["jpeg", "jpg", "png", "svg", "svg+xml"];
export const ALLOWED_VIDEO_TYPE = ["mp4"];

export const TEXT_INPUT_DOMAIN = "Free text domain";
export const IMAGE_UPLOAD_DOMAIN = "Free Upload domain";
export const VIDEO_UPLOAD_DOMAIN = "Free video Upload domain";

export const REDIRECT_URI = "redirect_uri";

export const ENVIRONMENTS = ["Staging", "Production", "Sandbox"];

export const DATE_FORMAT = "YYYY-MM-DD";

export const TIME_FORMAT = "HH:mm:ss";
export const TIME_FORMAT_WITHOUT_SECONDS = "hh:mm";

export const DATE_TIME_FORMAT_WITH_HOUR = "MMMM DD, YYYY h:mm a";

export const DATE_FORMAT_ACTIVITY = "DD/MM/YYYY";
export const TIME_FORMAT_ACTIVITY = "h:mm a";

export const DATE_FORMAT_HISTORY = "DD MMM YYYY";

export const DATE_FORMAT_WITHOUT_YEAR_INFO_PICKER = "MMM DD";
export const DATE_FORMAT_INFO_PICKER = "MMM DD, YYYY";
export const DATE_FORMAT_COUNTDOWN = "DD : HH : mm : ss";
export const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";

export const CURRENT_ORIGIN = `${window.location.origin}/`;

export const FOOTER_CUSTOM_LINKS = "Footer Custom Links";
export const FOOTER_SOCIAL_LINKS = "Footer Social Links";
export const FEATURED_SESSION = "Featured Session";

//Regular Expressions

export const DIGIT_REG = new RegExp(/^\d+$/);

export const DATE_FORMAT_DASH_REG = new RegExp(
  /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
); //YYYY-MM-DD

export const CONTENT_TYPES = [
  {
    name: "Session",
    domain: "Session",
  },
  {
    name: "Speaker",
    domain: "Speaker",
  },
  {
    name: "Exhibitor",
    domain: "Exhibitor",
  },
];

export const FILTER_CONTENT_TYPES = [
  ...CONTENT_TYPES,
  {
    name: "Static",
    domain: "Static",
  },
];

export const COLUMN_COUNTS = [1, 2, 3, 4];

export const FALLBACK_IMAGE_URL =
  "https://decmsblobs.blob.core.windows.net/imgs/servicenow-default-img.jpg";

export const FALLBACK_FEATURED_SPEAKER_IMAGE_URL =
  "https://decmsblobs.blob.core.windows.net/imgs/sn-speaker-featured-fallback-img.png";

export const FALLBACK_HEADER_IMAGE_URL =
  "https://static.rainfocus.com/servicenow/digital/static/staticfile/staticfile/ServiceNow%20Logo_1663885138659001puv6.svg";

export const DEFAULT_COLUMN_COUNT = 4;

export const STRING_INITIATOR = "{/*";
export const STRING_TERMINATOR = "*/}";
export const FIELD_SEPARATOR = "{/**/}";
export const FEATURED_CARD_SEPARATOR = "F-C-S";
export const LIBRARY_SEPARATOR = "L-S";

export const SYSTEM_COMPONENTS = [
  ComponentTypeEnum.PAGE_BANNER,
  ComponentTypeEnum.SPONSOR_LOGOS,
  ComponentTypeEnum.MY_PLAYLIST,
  ComponentTypeEnum.SESSION_CATALOG,
  ComponentTypeEnum.INFO_SPEAKER_TABS,
  ComponentTypeEnum.BRIGHTCOVE_PLAYER,
];

export const COLUMN_COUNT_SUPPORTED_COMPONENTS = [
  ComponentTypeEnum.FEATURED_CARD,
  ComponentTypeEnum.HIGHLIGHT_CARDS_DYNAMIC,
  ComponentTypeEnum.CHANNEL_CARDS,
  ComponentTypeEnum.HIGHLIGHT_CARDS_CUSTOM,
  ComponentTypeEnum.SPONSOR_LOGOS,
  ComponentTypeEnum.CHANNEL_CARDS_CUSTOM,
];

export const STATIC_COMPONENTS = [
  ComponentTypeEnum.HIGHLIGHT_CARDS_CUSTOM,
  ComponentTypeEnum.FAQ,
  ComponentTypeEnum.CONTENT_PICKER_CUSTOM,
  ComponentTypeEnum.COPY_BLOCK,
  ComponentTypeEnum.FEATURED_CONTENT_SLIDER_CUSTOM,
  ComponentTypeEnum.MARQUEE,
  ComponentTypeEnum.MARQUEE_V3,
  ComponentTypeEnum.PAGE_BANNER,
  ComponentTypeEnum.SOCIAL,
  ComponentTypeEnum.SPOTLIGHT_CARD,
  ComponentTypeEnum.SPOTLIGHT_FORM,
  ComponentTypeEnum.PERSONAL_CALENDAR_SYNC,
  ComponentTypeEnum.IMAGE_SELECTOR,
  ComponentTypeEnum.CHANNEL_CARDS_CUSTOM,
];

export const ENABLED_COMPONENT_TYPES = [
  ComponentTypeEnum.FEATURED_CARD,
  ComponentTypeEnum.FAQ,
  ComponentTypeEnum.FEATURED_CONTENT_SLIDER_CUSTOM,
  ComponentTypeEnum.FEATURED_CONTENT_SLIDER,
  ComponentTypeEnum.HIGHLIGHT_CARDS_DYNAMIC,
  ComponentTypeEnum.COPY_BLOCK,
  ComponentTypeEnum.FEATURED_SPEAKERS,
  ComponentTypeEnum.CHANNEL_CARDS,
  ComponentTypeEnum.SOCIAL,
  ComponentTypeEnum.PAGE_BANNER,
  ComponentTypeEnum.HIGHLIGHT_CARDS_CUSTOM,
  ComponentTypeEnum.CONTENT_PICKER_CUSTOM,
  ComponentTypeEnum.MARQUEE,
  ComponentTypeEnum.MARQUEE_V3,
  ComponentTypeEnum.SPOTLIGHT_CARD,
  ComponentTypeEnum.SPOTLIGHT_FORM,
  ComponentTypeEnum.PERSONAL_CALENDAR_SYNC,
  ComponentTypeEnum.IMAGE_SELECTOR,
  ComponentTypeEnum.SPONSOR_LOGOS,
  ComponentTypeEnum.CHANNEL_CARDS_CUSTOM,
];

export const COMPONENTS_WITHOUT_PADDING_X: string[] = [
  ComponentTypeEnum.FEATURED_CONTENT_SLIDER,
  ComponentTypeEnum.FEATURED_CONTENT_SLIDER_CUSTOM,
  ComponentTypeEnum.PAGE_BANNER,
  ComponentTypeEnum.MARQUEE,
  ComponentTypeEnum.MARQUEE_V3,
  ComponentTypeEnum.AGENDA,
  ComponentTypeEnum.SOCIAL,
  ComponentTypeEnum.FAQ,
  ComponentTypeEnum.SPOTLIGHT_CARD,
  ComponentTypeEnum.SPOTLIGHT_FORM,
  ComponentTypeEnum.PERSONAL_CALENDAR_SYNC,
  ComponentTypeEnum.HIGHLIGHT_CARDS_CUSTOM,
  ComponentTypeEnum.FEATURED_CARD,
  ComponentTypeEnum.CONTENT_PICKER_CUSTOM,
  ComponentTypeEnum.COPY_BLOCK,
];

export const COMPONENTS_WITHOUT_PADDING_Y: string[] = [
  ComponentTypeEnum.PAGE_BANNER,
  ComponentTypeEnum.SOCIAL,
  ComponentTypeEnum.MARQUEE,
  ComponentTypeEnum.AGENDA,
  ComponentTypeEnum.FAQ,
  ComponentTypeEnum.SPOTLIGHT_CARD,
  ComponentTypeEnum.FEATURED_CONTENT_SLIDER,
  ComponentTypeEnum.FEATURED_CONTENT_SLIDER_CUSTOM,
  ComponentTypeEnum.CONTENT_PICKER_CUSTOM,
  ComponentTypeEnum.COPY_BLOCK,
  ComponentTypeEnum.HIGHLIGHT_CARDS_CUSTOM,
];

export const IS_DEVELOPMENT_MODE =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const TIMEZONE_ABBREVIATIONS = {
  "Nepal Time": "NPT",
  "Alpha Time Zone": "A",
  "Australian Central Daylight Time": "ACDT",
  "Australian Central Standard Time": "ACST",
  "Acre Time": "ACT",
  "Australian Central Time": "ACT",
  "Australian Central Western Standard Time": "ACWST",
  "Arabia Daylight Time": "ADT",
  "Atlantic Daylight Time": "ADT",
  "Australian Eastern Daylight Time": "AEDT",
  "Australian Eastern Standard Time": "AEST",
  "Australian Eastern Time": "AET",
  "Afghanistan Time": "AFT",
  "Alaska Daylight Time": "AKDT",
  "Alaska Standard Time": "AST",
  "Alma-Ata Time": "ALMT",
  "Amazon Summer Time": "AMST",
  "Armenia Summer Time": "AMST",
  "Amazon Time": "AMT",
  "Armenia Time": "AMT",
  "Anadyr Summer Time": "ANAST",
  "Anadyr Time": "ANAT",
  "Aqtobe Time": "AQTT",
  "Argentina Time": "ART",
  "Arabia Standard Time": "AST",
  "Atlantic Standard Time": "AST",
  "Atlantic Time": "AT",
  "Australian Western Daylight Time": "AWDT",
  "Australian Western Standard Time": "AWST",
  "Azores Summer Time": "AZOST",
  "Azores Time": "AZOT",
  "Azerbaijan Summer Time": "AZST",
  "Azerbaijan Time": "AZT",
  "Anywhere on Earth": "AoE",
  "Brunei Darussalam Time": "BNT",
  "	Bolivia Time": "BOT",
  "Brasília Summer Time": "BRST",
  "Brasília Time": "BRT",
  "Bangladesh Standard Time": "BST",
  "Bougainville Standard Time": "BST",
  "British Summer Time": "BST",
  "Bhutan Time": "BTT",
  "Casey Time": "CAST",
  "Central Africa Time": "CAT",
  "Cocos Islands Time": "CCT",
  "Central Daylight Time": "CDT",
  "Cuba Daylight Time": "CDT",
  "	Central European Summer Time": "CEST",
  "Central European Time": "CET",
  "	Chatham Island Daylight Time": "CHADT",
  "Chatham Island Standard Time": "CHAST",
  "Choibalsan Summer Time": "CHOST",
  "Choibalsan Time": "CHOT",
  "Chuuk Time": "CHUT",
  "Cayman Islands Daylight Saving Time": "CIDST",
  "Cayman Islands Standard Time": "CIST",
  "Cook Island Time": "CKT",
  "Chile Summer Time": "CLST",
  "Chile Standard Time": "CLT",
  "Colombia Time": "COT",
  "Central Standard Time": "CST",
  "China Standard Time": "CST",
  "Cuba Standard Time": "CST",
  "Central Time": "CT",
  "	Cape Verde Time": "CVT",
  "Christmas Island Time": "CXT",
  "Chamorro Standard Time": "ChST",
  "Davis Time": "DAVT",
  "	Dumont-d'Urville Time": "DDUT",
  "Easter Island Summer Time": "EASST",
  "Easter Island Standard Time": "EAST",
  "Eastern Africa Time": "EAT",
  "Ecuador Time": "ECT",
  "Eastern Daylight Time": "EDT",
  "Eastern European Summer Time": "EEST",
  "	Eastern European Time": "EET",
  "Eastern Greenland Summer Time": "EGST",
  "East Greenland Time": "EGT",
  "Eastern Standard Time": "EST",
  "Eastern Time": "ET",
  "	Further-Eastern European Time": "FET",
  "Fiji Summer Time": "FJST",
  "	Fiji Time": "FJT",
  "Falkland Islands Summer Time": "FKST",
  "	Falkland Island Time": "FKT",
  "Fernando de Noronha Time": "FNT",
  "Galapagos Time": "GALT",
  "Gambier Time": "GAMT",
  "Georgia Standard Time": "GST",
  "French Guiana Time": "GFT",
  "Gilbert Island Time": "GILT",
  "Greenwich Mean Time": "GMT",
  "Gulf Standard Time": "GST",
  "South Georgia Time": "GST",
  "Guyana Time": "GYT",
  "Hawaii-Aleutian Daylight Time": "HDT",
  "Hawaii-Aleutian Standard Time": "HST",
  "Hong Kong Time": "HKT",
  "	Hovd Summer Time": "HOVST",
  "Hovd Time": "HOVT",
  "Hawaii Standard Time": "HST",
  "Indochina Time": "ICT",
  "Israel Daylight Time": "IDT",
  "Indian Chagos Time": "IDT",
  "Iran Daylight Time": "IRDT",
  "Irkutsk Summer Time": "IRKST",
  "	Irkutsk Time": "IRKT",
  "	Iran Standard Time": "IRST",
  "India Standard Time": "IST",
  "Irish Standard Time": "IST",
  "Israel Standard Time": "IST",
  "Japan Standard Time": "JST",
  "Kyrgyzstan Time": "KGT",
  "Kosrae Time": "KOST",
  "Krasnoyarsk Summer Time": "KRAST",
  "Krasnoyarsk Time": "KRAT",
  "Korea Standard Time": "KST",
  "Kuybyshev Time": "KUYT",
  "Lord Howe Daylight Time": "LHDT",
  "	Lord Howe Standard Time": "LHST",
  "	Line Islands Time": "LINT",
  "Magadan Summer Time": "MAGST",
  "Magadan Time": "MAGT",
  "Marquesas Time": "MART",
  "	Mawson Time": "MAWT",
  "Mountain Daylight Time": "MDT",
  "	Marshall Islands Time": "MHT",
  "Myanmar Time": "MMT",
  "Moscow Daylight Time": "MSD",
  "Moscow Standard Time": "MSK",
  "	Mountain Standard Time": "MST",
  "Mountain Time": "MT",
  "Mauritius Time": "MUT",
  "Maldives Time": "MVT",
  "	Malaysia Time": "MYT",
  "New Caledonia Time": "NCT",
  "Newfoundland Daylight Time": "NDT",
  "Norfolk Daylight Time": "NFDT",
  "Norfolk Time": "NFT",
  "Novosibirsk Summer Time": "NOVST",
  "Novosibirsk Time": "NOVT",
  "Nauru Time": "NRT",
  "	Newfoundland Standard Time": "NST",
  "Niue Time": "NUT",
  "	New Zealand Daylight Time": "NZDT",
  "New Zealand Standard Time": "NZST",
  "Omsk Summer Time": "OMSST",
  "	Omsk Standard Time": "OMST",
  "Oral Time": "ORAT",
  "Pacific Daylight Time": "PDT",
  "	Peru Time": "PET",
  "	Kamchatka Summer Time": "PETST",
  "Kamchatka Time": "PETT",
  "Papua New Guinea Time": "PGT",
  "	Phoenix Island Time": "PHOT",
  "	Philippine Time": "PHT",
  "	Pakistan Standard Time": "PKT",
  "Pierre & Miquelon Daylight Time": "PMDT",
  "Pierre & Miquelon Standard Time": "PMST",
  "Pohnpei Standard Time": "PONT",
  "Pacific Standard Time": "PST",
  "Pitcairn Standard Time": "PST",
  "Pacific Time": "PT",
  "	Palau Time": "PWT",
  "	Paraguay Summer Time": "PYST",
  "Paraguay Time": "PYT",
  "	Pyongyang Time": "PYT",
  "	Qyzylorda Time": "QYZT",
  "Reunion Time": "RET",
  "Rothera Time": "ROTT",
  "Sakhalin Time": "SAKT",
  "	Samara Time": "SAMT",
  "	South Africa Standard Time": "SAST",
  "Solomon Islands Time": "SBT",
  "	Seychelles Time": "SCT",
  "	Singapore Time": "SGT",
  "Srednekolymsk Time": "SRET",
  "Suriname Time": "SRT",
  "Samoa Standard Time": "SST",
  "Syowa Time": "SYOT",
  "	Tahiti Time": "TAHT",
  "French Southern and Antarctic Time": "TFT",
  "Tajikistan Time": "TJT",
  "Tokelau Time": "TKT",
  "East Timor Time": "TLT",
  "Turkmenistan Time": "TMT",
  "Tonga Summer Time": "TOST",
  "Tonga Time": "TOT",
  "	Turkey Time": "TRT",
  "Tuvalu Time": "TVT",
  "	Ulaanbaatar Summer Time": "ULAST",
  "	Ulaanbaatar Time": "ULAT",
  "Coordinated Universal Time": "UTC",
  "Uruguay Summer Time": "UYST",
  "	Uruguay Time": "UYT",
  "Uzbekistan Time": "UZT",
  "Venezuelan Standard Time": "VET",
  "Vladivostok Summer Time": "VLAST",
  "Vladivostok Time": "VLAT",
  "	Vostok Time": "VOST",
  "	Vanuatu Time": "VUT",
  "	Wake Time": "WAKT",
  "Western Argentine Summer Time": "WARST",
  "West Africa Summer Time": "WAST",
  "West Africa Time": "WAT",
  "	Western European Summer Time": "WEST",
  "Western European Time": "WET",
  "Wallis and Futuna Time": "WFT",
  "Western Greenland Summer Time": "WGST",
  "West Greenland Time": "WGT",
  "	Western Indonesian Time": "WIB",
  "Eastern Indonesian Time": "WIT",
  "Central Indonesian Time": "WITA",
  "	West Samoa Time": "WST",
  "Western Sahara Summer Time": "WST",
  "Western Sahara Standard Time": "WT",
  "Yakutsk Summer Time": "YAKST",
  "Yakutsk Time": "YAKT",
  "Yap Time": "YAPT",
  "Yekaterinburg Summer Time": "YEKST",
  "	Yekaterinburg Time": "YEKT",
};

export const PARTNER_PAGES = ["Partner Kickoff"];

export const NON_PARTNER_PAGES = ["Sales Kickoff 2023", "Tech Summit 2023"];

export const HIGHLIGHT_CARDS_CUSTOM_SETTINGS_OPTION = [
  SETTINGS_INPUT_TYPE_ENUM.TITLE,
  SETTINGS_INPUT_TYPE_ENUM.DESCRIPTION,
  SETTINGS_INPUT_TYPE_ENUM.IMAGE,
  SETTINGS_INPUT_TYPE_ENUM.EVENT_DATE,
  SETTINGS_INPUT_TYPE_ENUM.LOCATION,
  SETTINGS_INPUT_TYPE_ENUM.PRIMARY_BUTTON,
];

export const HIGHLIGHT_CARDS_DYNAMIC_FIELDS_OPTION = [
  SETTINGS_INPUT_TYPE_ENUM.SECTION_TITLE,
  SETTINGS_INPUT_TYPE_ENUM.HEADING_TITLE,
  SETTINGS_INPUT_TYPE_ENUM.HEADING_TITLE_LINK,
  SETTINGS_INPUT_TYPE_ENUM.SECTION_DESCRIPTION,
  SETTINGS_INPUT_TYPE_ENUM.DESCRIPTION_BODY_TEXT,
  SETTINGS_INPUT_TYPE_ENUM.PRIMARY_BUTTON,
  SETTINGS_INPUT_TYPE_ENUM.IMAGE,
];

export const SPOTLIGHT_CARD_ALLOWED_BLOCK_AT_ONE_TIME = 6;

export const CMS_HEADER_HEIGHT_MOBILE = 54;

export const PAGES_DRAWER_TITLE_SYSTEM = "System Generated Pages Filter";
export const PAGES_DRAWER_TITLE_USER = "User Generated Pages Filter";

export const COMPONENTS_DRAWER_TITLE_SYSTEM =
  "System Generated Components Filter";
export const COMPONENTS_DRAWER_TITLE_USER = "User Generated Components Filter";

export enum ENTITY_TYPE {
  SYSTEM = "system",
  USER_GENERATED = "user-generated",
  CUSTOM = "custom",
}

export const DEFAULT_LANGUAGE = "en-us";

export const EVENTS_DEV_URL =
  "http://digitalexperiencecms-dev.azurewebsites.net/events/";

export const getBaseUrl = () =>
  IS_DEVELOPMENT_MODE ? EVENTS_DEV_URL : `${CURRENT_ORIGIN}/events/`;

export const speakerTypes = [
  SpeakerTypeEnum.VIP_SPEAKER,
  SpeakerTypeEnum.LEAD_SPEAKER,
  SpeakerTypeEnum.CO_SPEAKER,
  SpeakerTypeEnum.PANELIST,
];
