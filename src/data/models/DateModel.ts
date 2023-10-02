
export interface DateTimeModel {
    class:      string;
    properties: Properties;
}

export interface Properties {
    city:         string;
    country:      string;
    country_code: string;
    datetime:     { [key: string]: string };
    ip:           string;
    location:     string;
    postal:       string;
    state:        string;
    state_code:   string;
    timezone:     Timezone;
}

export interface Timezone {
    capital:                     string;
    continent:                   string;
    country:                     string;
    country_code:                string;
    currency_alpha_code:         string;
    currency_code:               string;
    currency_country_minor_unit: string;
    currency_country_name:       string;
    currency_name:               string;
    ds:                          string;
    edgar:                       string;
    fifa:                        string;
    fips:                        string;
    gaul:                        string;
    geoname_id:                  string;
    id:                          string;
    independent:                 boolean;
    ioc:                         string;
    iso3166_1_alpha_2:           string;
    iso3166_1_alpha_3:           string;
    itu:                         string;
    languages:                   string;
    location:                    string;
    marc:                        string;
    phone_prefix:                string;
    tld:                         string;
    un_m49_code:                 string;
    wmo:                         string;
}
