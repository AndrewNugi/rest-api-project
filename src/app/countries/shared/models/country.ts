// To parse this data:
//
//   import { Convert } from "./file";
//
//   const welcome9 = Convert.toWelcome9(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface CountryResponse {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   Languages;
    translations: Translation;
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    cioc?:        string;
    borders?:     string[];
    fifa?:        string;
    gini?:        { [key: string]: number };
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    AUD?: Aed;
    ERN?: Aed;
    WST?: Aed;
    MKD?: Aed;
    DJF?: Aed;
    JOD?: Aed;
    PKR?: Aed;
    XPF?: Aed;
    EUR?: Aed;
    MRU?: Aed;
    DKK?: Aed;
    NAD?: Aed;
    ZAR?: Aed;
    GHS?: Aed;
    SSP?: Aed;
    USD?: Aed;
    MDL?: Aed;
    KPW?: Aed;
    MOP?: Aed;
    SCR?: Aed;
    AMD?: Aed;
    ANG?: Aed;
    XAF?: Aed;
    SYP?: Aed;
    AOA?: Aed;
    TJS?: Aed;
    VES?: Aed;
    PLN?: Aed;
    SAR?: Aed;
    BAM?: BAM;
    CZK?: Aed;
    GTQ?: Aed;
    KRW?: Aed;
    NPR?: Aed;
    BWP?: Aed;
    PHP?: Aed;
    IQD?: Aed;
    LBP?: Aed;
    BIF?: Aed;
    MNT?: Aed;
    FOK?: Aed;
    PYG?: Aed;
    NOK?: Aed;
    NZD?: Aed;
    GBP?: Aed;
    GGP?: Aed;
    DZD?: Aed;
    PAB?: Aed;
    EGP?: Aed;
    ILS?: Aed;
    YER?: Aed;
    BRL?: Aed;
    NGN?: Aed;
    JPY?: Aed;
    TZS?: Aed;
    KZT?: Aed;
    SHP?: Aed;
    LKR?: Aed;
    MAD?: Aed;
    MMK?: Aed;
    COP?: Aed;
    PEN?: Aed;
    XOF?: Aed;
    KGS?: Aed;
    CNY?: Aed;
    AFN?: Aed;
    TRY?: Aed;
    LRD?: Aed;
    CLP?: Aed;
    KID?: Aed;
    CVE?: Aed;
    JEP?: Aed;
    ISK?: Aed;
    GMD?: Aed;
    VUV?: Aed;
    UYU?: Aed;
    OMR?: Aed;
    SDG?: BAM;
    INR?: Aed;
    LAK?: Aed;
    AWG?: Aed;
    KMF?: Aed;
    XCD?: Aed;
    UZS?: Aed;
    MVR?: Aed;
    GIP?: Aed;
    IDR?: Aed;
    VND?: Aed;
    MYR?: Aed;
    CKD?: Aed;
    SZL?: Aed;
    UGX?: Aed;
    MGA?: Aed;
    FJD?: Aed;
    TWD?: Aed;
    PGK?: Aed;
    RWF?: Aed;
    CDF?: Aed;
    RSD?: Aed;
    KHR?: Aed;
    AED?: Aed;
    BMD?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    HKD?: Aed;
    MUR?: Aed;
    ARS?: Aed;
    NIO?: Aed;
    UAH?: Aed;
    GYD?: Aed;
    TVD?: Aed;
    LSL?: Aed;
    TOP?: Aed;
    GEL?: Aed;
    ETB?: Aed;
    DOP?: Aed;
    BZD?: Aed;
    IMP?: Aed;
    HTG?: Aed;
    BDT?: Aed;
    KWD?: Aed;
    JMD?: Aed;
    RON?: Aed;
    STN?: Aed;
    BSD?: Aed;
    MXN?: Aed;
    TMT?: Aed;
    SRD?: Aed;
    SEK?: Aed;
    BOB?: Aed;
    MZN?: Aed;
    MWK?: Aed;
    ALL?: Aed;
    ZMW?: Aed;
    CHF?: Aed;
    QAR?: Aed;
    SBD?: Aed;
    LYD?: Aed;
    BBD?: Aed;
    HNL?: Aed;
    SOS?: Aed;
    KYD?: Aed;
    KES?: Aed;
    BHD?: Aed;
    GNF?: Aed;
    RUB?: Aed;
    BND?: Aed;
    SGD?: Aed;
    ZWL?: Aed;
    BYN?: Aed;
    THB?: Aed;
    TND?: Aed;
    SLL?: Aed;
    BTN?: Aed;
    FKP?: Aed;
    CAD?: Aed;
    TTD?: Aed;
    HUF?: Aed;
    CRC?: Aed;
    BGN?: Aed;
    AZN?: Aed;
    IRR?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
