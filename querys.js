db.students.insertMany([
    {
        "record":[
            {
                "account":"acount_1",
                "team":"Ninjas",
                "req_id":128291,
                "positions":[
                    "FS",
                    "BE"
                ],
                "years_min":2,
                "years_max":5
            },
            {
                "account":"acount_2",
                "team":"GreatOnes",
                "req_id":128292,
                "positions":[
                    "OPS",
                    "FS"
                ],
                "years_min":3,
                "years_max":5
            },
            {
                "account":"acount_3",
                "team":"Fighters",
                "req_id":128293,
                "positions":[
                    "BI",
                    "DS",
                    "FED",
                    "FS"
                ],
                "years_min":4,
                "years_max":6
            },
            {
                "account":"acount_4",
                "team":"CanDoers",
                "req_id":128294,
                "positions":[
                    "PRODUCT",
                    "OPS",
                    "QA"
                ],
                "years_min":6,
                "years_max":10
            },
            {
                "account":"acount_5",
                "team":"LeaveIt2us",
                "req_id":128295,
                "positions":[
                    "FS",
                    "QA"
                ],
                "years_min":0,
                "years_max":3
            }
        ],
        "metadata":{
            "id":"62e129e3248d43754f074152",
            "private":false,
            "createdAt":"2022-07-27T12:04:51.614Z"
        }
    }
]);
db.students.distinct("record.team", {
    $and: [
        {
            $or: [{ "record.positions": "FED" }, { "record.positions": "FS" }]
        },
        {
            "record.years_min": { $gte: 3 }
        },
        {
            $expr: { $gt: [{ $size: "$record" }, 3] }
        }
    ]
});












