import chai from 'chai';
import { cleanData } from './utils';
const expect = chai.expect;

describe('Clean Data', () => {
  let data = [
    {
    "section": "arts",
    "subsection": "music",
    "title": "How Arcade Fire Found a Way Back",
    "abstract": "After a meteoric rise that built a passionate fan base, the band had trouble connecting on its last album. A new release, “We,” links the group’s past to its hopes for the future.",
    "url": "https://www.nytimes.com/2022/04/22/arts/music/arcade-fire-we.html",
    "uri": "nyt://article/bcf66708-f7a7-501c-8fe4-c940e3abb11e",
    "byline": "By Jeremy Gordon",
    "item_type": "Article",
    "updated_date": "2022-04-22T05:00:24-04:00",
    "created_date": "2022-04-22T05:00:24-04:00",
    "published_date": "2022-04-22T05:00:24-04:00",
    "material_type_facet": "",
    "kicker": "",
    "des_facet": [
    "Pop and Rock Music",
    "We (Album)",
    "Content Type: Personal Profile"
    ],
    "org_facet": [
    "Arcade Fire (Music Group)"
    ],
    "per_facet": [
    "Butler, Win",
    "Chassagne, Regine"
    ],
    "geo_facet": [],
    "multimedia": [
    {
    "url": "https://static01.nyt.com/images/2022/04/24/arts/24arcade-fire1/merlin_205348377_cad4696c-63f1-4374-9262-82c4af2c7920-superJumbo.jpg",
    "format": "Super Jumbo",
    "height": 2048,
    "width": 1359,
    "type": "image",
    "subtype": "photo",
    "caption": "From left: Richard Reed Parry, Tim Kingsbury, Régine Chassagne, Jeremy Gara and Win Butler of Arcade Fire.",
    "copyright": "OK McCausland for The New York Times"
    },
    {
    "url": "https://static01.nyt.com/images/2022/04/24/arts/24arcade-fire1/24arcade-fire1-threeByTwoSmallAt2X.jpg",
    "format": "threeByTwoSmallAt2X",
    "height": 400,
    "width": 600,
    "type": "image",
    "subtype": "photo",
    "caption": "From left: Richard Reed Parry, Tim Kingsbury, Régine Chassagne, Jeremy Gara and Win Butler of Arcade Fire.",
    "copyright": "OK McCausland for The New York Times"
    },
    {
    "url": "https://static01.nyt.com/images/2022/04/24/arts/24arcade-fire1/24arcade-fire1-thumbLarge.jpg",
    "format": "Large Thumbnail",
    "height": 150,
    "width": 150,
    "type": "image",
    "subtype": "photo",
    "caption": "From left: Richard Reed Parry, Tim Kingsbury, Régine Chassagne, Jeremy Gara and Win Butler of Arcade Fire.",
    "copyright": "OK McCausland for The New York Times"
    }
    ],
    "short_url": "https://nyti.ms/3xLMUy6"
    },
    {
    "section": "theater",
    "subsection": "",
    "title": "The Playwright Making a Farce of the Patriarchy",
    "abstract": "“POTUS” will be the writer Selina Fillinger’s Broadway debut. “I really didn’t feel like I needed to do any research. I have been all of those women,” she said.",
    "url": "https://www.nytimes.com/2022/04/22/theater/potus-selina-fillinger-broadway.html",
    "uri": "nyt://article/9fa58daf-27f9-5af8-8276-026efc0db4a2",
    "byline": "By Amanda Hess",
    "item_type": "Article",
    "updated_date": "2022-04-22T09:00:04-04:00",
    "created_date": "2022-04-22T09:00:04-04:00",
    "published_date": "2022-04-22T09:00:04-04:00",
    "material_type_facet": "",
    "kicker": "",
    "des_facet": [
    "Theater",
    "Writing and Writers",
    "Women and Girls",
    "Content Type: Personal Profile",
    "United States Politics and Government",
    "POTUS: Or, Behind Every Great Dumbass Are Seven Women Trying to Keep Him Alive (Play)"
    ],
    "org_facet": [
    "Shubert Theater"
    ],
    "per_facet": [
    "Cooper, Lilli",
    "DeLaria, Lea",
    "Dratch, Rachel",
    "Nakamura, Suzy",
    "Stroman, Susan",
    "Williams, Vanessa"
    ],
    "geo_facet": [],
    "multimedia": [],
    "short_url": "https://nyti.ms/3K7KZX5"
    },
    {
    "section": "arts",
    "subsection": "television",
    "title": "‘We Own This City’ Brings George Pelecanos Back to Baltimore",
    "abstract": "The crime novelist broke into TV as a writer on “The Wire.” For his first stint as showrunner, he wanted to get the gang back together one more time.",
    "url": "https://www.nytimes.com/2022/04/22/arts/television/george-pelecanos-we-own-this-city.html",
    "uri": "nyt://article/9ec559fc-1ab8-59b8-8471-9ba5bfa80d17",
    "byline": "By Noel Murray",
    "item_type": "Article",
    "updated_date": "2022-04-22T09:00:12-04:00",
    "created_date": "2022-04-22T09:00:12-04:00",
    "published_date": "2022-04-22T09:00:12-04:00",
    "material_type_facet": "",
    "kicker": "",
    "des_facet": [
    "Television",
    "We Own This City (TV Program)",
    "The Wire (TV Program)"
    ],
    "org_facet": [
    "Home Box Office"
    ],
    "per_facet": [
    "Pelecanos, George P",
    "Simon, David (1960- )"
    ],
    "geo_facet": [],
    "multimedia": [
    {
    "url": "https://static01.nyt.com/images/2022/04/24/arts/24Pelecanos2/merlin_205219113_a7281d7f-e6ef-448f-aff1-aced6a4ba658-superJumbo.jpg",
    "format": "Super Jumbo",
    "height": 2048,
    "width": 1537,
    "type": "image",
    "subtype": "photo",
    "caption": "George Pelecanos teamed with David Simon, his longtime TV partner, for “We Own This City.” Simon called the show kind of a coda to “The Wire.”",
    "copyright": "Jared Soares for The New York Times"
    },
    {
    "url": "https://static01.nyt.com/images/2022/04/24/arts/24Pelecanos2/24Pelecanos2-threeByTwoSmallAt2X.jpg",
    "format": "threeByTwoSmallAt2X",
    "height": 400,
    "width": 600,
    "type": "image",
    "subtype": "photo",
    "caption": "George Pelecanos teamed with David Simon, his longtime TV partner, for “We Own This City.” Simon called the show kind of a coda to “The Wire.”",
    "copyright": "Jared Soares for The New York Times"
    },
    {
    "url": "https://static01.nyt.com/images/2022/04/24/arts/24Pelecanos2/24Pelecanos2-thumbLarge.jpg",
    "format": "Large Thumbnail",
    "height": 150,
    "width": 150,
    "type": "image",
    "subtype": "photo",
    "caption": "George Pelecanos teamed with David Simon, his longtime TV partner, for “We Own This City.” Simon called the show kind of a coda to “The Wire.”",
    "copyright": "Jared Soares for The New York Times"
    }
    ],
    "short_url": ""
    }
  ]

  it('Should only return articles that have complete sets of data', () => {
    let cleanedData = cleanData(data)
    expect(cleanedData.length).to.equal(1)
  })
})