export interface Languages {
    eng?: string;
    ara?: string;
    tir?: string;
    smo?: string;
    mkd?: string;
    fra?: string;
    urd?: string;
    gle?: string;
    dan?: string;
    afr?: string;
    deu?: string;
    her?: string;
    hgm?: string;
    kwn?: string;
    loz?: string;
    ndo?: string;
    tsn?: string;
    slk?: string;
    ron?: string;
    kor?: string;
    por?: string;
    zho?: string;
    crs?: string;
    hye?: string;
    nld?: string;
    pap?: string;
    spa?: string;
    rus?: string;
    tgk?: string;
    swe?: string;
    pol?: string;
    kon?: string;
    lin?: string;
    bos?: string;
    hrv?: string;
    srp?: string;
    ita?: string;
    ces?: string;
    est?: string;
    nep?: string;
    sqi?: string;
    fil?: string;
    arc?: string;
    ckb?: string;
    run?: string;
    mon?: string;
    fao?: string;
    grn?: string;
    nor?: string;
    tkl?: string;
    nfr?: string;
    kal?: string;
    fin?: string;
    pau?: string;
    jpn?: string;
    swa?: string;
    kaz?: string;
    sin?: string;
    tam?: string;
    ber?: string;
    mey?: string;
    mya?: string;
    aym?: string;
    que?: string;
    kir?: string;
    prs?: string;
    pus?: string;
    tuk?: string;
    tur?: string;
    nbl?: string;
    nso?: string;
    sot?: string;
    ssw?: string;
    tso?: string;
    ven?: string;
    xho?: string;
    zul?: string;
    mlt?: string;
    gil?: string;
    nrf?: string;
    isl?: string;
    bis?: string;
    hin?: string;
    lao?: string;
    zdj?: string;
    cat?: string;
    eus?: string;
    glc?: string;
    uzb?: string;
    div?: string;
    ind?: string;
    vie?: string;
    msa?: string;
    rar?: string;
    mlg?: string;
    fij?: string;
    hif?: string;
    nno?: string;
    nob?: string;
    smi?: string;
    ell?: string;
    hmo?: string;
    tpi?: string;
    kin?: string;
    lua?: string;
    lit?: string;
    khm?: string;
    cal?: string;
    cha?: string;
    ltz?: string;
    mfe?: string;
    niu?: string;
    ukr?: string;
    tvl?: string;
    pih?: string;
    ton?: string;
    kat?: string;
    amh?: string;
    bjz?: string;
    glv?: string;
    hat?: string;
    ben?: string;
    jam?: string;
    sag?: string;
    cnr?: string;
    lav?: string;
    nya?: string;
    lat?: string;
    de?: string;
    nau?: string;
    pov?: string;
    som?: string;
    bwg?: string;
    kck?: string;
    khi?: string;
    ndc?: string;
    nde?: string;
    sna?: string;
    toi?: string;
    zib?: string;
    slv?: string;
    bel?: string;
    tha?: string;
    mri?: string;
    nzs?: string;
    mah?: string;
    dzo?: string;
    gsw?: string;
    roh?: string;
    hun?: string;
    heb?: string;
    bul?: string;
    aze?: string;
    tet?: string;
    fas?: string;
  }
  export interface Translations {
    ara: Eng;
    bre: Eng;
    ces: Eng;
    cym: Eng;
    deu: Eng;
    est: Eng;
    fin: Eng;
    fra: Eng;
    hrv?: Eng;
    hun: Eng;
    ita: Eng;
    jpn?: Eng;
    kor: Eng;
    nld: Eng;
    per?: Eng;
    pol: Eng;
    por: Eng;
    rus: Eng;
    slk: Eng;
    spa: Eng;
    srp: Eng;
    swe: Eng;
    tur: Eng;
    urd: Eng;
    zho?: Eng;
  }
  