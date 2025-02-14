const countryData = [
  {
    Country_Name: 'AFGHANISTAN',
    Currency: 'Afghani',
    ISO4217: 'AFN',
  },
  {
    Country_Name: 'ALBANIA',
    Currency: 'Lek',
    ISO4217: 'ALL',
  },
  {
    Country_Name: 'ALGERIA',
    Currency: 'Algerian Dinar',
    ISO4217: 'DZD',
  },
  {
    Country_Name: 'AMERICAN SAMOA',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'ANDORRA',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'ANGOLA',
    Currency: 'Kwanza',
    ISO4217: 'AOA',
  },
  {
    Country_Name: 'ANGUILLA',
    Currency: 'East Caribbean Dollar',
    ISO4217: 'XCD',
  },
  {
    Country_Name: 'ANTARCTICA',
    Currency: 'No universal currency',
  },
  {
    Country_Name: 'ANTIGUA AND BARBUDA',
    Currency: 'East Caribbean Dollar',
    ISO4217: 'XCD',
  },
  {
    Country_Name: 'ARGENTINA',
    Currency: 'Argentine Peso',
    ISO4217: 'ARS',
  },
  {
    Country_Name: 'ARMENIA',
    Currency: 'Armenian Dram',
    ISO4217: 'AMD',
  },
  {
    Country_Name: 'ARUBA',
    Currency: 'Aruban Florin',
    ISO4217: 'AWG',
  },
  {
    Country_Name: 'AUSTRALIA',
    Currency: 'Australian Dollar',
    ISO4217: 'AUD',
  },
  {
    Country_Name: 'AUSTRIA',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'AZERBAIJAN',
    Currency: 'Azerbaijanian Manat',
    ISO4217: 'AZN',
  },
  {
    Country_Name: 'BAHAMAS (THE)',
    Currency: 'Bahamian Dollar',
    ISO4217: 'BSD',
  },
  {
    Country_Name: 'BAHRAIN',
    Currency: 'Bahraini Dinar',
    ISO4217: 'BHD',
  },
  {
    Country_Name: 'BANGLADESH',
    Currency: 'Taka',
    ISO4217: 'BDT',
  },
  {
    Country_Name: 'BARBADOS',
    Currency: 'Barbados Dollar',
    ISO4217: 'BBD',
  },
  {
    Country_Name: 'BELARUS',
    Currency: 'Belarussian Ruble',
    ISO4217: 'BYN',
  },
  {
    Country_Name: 'BELGIUM',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'BELIZE',
    Currency: 'Belize Dollar',
    ISO4217: 'BZD',
  },
  {
    Country_Name: 'BENIN',
    Currency: 'CFA Franc BCEAO',
    ISO4217: 'XOF',
  },
  {
    Country_Name: 'BERMUDA',
    Currency: 'Bermudian Dollar',
    ISO4217: 'BMD',
  },
  {
    Country_Name: 'BHUTAN',
    Currency: 'Ngultrum',
    ISO4217: 'BTN',
  },
  {
    Country_Name: 'BHUTAN',
    Currency: 'Indian Rupee',
    ISO4217: 'INR',
  },
  {
    Country_Name: 'BOLIVIA (PLURINATIONAL STATE OF)',
    Currency: 'Boliviano',
    ISO4217: 'BOB',
  },
  {
    Country_Name: 'BOLIVIA (PLURINATIONAL STATE OF)',
    Currency: 'Mvdol',
    ISO4217: 'BOV',
  },
  {
    Country_Name: 'BONAIRE, SINT EUSTATIUS AND SABA',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'BOSNIA AND HERZEGOVINA',
    Currency: 'Convertible Mark',
    ISO4217: 'BAM',
  },
  {
    Country_Name: 'BOTSWANA',
    Currency: 'Pula',
    ISO4217: 'BWP',
  },
  {
    Country_Name: 'BOUVET ISLAND',
    Currency: 'Norwegian Krone',
    ISO4217: 'NOK',
  },
  {
    Country_Name: 'BRAZIL',
    Currency: 'Brazilian Real',
    ISO4217: 'BRL',
  },
  {
    Country_Name: 'BRITISH INDIAN OCEAN TERRITORY (THE)',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'BRUNEI DARUSSALAM',
    Currency: 'Brunei Dollar',
    ISO4217: 'BND',
  },
  {
    Country_Name: 'BULGARIA',
    Currency: 'Bulgarian Lev',
    ISO4217: 'BGN',
  },
  {
    Country_Name: 'BURKINA FASO',
    Currency: 'CFA Franc BCEAO',
    ISO4217: 'XOF',
  },
  {
    Country_Name: 'BURUNDI',
    Currency: 'Burundi Franc',
    ISO4217: 'BIF',
  },
  {
    Country_Name: 'CABO VERDE',
    Currency: 'Cabo Verde Escudo',
    ISO4217: 'CVE',
  },
  {
    Country_Name: 'CAMBODIA',
    Currency: 'Riel',
    ISO4217: 'KHR',
  },
  {
    Country_Name: 'CAMEROON',
    Currency: 'CFA Franc BEAC',
    ISO4217: 'XAF',
  },
  {
    Country_Name: 'CANADA',
    Currency: 'Canadian Dollar',
    ISO4217: 'CAD',
  },
  {
    Country_Name: 'CAYMAN ISLANDS (THE)',
    Currency: 'Cayman Islands Dollar',
    ISO4217: 'KYD',
  },
  {
    Country_Name: 'CENTRAL AFRICAN REPUBLIC (THE)',
    Currency: 'CFA Franc BEAC',
    ISO4217: 'XAF',
  },
  {
    Country_Name: 'CHAD',
    Currency: 'CFA Franc BEAC',
    ISO4217: 'XAF',
  },
  {
    Country_Name: 'CHILE',
    Currency: 'Unidad de Fomento',
    ISO4217: 'CLF',
  },
  {
    Country_Name: 'CHILE',
    Currency: 'Chilean Peso',
    ISO4217: 'CLP',
  },
  {
    Country_Name: 'CHINA',
    Currency: 'Yuan Renminbi',
    ISO4217: 'CNY',
  },
  {
    Country_Name: 'CHRISTMAS ISLAND',
    Currency: 'Australian Dollar',
    ISO4217: 'AUD',
  },
  {
    Country_Name: 'COCOS (KEELING) ISLANDS (THE)',
    Currency: 'Australian Dollar',
    ISO4217: 'AUD',
  },
  {
    Country_Name: 'COLOMBIA',
    Currency: 'Colombian Peso',
    ISO4217: 'COP',
  },
  {
    Country_Name: 'COLOMBIA',
    Currency: 'Unidad de Valor Real',
    ISO4217: 'COU',
  },
  {
    Country_Name: 'COMOROS (THE)',
    Currency: 'Comoro Franc',
    ISO4217: 'KMF',
  },
  {
    Country_Name: 'CONGO (THE DEMOCRATIC REPUBLIC OF THE)',
    Currency: 'Congolese Franc',
    ISO4217: 'CDF',
  },
  {
    Country_Name: 'CONGO (THE)',
    Currency: 'CFA Franc BEAC',
    ISO4217: 'XAF',
  },
  {
    Country_Name: 'COOK ISLANDS (THE)',
    Currency: 'New Zealand Dollar',
    ISO4217: 'NZD',
  },
  {
    Country_Name: 'COSTA RICA',
    Currency: 'Costa Rican Colon',
    ISO4217: 'CRC',
  },
  {
    Country_Name: 'CROATIA',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'CUBA',
    Currency: 'Peso Convertible',
    ISO4217: 'CUC',
  },
  {
    Country_Name: 'CUBA',
    Currency: 'Cuban Peso',
    ISO4217: 'CUP',
  },
  {
    Country_Name: 'CURAÇAO',
    Currency: 'Netherlands Antillean Guilder',
    ISO4217: 'ANG',
  },
  {
    Country_Name: 'CYPRUS',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'CZECH REPUBLIC (THE)',
    Currency: 'Czech Koruna',
    ISO4217: 'CZK',
  },
  {
    Country_Name: "CÔTE D'IVOIRE",
    Currency: 'CFA Franc BCEAO',
    ISO4217: 'XOF',
  },
  {
    Country_Name: 'DENMARK',
    Currency: 'Danish Krone',
    ISO4217: 'DKK',
  },
  {
    Country_Name: 'DJIBOUTI',
    Currency: 'Djibouti Franc',
    ISO4217: 'DJF',
  },
  {
    Country_Name: 'DOMINICA',
    Currency: 'East Caribbean Dollar',
    ISO4217: 'XCD',
  },
  {
    Country_Name: 'DOMINICAN REPUBLIC (THE)',
    Currency: 'Dominican Peso',
    ISO4217: 'DOP',
  },
  {
    Country_Name: 'ECUADOR',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'EGYPT',
    Currency: 'Egyptian Pound',
    ISO4217: 'EGP',
  },
  {
    Country_Name: 'EL SALVADOR',
    Currency: 'El Salvador Colon',
    ISO4217: 'SVC',
  },
  {
    Country_Name: 'EL SALVADOR',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'EQUATORIAL GUINEA',
    Currency: 'CFA Franc BEAC',
    ISO4217: 'XAF',
  },
  {
    Country_Name: 'ERITREA',
    Currency: 'Nakfa',
    ISO4217: 'ERN',
  },
  {
    Country_Name: 'ESTONIA',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'ETHIOPIA',
    Currency: 'Ethiopian Birr',
    ISO4217: 'ETB',
  },
  {
    Country_Name: 'EUROPEAN UNION',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'FALKLAND ISLANDS (THE) [MALVINAS]',
    Currency: 'Falkland Islands Pound',
    ISO4217: 'FKP',
  },
  {
    Country_Name: 'FAROE ISLANDS (THE)',
    Currency: 'Danish Krone',
    ISO4217: 'DKK',
  },
  {
    Country_Name: 'FIJI',
    Currency: 'Fiji Dollar',
    ISO4217: 'FJD',
  },
  {
    Country_Name: 'FINLAND',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'FRANCE',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'FRENCH GUIANA',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'FRENCH POLYNESIA',
    Currency: 'CFP Franc',
    ISO4217: 'XPF',
  },
  {
    Country_Name: 'FRENCH SOUTHERN TERRITORIES (THE)',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'GABON',
    Currency: 'CFA Franc BEAC',
    ISO4217: 'XAF',
  },
  {
    Country_Name: 'GAMBIA (THE)',
    Currency: 'Dalasi',
    ISO4217: 'GMD',
  },
  {
    Country_Name: 'GEORGIA',
    Currency: 'Lari',
    ISO4217: 'GEL',
  },
  {
    Country_Name: 'GERMANY',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'GHANA',
    Currency: 'Ghana Cedi',
    ISO4217: 'GHS',
  },
  {
    Country_Name: 'GIBRALTAR',
    Currency: 'Gibraltar Pound',
    ISO4217: 'GIP',
  },
  {
    Country_Name: 'GREECE',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'GREENLAND',
    Currency: 'Danish Krone',
    ISO4217: 'DKK',
  },
  {
    Country_Name: 'GRENADA',
    Currency: 'East Caribbean Dollar',
    ISO4217: 'XCD',
  },
  {
    Country_Name: 'GUADELOUPE',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'GUAM',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'GUATEMALA',
    Currency: 'Quetzal',
    ISO4217: 'GTQ',
  },
  {
    Country_Name: 'GUERNSEY',
    Currency: 'Pound Sterling',
    ISO4217: 'GBP',
  },
  {
    Country_Name: 'GUINEA',
    Currency: 'Guinea Franc',
    ISO4217: 'GNF',
  },
  {
    Country_Name: 'GUINEA-BISSAU',
    Currency: 'CFA Franc BCEAO',
    ISO4217: 'XOF',
  },
  {
    Country_Name: 'GUYANA',
    Currency: 'Guyana Dollar',
    ISO4217: 'GYD',
  },
  {
    Country_Name: 'HAITI',
    Currency: 'Gourde',
    ISO4217: 'HTG',
  },
  {
    Country_Name: 'HAITI',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'HEARD ISLAND AND McDONALD ISLANDS',
    Currency: 'Australian Dollar',
    ISO4217: 'AUD',
  },
  {
    Country_Name: 'HOLY SEE (THE)',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'HONDURAS',
    Currency: 'Lempira',
    ISO4217: 'HNL',
  },
  {
    Country_Name: 'HONG KONG',
    Currency: 'Hong Kong Dollar',
    ISO4217: 'HKD',
  },
  {
    Country_Name: 'HUNGARY',
    Currency: 'Forint',
    ISO4217: 'HUF',
  },
  {
    Country_Name: 'ICELAND',
    Currency: 'Iceland Krona',
    ISO4217: 'ISK',
  },
  {
    Country_Name: 'INDIA',
    Currency: 'Indian Rupee',
    ISO4217: 'INR',
  },
  {
    Country_Name: 'INDONESIA',
    Currency: 'Rupiah',
    ISO4217: 'IDR',
  },
  {
    Country_Name: 'INTERNATIONAL MONETARY FUND (IMF) ',
    Currency: 'SDR (Special Drawing Right)',
    ISO4217: 'XDR',
  },
  {
    Country_Name: 'IRAN (ISLAMIC REPUBLIC OF)',
    Currency: 'Iranian Rial',
    ISO4217: 'IRR',
  },
  {
    Country_Name: 'IRAQ',
    Currency: 'Iraqi Dinar',
    ISO4217: 'IQD',
  },
  {
    Country_Name: 'IRELAND',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'ISLE OF MAN',
    Currency: 'Pound Sterling',
    ISO4217: 'GBP',
  },
  {
    Country_Name: 'ISRAEL',
    Currency: 'New Israeli Sheqel',
    ISO4217: 'ILS',
  },
  {
    Country_Name: 'ITALY',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'JAMAICA',
    Currency: 'Jamaican Dollar',
    ISO4217: 'JMD',
  },
  {
    Country_Name: 'JAPAN',
    Currency: 'Yen',
    ISO4217: 'JPY',
  },
  {
    Country_Name: 'JERSEY',
    Currency: 'Pound Sterling',
    ISO4217: 'GBP',
  },
  {
    Country_Name: 'JORDAN',
    Currency: 'Jordanian Dinar',
    ISO4217: 'JOD',
  },
  {
    Country_Name: 'KAZAKHSTAN',
    Currency: 'Tenge',
    ISO4217: 'KZT',
  },
  {
    Country_Name: 'KENYA',
    Currency: 'Kenyan Shilling',
    ISO4217: 'KES',
  },
  {
    Country_Name: 'KIRIBATI',
    Currency: 'Australian Dollar',
    ISO4217: 'AUD',
  },
  {
    Country_Name: 'KOREA (THE DEMOCRATIC PEOPLE’S REPUBLIC OF)',
    Currency: 'North Korean Won',
    ISO4217: 'KPW',
  },
  {
    Country_Name: 'KOREA (THE REPUBLIC OF)',
    Currency: 'Won',
    ISO4217: 'KRW',
  },
  {
    Country_Name: 'KUWAIT',
    Currency: 'Kuwaiti Dinar',
    ISO4217: 'KWD',
  },
  {
    Country_Name: 'KYRGYZSTAN',
    Currency: 'Som',
    ISO4217: 'KGS',
  },
  {
    Country_Name: 'LAO PEOPLE’S DEMOCRATIC REPUBLIC (THE)',
    Currency: 'Kip',
    ISO4217: 'LAK',
  },
  {
    Country_Name: 'LATVIA',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'LEBANON',
    Currency: 'Lebanese Pound',
    ISO4217: 'LBP',
  },
  {
    Country_Name: 'LESOTHO',
    Currency: 'Loti',
    ISO4217: 'LSL',
  },
  {
    Country_Name: 'LESOTHO',
    Currency: 'Rand',
    ISO4217: 'ZAR',
  },
  {
    Country_Name: 'LIBERIA',
    Currency: 'Liberian Dollar',
    ISO4217: 'LRD',
  },
  {
    Country_Name: 'LIBYA',
    Currency: 'Libyan Dinar',
    ISO4217: 'LYD',
  },
  {
    Country_Name: 'LIECHTENSTEIN',
    Currency: 'Swiss Franc',
    ISO4217: 'CHF',
  },
  {
    Country_Name: 'LITHUANIA',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'LUXEMBOURG',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'MACAO',
    Currency: 'Pataca',
    ISO4217: 'MOP',
  },
  {
    Country_Name: 'MADAGASCAR',
    Currency: 'Malagasy Ariary',
    ISO4217: 'MGA',
  },
  {
    Country_Name: 'MALAWI',
    Currency: 'Kwacha',
    ISO4217: 'MWK',
  },
  {
    Country_Name: 'MALAYSIA',
    Currency: 'Malaysian Ringgit',
    ISO4217: 'MYR',
  },
  {
    Country_Name: 'MALDIVES',
    Currency: 'Rufiyaa',
    ISO4217: 'MVR',
  },
  {
    Country_Name: 'MALI',
    Currency: 'CFA Franc BCEAO',
    ISO4217: 'XOF',
  },
  {
    Country_Name: 'MALTA',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'MARSHALL ISLANDS (THE)',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'MARTINIQUE',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'MAURITANIA',
    Currency: 'Ouguiya',
    ISO4217: 'MRU',
  },
  {
    Country_Name: 'MAURITIUS',
    Currency: 'Mauritius Rupee',
    ISO4217: 'MUR',
  },
  {
    Country_Name: 'MAYOTTE',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP',
    Currency: 'ADB Unit of Account',
    ISO4217: 'XUA',
  },
  {
    Country_Name: 'MEXICO',
    Currency: 'Mexican Peso',
    ISO4217: 'MXN',
  },
  {
    Country_Name: 'MEXICO',
    Currency: 'Mexican Unidad de Inversion (UDI)',
    ISO4217: 'MXV',
  },
  {
    Country_Name: 'MICRONESIA (FEDERATED STATES OF)',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'MOLDOVA (THE REPUBLIC OF)',
    Currency: 'Moldovan Leu',
    ISO4217: 'MDL',
  },
  {
    Country_Name: 'MONACO',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'MONGOLIA',
    Currency: 'Tugrik',
    ISO4217: 'MNT',
  },
  {
    Country_Name: 'MONTENEGRO',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'MONTSERRAT',
    Currency: 'East Caribbean Dollar',
    ISO4217: 'XCD',
  },
  {
    Country_Name: 'MOROCCO',
    Currency: 'Moroccan Dirham',
    ISO4217: 'MAD',
  },
  {
    Country_Name: 'MOZAMBIQUE',
    Currency: 'Mozambique Metical',
    ISO4217: 'MZN',
  },
  {
    Country_Name: 'MYANMAR',
    Currency: 'Kyat',
    ISO4217: 'MMK',
  },
  {
    Country_Name: 'NAMIBIA',
    Currency: 'Namibia Dollar',
    ISO4217: 'NAD',
  },
  {
    Country_Name: 'NAMIBIA',
    Currency: 'Rand',
    ISO4217: 'ZAR',
  },
  {
    Country_Name: 'NAURU',
    Currency: 'Australian Dollar',
    ISO4217: 'AUD',
  },
  {
    Country_Name: 'NEPAL',
    Currency: 'Nepalese Rupee',
    ISO4217: 'NPR',
  },
  {
    Country_Name: 'NETHERLANDS (THE)',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'NEW CALEDONIA',
    Currency: 'CFP Franc',
    ISO4217: 'XPF',
  },
  {
    Country_Name: 'NEW ZEALAND',
    Currency: 'New Zealand Dollar',
    ISO4217: 'NZD',
  },
  {
    Country_Name: 'NICARAGUA',
    Currency: 'Cordoba Oro',
    ISO4217: 'NIO',
  },
  {
    Country_Name: 'NIGER (THE)',
    Currency: 'CFA Franc BCEAO',
    ISO4217: 'XOF',
  },
  {
    Country_Name: 'NIGERIA',
    Currency: 'Naira',
    ISO4217: 'NGN',
  },
  {
    Country_Name: 'NIUE',
    Currency: 'New Zealand Dollar',
    ISO4217: 'NZD',
  },
  {
    Country_Name: 'NORFOLK ISLAND',
    Currency: 'Australian Dollar',
    ISO4217: 'AUD',
  },
  {
    Country_Name: 'NORTHERN MARIANA ISLANDS (THE)',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'NORWAY',
    Currency: 'Norwegian Krone',
    ISO4217: 'NOK',
  },
  {
    Country_Name: 'OMAN',
    Currency: 'Rial Omani',
    ISO4217: 'OMR',
  },
  {
    Country_Name: 'PAKISTAN',
    Currency: 'Pakistan Rupee',
    ISO4217: 'PKR',
  },
  {
    Country_Name: 'PALAU',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'PALESTINE, STATE OF',
    Currency: 'No universal currency',
  },
  {
    Country_Name: 'PANAMA',
    Currency: 'Balboa',
    ISO4217: 'PAB',
  },
  {
    Country_Name: 'PANAMA',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'PAPUA NEW GUINEA',
    Currency: 'Kina',
    ISO4217: 'PGK',
  },
  {
    Country_Name: 'PARAGUAY',
    Currency: 'Guarani',
    ISO4217: 'PYG',
  },
  {
    Country_Name: 'PERU',
    Currency: 'Nuevo Sol',
    ISO4217: 'PEN',
  },
  {
    Country_Name: 'PHILIPPINES (THE)',
    Currency: 'Philippine Peso',
    ISO4217: 'PHP',
  },
  {
    Country_Name: 'PITCAIRN',
    Currency: 'New Zealand Dollar',
    ISO4217: 'NZD',
  },
  {
    Country_Name: 'POLAND',
    Currency: 'Zloty',
    ISO4217: 'PLN',
  },
  {
    Country_Name: 'PORTUGAL',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'PUERTO RICO',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'QATAR',
    Currency: 'Qatari Rial',
    ISO4217: 'QAR',
  },
  {
    Country_Name: 'REPUBLIC OF NORTH MACEDONIA',
    Currency: 'Denar',
    ISO4217: 'MKD',
  },
  {
    Country_Name: 'ROMANIA',
    Currency: 'Romanian Leu',
    ISO4217: 'RON',
  },
  {
    Country_Name: 'RUSSIAN FEDERATION (THE)',
    Currency: 'Russian Ruble',
    ISO4217: 'RUB',
  },
  {
    Country_Name: 'RWANDA',
    Currency: 'Rwanda Franc',
    ISO4217: 'RWF',
  },
  {
    Country_Name: 'RÉUNION',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'SAINT BARTHÉLEMY',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA',
    Currency: 'Saint Helena Pound',
    ISO4217: 'SHP',
  },
  {
    Country_Name: 'SAINT KITTS AND NEVIS',
    Currency: 'East Caribbean Dollar',
    ISO4217: 'XCD',
  },
  {
    Country_Name: 'SAINT LUCIA',
    Currency: 'East Caribbean Dollar',
    ISO4217: 'XCD',
  },
  {
    Country_Name: 'SAINT MARTIN (FRENCH PART)',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'SAINT PIERRE AND MIQUELON',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'SAINT VINCENT AND THE GRENADINES',
    Currency: 'East Caribbean Dollar',
    ISO4217: 'XCD',
  },
  {
    Country_Name: 'SAMOA',
    Currency: 'Tala',
    ISO4217: 'WST',
  },
  {
    Country_Name: 'SAN MARINO',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'SAO TOME AND PRINCIPE',
    Currency: 'Dobra',
    ISO4217: 'STN',
  },
  {
    Country_Name: 'SAUDI ARABIA',
    Currency: 'Saudi Riyal',
    ISO4217: 'SAR',
  },
  {
    Country_Name: 'SENEGAL',
    Currency: 'CFA Franc BCEAO',
    ISO4217: 'XOF',
  },
  {
    Country_Name: 'SERBIA',
    Currency: 'Serbian Dinar',
    ISO4217: 'RSD',
  },
  {
    Country_Name: 'SEYCHELLES',
    Currency: 'Seychelles Rupee',
    ISO4217: 'SCR',
  },
  {
    Country_Name: 'SIERRA LEONE',
    Currency: 'Leone',
    ISO4217: 'SLE',
  },
  {
    Country_Name: 'SINGAPORE',
    Currency: 'Singapore Dollar',
    ISO4217: 'SGD',
  },
  {
    Country_Name: 'SINT MAARTEN (DUTCH PART)',
    Currency: 'Netherlands Antillean Guilder',
    ISO4217: 'ANG',
  },
  {
    Country_Name: 'SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS SUCRE',
    Currency: 'Sucre',
    ISO4217: 'XSU',
  },
  {
    Country_Name: 'SLOVAKIA',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'SLOVENIA',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'SOLOMON ISLANDS',
    Currency: 'Solomon Islands Dollar',
    ISO4217: 'SBD',
  },
  {
    Country_Name: 'SOMALIA',
    Currency: 'Somali Shilling',
    ISO4217: 'SOS',
  },
  {
    Country_Name: 'SOUTH AFRICA',
    Currency: 'Rand',
    ISO4217: 'ZAR',
  },
  {
    Country_Name: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS',
    Currency: 'No universal currency',
  },
  {
    Country_Name: 'SOUTH SUDAN',
    Currency: 'South Sudanese Pound',
    ISO4217: 'SSP',
  },
  {
    Country_Name: 'SPAIN',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
  {
    Country_Name: 'SRI LANKA',
    Currency: 'Sri Lanka Rupee',
    ISO4217: 'LKR',
  },
  {
    Country_Name: 'SUDAN (THE)',
    Currency: 'Sudanese Pound',
    ISO4217: 'SDG',
  },
  {
    Country_Name: 'SURINAME',
    Currency: 'Surinam Dollar',
    ISO4217: 'SRD',
  },
  {
    Country_Name: 'SVALBARD AND JAN MAYEN',
    Currency: 'Norwegian Krone',
    ISO4217: 'NOK',
  },
  {
    Country_Name: 'SWAZILAND',
    Currency: 'Lilangeni',
    ISO4217: 'SZL',
  },
  {
    Country_Name: 'SWEDEN',
    Currency: 'Swedish Krona',
    ISO4217: 'SEK',
  },
  {
    Country_Name: 'SWITZERLAND',
    Currency: 'WIR Euro',
    ISO4217: 'CHE',
  },
  {
    Country_Name: 'SWITZERLAND',
    Currency: 'Swiss Franc',
    ISO4217: 'CHF',
  },
  {
    Country_Name: 'SWITZERLAND',
    Currency: 'WIR Franc',
    ISO4217: 'CHW',
  },
  {
    Country_Name: 'SYRIAN ARAB REPUBLIC',
    Currency: 'Syrian Pound',
    ISO4217: 'SYP',
  },
  {
    Country_Name: 'TAIWAN (PROVINCE OF CHINA)',
    Currency: 'New Taiwan Dollar',
    ISO4217: 'TWD',
  },
  {
    Country_Name: 'TAJIKISTAN',
    Currency: 'Somoni',
    ISO4217: 'TJS',
  },
  {
    Country_Name: 'TANZANIA, UNITED REPUBLIC OF',
    Currency: 'Tanzanian Shilling',
    ISO4217: 'TZS',
  },
  {
    Country_Name: 'THAILAND',
    Currency: 'Baht',
    ISO4217: 'THB',
  },
  {
    Country_Name: 'TIMOR-LESTE',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'TOGO',
    Currency: 'CFA Franc BCEAO',
    ISO4217: 'XOF',
  },
  {
    Country_Name: 'TOKELAU',
    Currency: 'New Zealand Dollar',
    ISO4217: 'NZD',
  },
  {
    Country_Name: 'TONGA',
    Currency: 'Pa’anga',
    ISO4217: 'TOP',
  },
  {
    Country_Name: 'TRINIDAD AND TOBAGO',
    Currency: 'Trinidad and Tobago Dollar',
    ISO4217: 'TTD',
  },
  {
    Country_Name: 'TUNISIA',
    Currency: 'Tunisian Dinar',
    ISO4217: 'TND',
  },
  {
    Country_Name: 'TURKEY',
    Currency: 'Turkish Lira',
    ISO4217: 'TRY',
  },
  {
    Country_Name: 'TURKMENISTAN',
    Currency: 'Turkmenistan New Manat',
    ISO4217: 'TMT',
  },
  {
    Country_Name: 'TURKS AND CAICOS ISLANDS (THE)',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'TUVALU',
    Currency: 'Australian Dollar',
    ISO4217: 'AUD',
  },
  {
    Country_Name: 'UGANDA',
    Currency: 'Uganda Shilling',
    ISO4217: 'UGX',
  },
  {
    Country_Name: 'UKRAINE',
    Currency: 'Hryvnia',
    ISO4217: 'UAH',
  },
  {
    Country_Name: 'UNITED ARAB EMIRATES (THE)',
    Currency: 'UAE Dirham',
    ISO4217: 'AED',
  },
  {
    Country_Name: 'UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)',
    Currency: 'Pound Sterling',
    ISO4217: 'GBP',
  },
  {
    Country_Name: 'UNITED STATES MINOR OUTLYING ISLANDS (THE)',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'UNITED STATES OF AMERICA (THE)',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'UNITED STATES OF AMERICA (THE)',
    Currency: 'US Dollar (Next day)',
    ISO4217: 'USN',
  },
  {
    Country_Name: 'URUGUAY',
    Currency: 'Uruguay Peso en Unidades Indexadas (URUIURUI)',
    ISO4217: 'UYI',
  },
  {
    Country_Name: 'URUGUAY',
    Currency: 'Peso Uruguayo',
    ISO4217: 'UYU',
  },
  {
    Country_Name: 'UZBEKISTAN',
    Currency: 'Uzbekistan Sum',
    ISO4217: 'UZS',
  },
  {
    Country_Name: 'VANUATU',
    Currency: 'Vatu',
    ISO4217: 'VUV',
  },
  {
    Country_Name: 'VENEZUELA (BOLIVARIAN REPUBLIC OF)',
    Currency: 'Bolivar',
    ISO4217: 'VEF',
  },
  {
    Country_Name: 'VENEZUELA (BOLIVARIAN REPUBLIC OF)',
    Currency: 'Bolivar',
    ISO4217: 'VED',
  },
  {
    Country_Name: 'VIET NAM',
    Currency: 'Dong',
    ISO4217: 'VND',
  },
  {
    Country_Name: 'VIRGIN ISLANDS (BRITISH)',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'VIRGIN ISLANDS (U.S.)',
    Currency: 'US Dollar',
    ISO4217: 'USD',
  },
  {
    Country_Name: 'WALLIS AND FUTUNA',
    Currency: 'CFP Franc',
    ISO4217: 'XPF',
  },
  {
    Country_Name: 'WESTERN SAHARA',
    Currency: 'Moroccan Dirham',
    ISO4217: 'MAD',
  },
  {
    Country_Name: 'YEMEN',
    Currency: 'Yemeni Rial',
    ISO4217: 'YER',
  },
  {
    Country_Name: 'ZAMBIA',
    Currency: 'Zambian Kwacha',
    ISO4217: 'ZMW',
  },
  {
    Country_Name: 'ZIMBABWE',
    Currency: 'Zimbabwe Dollar',
    ISO4217: 'ZWL',
  },
  {
    Country_Name: 'ÅLAND ISLANDS',
    Currency: 'Euro',
    ISO4217: 'EUR',
  },
];
