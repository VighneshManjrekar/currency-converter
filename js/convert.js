window.addEventListener("DOMContentLoaded", () => {
    // Intializing arrays
    var countryArray = [
        "AF", "AI", "AU", "BD", "BJ", "BR", "KH", "TD", "CG", "CU", "DM", "FI", "GE", "GD", "HT", "IN", "IL", "KZ", "KW", "LS", "LU", "MY", "MU", "MN", "MM", "NC", "NO", "PG", "PT", "RW", "WS", "RS", "SI", "ES", "SE", "TZ", "TN", "UA", "UZ", "YE", "DZ", "AR", "AZ", "BY", "BO", "BG", "CA", "CN", "CR", "CZ", "EC", "EE", "PF", "GH", "GN", "HK", "IR", "JM", "KI", "LA", "LY", "MK", "ML", "FM", "MS", "NR", "NI", "PK", "PE", "QA", "KN", "ST", "SL", "SO", "SD", "SY", "TG", "TM", "GB", "VE", "AD", "AM", "BS", "BE", "BA", "BF", "KY", "CO", "CI", "DK", "EG", "ET", "GA", "GI", "GW", "HU", "IQ", "JP", "KP", "LV", "LI", "MG", "MT", "MD", "MA", "NP", "NE", "PW", "PH", "RO", "LC", "SA", "SG", "ZA", "SR", "TW", "TO", "TV", "US", "VN", "AL", "AG", "AT", "BB", "BT", "BN", "CM", "CL", "CD", "CY", "DO", "ER", "FR", "DE", "GT", "HN", "ID", "IT", "KE", "KG", "LR", "MO", "MV", "MX", "ME", "NA", "NZ", "OM", "PY", "PR", "SH", "SM", "SC", "SB", "LK", "CH", "TH", "TR", "AE", "VU", "ZM", "AO", "AW", "BH", "BZ", "BW", "BI", "CF", "KM", "HR", "DJ", "SV", "FJ", "GM", "GR", "GY", "IS", "IE", "JO", "KR", "LB", "MW", "MR", "MC", "MZ", "NL", "NG", "PA", "PL", "RU", "VC", "SN", "SK", "SS", "SZ", "TJ", "TT", "UG", "UY", "WF", "LT"
    ]
    var countryName = [
        "Afghanistan", "Anguilla", "Australia", "Bangladesh", "Benin", "Brazil", "Cambodia", "Chad", "Congo", "Cuba", "Dominica", "Finland", "Georgia", "Grenada", "Haiti", "India", "Israel", "Kazakhstan", "Kuwait", "Lesotho", "Luxembourg", "Malaysia", "Mauritius", "Mongolia", "Myanmar", "New Caledonia", "Norway", "Papua New Guinea", "Portugal", "Rwanda", "Samoa (Western)", "Serbia", "Slovenia", "Spain", "Sweden", "Tanzania", "Tunisia", "Ukraine", "Uzbekistan", "Yemen", "Algeria", "Argentina", "Azerbaijan", "Belarus", "Bolivia", "Bulgaria", "Canada", "China", "Costa Rica", "Czech Republic", "Ecuador", "Estonia", "French Polynesia", "Ghana", "Guinea", "Hong Kong", "Iran, Islamic Republic of", "Jamaica", "Kiribati", "Laos", "Libya", "Macedonia (Former Yug. Rep.)", "Mali", "Micronesia", "Montserrat", "Nauru", "Nicaragua", "Pakistan", "Peru", "Qatar", "Saint Kitts and Nevis", "Sao Tome and Principe", "Sierra Leone", "Somalia", "Sudan", "Syria", "Togo", "Turkmenistan", "United Kingdom", "Venezuela", "Andorra", "Armenia", "Bahamas", "Belgium", "Bosnia-Herzegovina", "Burkina Faso", "Cayman Islands", "Colombia", "Côte d'Ivoire", "Denmark", "Egypt", "Ethiopia", "Gabon", "Gibraltar", "Guinea-Bissau", "Hungary", "Iraq", "Japan", "Korea North", "Latvia", "Liechtenstein", "Madagascar", "Malta", "Moldova", "Morocco", "Nepal", "Niger", "Palau", "Philippines", "Romania", "Saint Lucia", "Saudi Arabia", "Singapore", "South Africa", "Suriname", "Taiwan", "Tonga", "Tuvalu", "United States of America", "Vietnam", "Albania", "Antigua and Barbuda", "Austria", "Barbados", "Bhutan", "Brunei", "Cameroon", "Chile", "Congo, Democratic Republic", "Cyprus", "Dominican Republic", "Eritrea", "France", "Germany", "Guatemala", "Honduras", "Indonesia", "Italy", "Kenya", "Kyrgyzstan", "Liberia", "Macau", "Maldives", "Mexico", "Montenegro", "Namibia", "New Zealand", "Oman", "Paraguay", "Puerto Rico", "Saint Helena", "San Marino", "Seychelles", "Solomon Islands", "Sri Lanka", "Switzerland", "Thailand", "Turkey", "United Arab Emirates", "Vanuatu", "Zambia", "Angola", "Aruba", "Bahrain", "Belize", "Botswana", "Burundi", "Central African Republic", "Comoros", "Croatia", "Djibouti", "El Salvador", "Fiji", "Gambia", "Greece", "Guyana", "Iceland", "Ireland", "Jordan", "Korea South", "Lebanon", "Malawi", "Mauritania", "Monaco", "Mozambique", "Netherlands", "Nigeria", "Panama", "Poland", "Russia", "Saint Vincent and the Grenadines", "Senegal", "Slovakia", "South Sudan", "Swaziland", "Tajikistan", "Trinidad and Tobago", "Uganda", "Uruguay", "Wallis and Futuna Islands", "Lithuania"
    ]
    var currecyName = [
        "Afghan afghani", "East Caribbean dollar", "Australian dollar", "Bangladeshi taka", "West African CFA franc", "Brazilian real", "Cambodian riel", "Central African CFA franc", "Central African CFA franc", "Cuban peso", "East Caribbean dollar", "European euro", "Georgian lari", "East Caribbean dollar", "Haitian gourde", "Indian rupee", "Israeli new sheqel", "Kazakhstani tenge", "Kuwaiti dinar", "Lesotho loti", "European euro", "Malaysian ringgit", "Mauritian rupee", "Mongolian tugrik", "Myanma kyat", "CFP franc", "Norwegian krone", "Papua New Guinean kina", "European euro", "Rwandan franc", "Samoan tala", "Serbian dinar", "European euro", "European euro", "Swedish krona", "Tanzanian shilling", "Tunisian dinar", "Ukrainian hryvnia", "Uzbekistani som", "Yemeni rial", "Algerian dinar", "Argentine peso", "Azerbaijani manat", "New Belarusian ruble", "Bolivian boliviano", "Bulgarian lev", "Canadian dollar", "Chinese renminbi", "Costa Rican colon", "Czech koruna", "U.S. Dollar", "European euro", "CFP franc", "Ghanaian cedi", "Guinean franc", "Hong Kong dollar", "Iranian rial", "Jamaican dollar", "Australian dollar", "Lao kip", "Libyan dinar", "Macedonian denar", "West African CFA franc", "U.S. Dollar", "East Caribbean dollar", "Australian dollar", "Nicaraguan cordoba", "Pakistani rupee", "Peruvian nuevo sol", "Qatari riyal", "East Caribbean dollar", "Sao Tome and Principe dobra", "Sierra Leonean leone", "Somali shilling", "Sudanese pound", "Syrian pound", "West African CFA franc", "Turkmenistan manat", "British pound", "Venezuelan bolivar", "European euro", "Armenian dram", "Bahamian dollar", "European euro", "Bosnia and Herzegovina konvertibilna marka", "West African CFA franc", "Cayman Islands dollar", "Colombian peso", "West African CFA franc", "Danish krone", "Egyptian pound", "Ethiopian birr", "Central African CFA franc", "Gibraltar pound", "West African CFA franc", "Hungarian forint", "Iraqi dinar", "Japanese yen", "North Korean won", "Latvian lats", "Swiss Franc", "Malagasy ariary", "European Euro", "Moldovan leu", "Moroccan dirham", "Nepalese rupee", "West African CFA franc", "U.S. Dollar", "Philippine peso", "Romanian leu", "East Caribbean dollar", "Saudi riyal", "Singapore dollar", "South African rand", "Surinamese dollar", "New Taiwan dollar", "Paanga", "Australian dollar", "United States dollar", "Vietnamese dong", "Albanian lek", "East Caribbean dollar", "European euro", "Barbadian dollar", "Bhutanese ngultrum", "Brunei dollar", "Central African CFA franc", "Chilean peso", "Congolese franc", "European euro", "Dominican peso", "Eritrean nakfa", "European euro", "European euro", "Guatemalan quetzal", "Honduran lempira", "Indonesian rupiah", "European euro", "Kenyan shilling", "Kyrgyzstani som", "Liberian dollar", "Macanese pataca", "Maldivian rufiyaa", "Mexican peso", "European Euro", "Namibian dollar", "New Zealand dollar", "Omani rial", "Paraguayan guarani", "U.S. Dollar", "Saint Helena pound", "European euro", "Seychellois rupee", "Solomon Islands dollar", "Sri Lankan rupee", "Swiss franc", "Thai baht", "Turkish new lira", "UAE dirham", "Vanuatu vatu", "Zambian kwacha", "Angolan kwanza", "Aruban florin", "Bahraini dinar", "Belize dollar", "Botswana pula", "Burundi franc", "Central African CFA franc", "Comorian franc", "Croatian kuna", "Djiboutian franc", "U.S. Dollar", "Fijian dollar", "Gambian dalasi", "European euro", "Guyanese dollar", "Icelandic króna", "European euro", "Jordanian dinar", "South Korean won", "Lebanese lira", "Malawian kwacha", "Mauritanian ouguiya", "European Euro", "Mozambican metical", "European euro", "Nigerian naira", "Panamanian balboa", "Polish zloty", "Russian ruble", "East Caribbean dollar", "West African CFA franc", "European euro", "Sudanese pound", "Swazi lilangeni", "Tajikistani somoni", "Trinidad and Tobago dollar", "Ugandan shilling", "Uruguayan peso", "CFP franc", "European euro"
    ]
    var currecyId = [
        "AFN", "XCD", "AUD", "BDT", "XOF", "BRL", "KHR", "XAF", "XAF", "CUP", "XCD", "EUR", "GEL", "XCD", "HTG", "INR", "ILS", "KZT", "KWD", "LSL", "EUR", "MYR", "MUR", "MNT", "MMK", "XPF", "NOK", "PGK", "EUR", "RWF", "WST", "RSD", "EUR", "EUR", "SEK", "TZS", "TND", "UAH", "UZS", "YER", "DZD", "ARS", "AZN", "BYN", "BOB", "BGN", "CAD", "CNY", "CRC", "CZK", "USD", "EUR", "XPF", "GHS", "GNF", "HKD", "IRR", "JMD", "AUD", "LAK", "LYD", "MKD", "XOF", "USD", "XCD", "AUD", "NIO", "PKR", "PEN", "QAR", "XCD", "STD", "SLL", "SOS", "SDG", "SYP", "XOF", "TMT", "GBP", "VEF", "EUR", "AMD", "BSD", "EUR", "BAM", "XOF", "KYD", "COP", "XOF", "DKK", "EGP", "ETB", "XAF", "GIP", "XOF", "HUF", "IQD", "JPY", "KPW", "LVL", "CHF", "MGA", "EUR", "MDL", "MAD", "NPR", "XOF", "USD", "PHP", "RON", "XCD", "SAR", "SGD", "ZAR", "SRD", "TWD", "TOP", "AUD", "USD", "VND", "ALL", "XCD", "EUR", "BBD", "BTN", "BND", "XAF", "CLP", "CDF", "EUR", "DOP", "ERN", "EUR", "EUR", "GTQ", "HNL", "IDR", "EUR", "KES", "KGS", "LRD", "MOP", "MVR", "MXN", "EUR", "NAD", "NZD", "OMR", "PYG", "USD", "SHP", "EUR", "SCR", "SBD", "LKR", "CHF", "THB", "TRY", "AED", "VUV", "ZMW", "AOA", "AWG", "BHD", "BZD", "BWP", "BIF", "XAF", "KMF", "HRK", "DJF", "USD", "FJD", "GMD", "EUR", "GYD", "ISK", "EUR", "JOD", "KRW", "LBP", "MWK", "MRO", "EUR", "MZN", "EUR", "NGN", "PAB", "PLN", "RUB", "XCD", "XOF", "EUR", "SDG", "SZL", "TJS", "TTD", "UGX", "UYU", "XPF", "EUR"
    ]
    // Initializing Variables
    var i
    var ddData = []
    var obj = {}
    var from
    var to

    // Creating Option
    for (i = 0; i < countryArray.length; i++) {
        country = countryArray[i].toLowerCase()
        obj = {
            text: `${currecyName[i]} - ${currecyId[i]}`,
            value: i,
            description: countryName[i],
            imageSrc: `https://www.countryflags.io/${country}/flat/32.png`
        }
        ddData.push(obj)
    }

    $('#convert-from').ddslick({
        data: ddData,
        width: 300,
        height: 450,
        background: 'white',
        imagePosition: "left",
        selectText: "Select currency to convert from",
        onSelected: function (data) {
            let index = data.selectedData.value
            from = currecyId[index]
        }
    });
    $('#convert-to').ddslick({
        data: ddData,
        width: 300,
        height: 450,
        background: 'white',
        imagePosition: "left",
        selectText: "Select currency to convert to",
        onSelected: function (data) {
            let index = data.selectedData.value
            to = currecyId[index]
        }
    });
    document.getElementById('convert').addEventListener('click', convert)
    function convert() {
        amount = document.getElementById("input-amount").value
        if ((from == undefined || from == "") || (to == undefined || to == "") || (amount == undefined || amount == "" || amount == null)) {
            alert("Select proper option")
        } else {
            let query = from + '_' + to
            var url = `https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=37ef3f27b5a978c652ec`
            fetch(url)
                .then(data => { return data.json() })
                .then(res => {
                    let result = amount * res[`${query}`]
                    document.getElementById('result-p-from').innerHTML = `${amount} ${from} =`
                    document.getElementById('result-p-to').innerHTML = `${result} ${to}`
                    document.getElementById('result').style.display = "block"
                    document.getElementById('result-span').innerHTML = `1 ${from}= ${res[`${query}`]} ${to}`
                })

        }
    }




})