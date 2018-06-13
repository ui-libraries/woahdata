let fs = require('fs')
let _ = require('lodash')

let peopleList = fs.readFileSync("/Users/mtbutler/Desktop/whoadata/woah.json")
let people = JSON.parse(peopleList)

let gf_list = []

let id = 5

_.forEach(people, function(person) {
    let next = {}
    next['3'] = person.position
    next['4'] = person.latlong[0]
    next['5'] = person.latlong[1]
    next['6'] = person.affiliation
    next['7'] = person.interests
    next['8'] = person.loc
    next['9'] = person.pleiades
    next['10'] = person.website
    next['11'] = person.publications
    next['12.3'] = person.firstname
    next['12.6'] = person.lastname
    next.form_id = 1
    next.id = id
    next.date_created = "2017-05-12 11:13:12"
    next.ip = "128.255.55.237"
    next.is_read = 1
    next.is_starred = 1
    next.is_fulfilled = 1
    next.source_url = "https://dsps.lib.uiowa.edu/woah/gravityformsapi/"
    next.status = "active"
    next.user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36"

    gf_list.push(next)
    id++
})

fs.writeFile('/Users/mtbutler/Desktop/whoadata/woahlist.json', JSON.stringify(gf_list, null, 4), function (err) {
    if (err) return console.log(err)
    console.log('worked')
})