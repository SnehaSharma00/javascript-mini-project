console.log(window);
const searchQuery = window.location.search;
const encodedsearchText = (searchQuery.split("=").pop()); //removes the last item after split and returns in searchText
//searchQuery[searchQuery.length-1];  as searchText is an array
console.log("searchText-->", decodeURI(encodedsearchText));

const rootElem = document.getElementById('search-cards-container');

const getSearchResults = ()=>{
    // const request = fetch(`https://youtube138.p.rapidapi.com/search/?q=${encodedsearchText}&hl=en&gl=US`,{
    //     method: 'GET',
    //     headers:{
    //         "x-rapidapi-host":"youtube138.p.rapidapi.com ",
	// "x-rapidapi-key":"54bc0fd5b1msh6fab8e201fb239bp1f698bjsnde4838888fb1"
    //     },
    // });
    // request.then((response)=>{
    //     const pr2 = response.json();
    //     pr2.then((data)=>{
    //         renderSearchResults(data);
    //     })
    // }).catch((err)=>{
    //     alert("failed to get search results", err.message);
    // });
    renderSearchResults();
};

const renderSearchResults = (data)=>{
    // console.log("search data --> \n\n ", data);
    const dummyData ={
    "contents": [
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/wlGfSbrjQeRSfnK0EF2WLb-Aqt7Yc9ueXDvijK7U_myokGD-u0vzPlRF3JcdL_Kc69ure7VVcQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@CrackedComedyClub",
                    "channelId": "UCeK0jhC7-Ot1bEaqvpr1Vaw",
                    "title": "Cracked Comedy Club"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Love standup comedy? We've got 60 comedians and 60 standup bits that are pure comedy gold. All in 60 minutes or less.",
                "isLiveNow": false,
                "lengthSeconds": 3310,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/k6WNXMLTB5o/mqdefault_6s.webp?du=3000&sqp=CMa53swG&rs=AOn4CLAjZUVlm1Rmenrq2J-oCz9o5vmqCw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 months ago",
                "stats": {
                    "views": 342267
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/k6WNXMLTB5o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjsVkikQAao18lqjW3dsuVi-5zuw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/k6WNXMLTB5o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpnw0E5Q3phzIaoJkiZpsTcmJSAw",
                        "width": 720
                    }
                ],
                "title": "60 Jokes That Are Pure Comedy Gold in 60 Minutes | Full Standup Comedy Compilation",
                "videoId": "k6WNXMLTB5o"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nrDHB9AFBjjGtC2bzQw_kT9Osh2Delwywov8NWtE5btQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@DontTellComedy",
                    "channelId": "UC7MgijK9WL_EqCo1juUERwg",
                    "title": "Don't Tell Comedy"
                },
                "badges": [
                    "New",
                    "4K"
                ],
                "descriptionSnippet": "Comedian Tim Smith on having the name Tim Smith, trolling guys who own sports cars, and moving to the south as a kid Comedy ...",
                "isLiveNow": false,
                "lengthSeconds": 583,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/VSbc4oxJBk4/mqdefault_6s.webp?du=3000&sqp=CNij3swG&rs=AOn4CLCdjJT9s5pfq88KT1IixgUPh-aYmw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "3 days ago",
                "stats": {
                    "views": 45731
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/VSbc4oxJBk4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8TYCLPfsUFQI46BD2MUdVJ1LCMA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/VSbc4oxJBk4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD09unxWx907yOJ2KvsC0eifQdW7A",
                        "width": 720
                    }
                ],
                "title": "True Crime White | Tim Smith | Stand Up Comedy",
                "videoId": "VSbc4oxJBk4"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/NS4edcQFq0Ov1DWVikUMO6HmNDlVjzaACPuZyiltHS9YWmnabvfvbcX9kyKMdTqA52fGRINf06g=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@StrangeApprentice25",
                    "channelId": "UCnmjsn8narZ8rKV2a3NB6ug",
                    "title": "Strange Apprentice"
                },
                "badges": [],
                "descriptionSnippet": "Bill Burr Destroys Modern Culture | Savage Comedy Compilation 2025 Bill Burr Destroys Modern Culture | Savage Comedy ...",
                "isLiveNow": false,
                "lengthSeconds": 3736,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/VD2TOqxtnCc/mqdefault_6s.webp?du=3000&sqp=CL6r3swG&rs=AOn4CLAwFxsX_AFMqgJaYrm2lbhGsrpmmw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 months ago",
                "stats": {
                    "views": 392621
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/VD2TOqxtnCc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9YT7NvSZoVZrvbU97u18N5wavtw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/VD2TOqxtnCc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0wT0UcSKwbYbnGk5AtKLPALbyfA",
                        "width": 720
                    }
                ],
                "title": "Bill Burr Destroys Modern Culture | Savage Comedy Compilation 2025",
                "videoId": "VD2TOqxtnCc"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/2gYF5Xk0BwfFqdJoPFubl8fQifSqOqMR4zU1IbLq6wSeh9OCvr5Fmtwqj_SS-udegDG_QQk_5iY=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@800pgmslices",
                    "channelId": "UCv4BtTHeqclK5jWEnnGjT2Q",
                    "title": "800 Pound Gorilla Comedy Slices"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "In these 47 minutes with Matt Rife he talks to his audience about a variety of topics ranging from being gay to ghosts. Watch now.",
                "isLiveNow": false,
                "lengthSeconds": 2827,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/txN_qF7Sk6k/mqdefault_6s.webp?du=3000&sqp=CPy73swG&rs=AOn4CLBgXtONOPENUAMgKtQAW-yU6w0xDw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 months ago",
                "stats": {
                    "views": 2242541
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/txN_qF7Sk6k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmLmuo1C2TL96FLqn18HC0J-EXtA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/txN_qF7Sk6k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7WgW9UHgBX73utgAsv09Lz4NMpg",
                        "width": 720
                    }
                ],
                "title": "Unfiltered Matt Rife Comedy | Matt Rife Viral Crowd Work Moments",
                "videoId": "txN_qF7Sk6k"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/3Of9_4qEFRlaKTiYqvjB2CTA-t_qP9ih2deiFrPF04vuOzi8Z3J_wQugtFV39zTM7uDrsB1C=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@FMW650",
                    "channelId": "UCw92QzuT_stf8jSaGWoKawQ",
                    "title": "FMW - Funny Moments"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Try Not To Laugh Top 100 Funniest Videos Ever | Funny Videos Compilation 2026 #73 Are you ready to transform that ...",
                "isLiveNow": false,
                "lengthSeconds": 4243,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/6K4gRO_7eC8/mqdefault_6s.webp?du=3000&sqp=CMi63swG&rs=AOn4CLCjAnRom2GCz3-9FPwjO0xcHW9azQ",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 days ago",
                "stats": {
                    "views": 32971
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/6K4gRO_7eC8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUffyCI9HBKcCcdsOf2i8fxjaDVg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/6K4gRO_7eC8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3ILmTKjfv6R7pY70QtPt7n0grUg",
                        "width": 720
                    }
                ],
                "title": "Try Not To Laugh 🤣 Top 100 Funniest Videos Ever 😂 | Funny Videos Compilation 2026 #73",
                "videoId": "6K4gRO_7eC8"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/-BJZM-v2CsXZY4-NFSLFN7bhIilo4YqTH2bgkXpWl9jFJK0Urlykjc3WrwImxMvXFUOEDTMb2j8=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@800pgm",
                    "channelId": "UCJ9hfZ2sU7jFT9isA2rN58Q",
                    "title": "800 Pound Gorilla Media"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Over an hour and half of the best moments in comedy. Don't miss out on the hottest comedians in the game. Which bit is your ...",
                "isLiveNow": false,
                "lengthSeconds": 5893,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/UvANWG6cQi8/mqdefault_6s.webp?du=3000&sqp=CJe23swG&rs=AOn4CLDkPhzUpKK3j6qpRE0J0z4m8dXRkA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "9 months ago",
                "stats": {
                    "views": 791622
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/UvANWG6cQi8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCl6Ce8n7JMg7pgvT2CZV-CC_FGKw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/UvANWG6cQi8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCutYdUmt-Ri0SaWBHEibnwbn-mbA",
                        "width": 720
                    }
                ],
                "title": "Don't Miss Out On The Best Comedy | Stand-Up Comedy Compilation",
                "videoId": "UvANWG6cQi8"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nrDHB9AFBjjGtC2bzQw_kT9Osh2Delwywov8NWtE5btQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@DontTellComedy",
                    "channelId": "UC7MgijK9WL_EqCo1juUERwg",
                    "title": "Don't Tell Comedy"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Comedy is at its best when there's a surprise – that's why Don't Tell Comedy puts on events where the performers and location are ...",
                "isLiveNow": false,
                "lengthSeconds": 765,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/Vy96iuq94Ko/mqdefault_6s.webp?du=3000&sqp=CLyq3swG&rs=AOn4CLCtnyWn-d5aiVbwJjx8KcAbhUpVhg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 years ago",
                "stats": {
                    "views": 4288339
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/Vy96iuq94Ko/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI-FWMRExqX6FfmNE7CV4bSYxiiA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/Vy96iuq94Ko/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKN_ScKX01jRql1D_MFCRajnRkvQ",
                        "width": 720
                    }
                ],
                "title": "Woke Flat Earthers | Malik Elassal | Stand Up Comedy",
                "videoId": "Vy96iuq94Ko"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/agEqZ08wJnRBAYVFJuIlF5Qdp_MHK-hQHA37B8vPASilp_LhF2KkkG3ckhzWh83kLdQPgNWYnw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@MaxAmini",
                    "channelId": "UCQTmZczX5kGRgaPIgpy6CyQ",
                    "title": "Max Amini"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "You've been randomly selected in my shows, now prepare to be Randomly Selected in your homes! Max Amini's comedy special ...",
                "isLiveNow": false,
                "lengthSeconds": 3000,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/Oy2QyPQ5L5M/mqdefault_6s.webp?du=3000&sqp=CMKy3swG&rs=AOn4CLClTogESwdjPFiMtJ1co-hPDABBJA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 year ago",
                "stats": {
                    "views": 17158614
                },
                "thumbnails": [
                    {
                        "height": 270,
                        "url": "https://i.ytimg.com/vi/Oy2QyPQ5L5M/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeF0EU7s0NGc5x8OdyNxwDD9zvzg",
                        "width": 480
                    }
                ],
                "title": "Max Amini FULL COMEDY SPECIAL 2025 | \"Randomly Selected\" | Stand Up Comedy",
                "videoId": "Oy2QyPQ5L5M"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/e_QQ17MwCDeYnoWhy8-8ffjPG8IuZHOaIJikIdi6eIw3RGxXPP4yQY9ZoeOz7j5OVfZmtdtHdnU=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@DryBarComedy",
                    "channelId": "UCvlVuntLjdURVD3b3Hx7kxw",
                    "title": "Dry Bar Comedy"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "This might be the best comedy special ever at least you might think so after watching this full special from John Novosad. In this ...",
                "isLiveNow": false,
                "lengthSeconds": 1541,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/ibVwBUNjgOE/mqdefault_6s.webp?du=3000&sqp=CNW63swG&rs=AOn4CLBwRziWXD9iR-dvOEbySyOiRv4Bxw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 year ago",
                "stats": {
                    "views": 3179409
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/ibVwBUNjgOE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAx7eU-0RjxhJzBByhryrS7OSA2DQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/ibVwBUNjgOE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeOAa2mhEs5gzWnnpopk7XshU3lw",
                        "width": 720
                    }
                ],
                "title": "This Might Be The Best Comedy Special Ever. John Novosad - Full Special",
                "videoId": "ibVwBUNjgOE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/jOJD-jErZ5WPkuMeP_UG9Ga0PmiVkEgjpaVTzjc53v5m3rBn_zu1BiLm7SgZ7v19oOb7gqLW7-8=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@ChocolateSundaes",
                    "channelId": "UCv8G-xZ_BBGufjbN6jbvLMQ",
                    "title": "Chocolate Sundaes Comedy"
                },
                "badges": [],
                "descriptionSnippet": "Follow @RyanDavisComedy on social media @ryandaviscomedy Filmed 9/1/24 Join our channel to get access to perks: ...",
                "isLiveNow": false,
                "lengthSeconds": 824,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/_XRcAdoEKCQ/mqdefault_6s.webp?du=3000&sqp=COCb3swG&rs=AOn4CLDZZQPlb7ugHC8SQQeIzVzRWVKZcg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "3 months ago",
                "stats": {
                    "views": 951611
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/_XRcAdoEKCQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0BlNWqc775PZaS6rIPe_-Ke7_7w",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/_XRcAdoEKCQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2TheHvRvJjnB6yPmhlv2mOK9XYQ",
                        "width": 720
                    }
                ],
                "title": "Women Are Delusional AF! - Comedian Ryan Davis - Chocolate Sundaes Stand Up Comedy",
                "videoId": "_XRcAdoEKCQ"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/EEyeTSBPYXt7rSqDVpFhmWZWA1s6yxKunFtp3BghMwOjn8ktbG6x7KtDOxvrhbPDSUttifSzvg=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@800pgSFW",
                    "channelId": "UCBZo4bO6K7JKnIv6HBWhkzg",
                    "title": "800 Pound Gorilla SFW Comedy"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "2 hours of comedy you can't walk away from. Enjoy! Comedians in order of appearance: 0:00:00 Chad Daniels - Twelfth Night ...",
                "isLiveNow": false,
                "lengthSeconds": 8666,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/OLGrx-m-0iA/mqdefault_6s.webp?du=3000&sqp=CMC73swG&rs=AOn4CLBjyQpp1Z7D1uy03WovI9G83tCxSQ",
                        "width": 320
                    }
                ],
                "publishedTimeText": "4 months ago",
                "stats": {
                    "views": 669364
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/OLGrx-m-0iA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7nVUHuStYsPxjL0DYL9YeP2LG6w",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/OLGrx-m-0iA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9pZUV7SeZ-L9xdCDVEK2zIyT4dw",
                        "width": 720
                    }
                ],
                "title": "2 Hours of All Killer Comedy | Stand-Up Comedy Compilation",
                "videoId": "OLGrx-m-0iA"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_mHRQzJOrdcKq3wCCQK-PzjadZ8aGXxP7KvEJA9S2h03Xg=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@comedydynamics",
                    "channelId": "UCDUhp92NhqVc0K3jSmWhgvA",
                    "title": "Comedy Dynamics"
                },
                "badges": [],
                "descriptionSnippet": "Over an hour of Squeaky Clean Comedy featuring Preacher Lawsone, Sinbad, Luenell, Whitney Cummings, Elliott Morgan, Gary ...",
                "isLiveNow": false,
                "lengthSeconds": 3788,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/ERVaulJUAII/mqdefault_6s.webp?du=3000&sqp=CKSM3swG&rs=AOn4CLBy5Mh7CP1MSijybpotaLbYqXRz5A",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 months ago",
                "stats": {
                    "views": 164492
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/ERVaulJUAII/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA71J_xhYULs9_AhbXqpxf9Uxe63g",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/ERVaulJUAII/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNP6RRNUYhsaE-5ppJ8OpJ9VkSiA",
                        "width": 720
                    }
                ],
                "title": "Funniest Work Stories - Overtime Comedy Hour",
                "videoId": "ERVaulJUAII"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/DKPIatE0Tf3qDslaUSrpX1fBV9usOJmAKG3vQsNgcjj6PxC6aG2VbCPtVKrf5Tve3falajEx7DI=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@HenryChoOfficial",
                    "channelId": "UCyhW542xGsYgEHfauul5dBA",
                    "title": "Henry Cho Comedy"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "sports #superbowl #fakingit #standup #comedyvideos #standupcomedian Tour dates and tickets: ...",
                "isLiveNow": false,
                "lengthSeconds": 341,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/bo6CS-waWHg/mqdefault_6s.webp?du=3000&sqp=CPC-3swG&rs=AOn4CLBMForeu4valQQE7wk6vzhHpXNLXw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "3 days ago",
                "stats": {
                    "views": 21520
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/bo6CS-waWHg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqHPLnF39Xmy4U0nV2RJwhnefPsQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/bo6CS-waWHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmNNWKZqOh6QIDOA3k0NDfoMkmaw",
                        "width": 720
                    }
                ],
                "title": "How to Fake 'Liking Sports' | Henry Cho Comedy",
                "videoId": "bo6CS-waWHg"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/xC9CvpDc8RQafv0_7qDNKz5_gGVM8kxX2ER5Q_3ffqZ4e2vCo79JjjTMkysEvR93M5B4HQms=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@KapilSharmaK9",
                    "channelId": "UC1-BQ2oxqBVtCjMHF-Wf98w",
                    "title": "Kapil Sharma"
                },
                "badges": [
                    "New",
                    "4K"
                ],
                "descriptionSnippet": "Love • Laugh • Repeat Valentine Weekend with O'Romeo Team - Shahid Kapoor, Triptii Dimri, Avinash Tiwary, Farida ...",
                "isLiveNow": false,
                "lengthSeconds": 586,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/ZAjD4t48bqA/mqdefault_6s.webp?du=3000&sqp=CICb3swG&rs=AOn4CLAYJXO7Yp065TomkqvlmxO092rH6A",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 days ago",
                "stats": {
                    "views": 1079688
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/ZAjD4t48bqA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaw-ynJtYlxLpUT4SX8GxHH2oRhA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/ZAjD4t48bqA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWBAj7z0-IVZmVASrukIGzaTs1iA",
                        "width": 720
                    }
                ],
                "title": "#ORomeo Love Laugh Repeat - Shahid Kapoor, Triptii Dimri | Kapil Sharma | Bacha Hua Content | TGIKS",
                "videoId": "ZAjD4t48bqA"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nrDHB9AFBjjGtC2bzQw_kT9Osh2Delwywov8NWtE5btQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@DontTellComedy",
                    "channelId": "UC7MgijK9WL_EqCo1juUERwg",
                    "title": "Don't Tell Comedy"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Comedian Josh Adams on absurd news stories, riffs with a heckler, and the only rival to a strong independent woman Comedy is ...",
                "isLiveNow": false,
                "lengthSeconds": 656,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/wNYgupoiyWs/mqdefault_6s.webp?du=3000&sqp=CMal3swG&rs=AOn4CLCBvUJhXySnc2NYmm8fKDe2T5kRvw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 months ago",
                "stats": {
                    "views": 507669
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/wNYgupoiyWs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7KftCyllXqkAURHY1X3vbgiFeXA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/wNYgupoiyWs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDV96F0RR3WwbGhYUy8Sobd_sGpSQ",
                        "width": 720
                    }
                ],
                "title": "\"I Just Realized I'm Racist\" | Josh Adams | Stand Up Comedy",
                "videoId": "wNYgupoiyWs"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/jOJD-jErZ5WPkuMeP_UG9Ga0PmiVkEgjpaVTzjc53v5m3rBn_zu1BiLm7SgZ7v19oOb7gqLW7-8=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@ChocolateSundaes",
                    "channelId": "UCv8G-xZ_BBGufjbN6jbvLMQ",
                    "title": "Chocolate Sundaes Comedy"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "The more that is revealed, the worse it gets. Follow @comediantreyelliot on social media @comediantreyelliot Filmed 12/28/25 ...",
                "isLiveNow": false,
                "lengthSeconds": 681,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/FWx_NVY7PDM/mqdefault_6s.webp?du=3000&sqp=CKak3swG&rs=AOn4CLDsT1_C7sVzIqt4WQsGIakvAoMHow",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 weeks ago",
                "stats": {
                    "views": 65232
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/FWx_NVY7PDM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCu3U5umvmyHxoHiuy8Yn6ew4b_1A",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/FWx_NVY7PDM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1hRT6ue0rQ9TzMXzEyA025WScXw",
                        "width": 720
                    }
                ],
                "title": "The Epstein Files Prove White Privilege - Comedian Trey Elliot - Chocolate Sundaes Stand Up Comedy",
                "videoId": "FWx_NVY7PDM"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/SQV7YrQ-G8kkA7BTIPHNU4CgetkjCIAu5dwyHNDtjuDD_iATzlfZzxan3OE3VTW6Xbd0jWcRAw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@BenBankasComedy",
                    "channelId": "UC2O0u4qk8pF5fjs94kN1CUQ",
                    "title": "BenBankasComedy"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Support Ben on Patreon: https://www.patreon.com/benbankas Get tickets to see Ben: https://www.benbankas.com Join the email ...",
                "isLiveNow": false,
                "lengthSeconds": 539,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/6CCg6YMyHns/mqdefault_6s.webp?du=3000&sqp=CL233swG&rs=AOn4CLALxl_CHZDeVL-T8Q8oeu9hZD6kOw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 month ago",
                "stats": {
                    "views": 938073
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/6CCg6YMyHns/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFUjPc4S2BU0m9u8vdeadq2wLHSA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/6CCg6YMyHns/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDATRxvtQk4GdoeUph2Jq5hJYjVuQ",
                        "width": 720
                    }
                ],
                "title": "Ben Bankas on The Ice Lady | Standup Comedy",
                "videoId": "6CCg6YMyHns"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ZS8W-Cw0ncLlo5zFHVqPTRIYJvhqRIGXNZwRDYJsHJSHZ8cKvjDywmL-UhVWaxpjCVkfR2CX2XI=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@ourfuntv0",
                    "channelId": "UCMuz3501Iy7n-yPIFi1KldQ",
                    "title": "Our Fun Tv"
                },
                "badges": [],
                "descriptionSnippet": "ourfuntv #comedy #comedyvideo #comedyshorts #funny #funnyvideo #funnyshorts #tuituifunny #hasirvideo # Funniest Fun New ...",
                "isLiveNow": false,
                "lengthSeconds": 524,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/W2MT-V8LxkI/mqdefault_6s.webp?du=3000&sqp=CKCc3swG&rs=AOn4CLCePo4JkZWBkEGK1cXMhR1juM_JMg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 months ago",
                "stats": {
                    "views": 75116994
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/W2MT-V8LxkI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcnjLTi0fisVhUT2_Dec2npzM7zQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/W2MT-V8LxkI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDg4GOmcOz7l25fqlSALIMI-gbOKA",
                        "width": 720
                    }
                ],
                "title": "Funniest Fun New Comedy Video 2025 😂 amazing best of funny video Episode 232 By Our Fun Tv",
                "videoId": "W2MT-V8LxkI"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/e_QQ17MwCDeYnoWhy8-8ffjPG8IuZHOaIJikIdi6eIw3RGxXPP4yQY9ZoeOz7j5OVfZmtdtHdnU=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@DryBarComedy",
                    "channelId": "UCvlVuntLjdURVD3b3Hx7kxw",
                    "title": "Dry Bar Comedy"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Watch hundreds of Dry Bar Comedy specials on the Angel Studios App! https://www.angel.com/drybaryt A little More Dry Bar ...",
                "isLiveNow": false,
                "lengthSeconds": 516,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/WKHmPEUiHlo/mqdefault_6s.webp?du=3000&sqp=CPCU3swG&rs=AOn4CLDiMBVeh0dnt3LVIqa77tvA957erg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "7 hours ago",
                "stats": {
                    "views": 3176
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/WKHmPEUiHlo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-D1h3hMln-XIvwbFdxn1HYScDng",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/WKHmPEUiHlo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxTp4Vm1U1Kz6uy3iYEW5fzlAO3g",
                        "width": 720
                    }
                ],
                "title": "An Italian Guy Walks Into Bass Pro Shops... | Marcus Saputo Stand-Up Comedy",
                "videoId": "WKHmPEUiHlo"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/zdFgKyECcZX5vZ3DixThIBuXWF44BcaVd5UndmG1XcLo5TzkKQAENEcVm68CKSy0pM2rEy6MFw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@funtv22",
                    "channelId": "UC8bRoTup4RoG9LqgK82gDlg",
                    "title": "Fun Tv 22"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "busyfunltd #injection_wala #injectionfunnyvideo Very Special Trending Funny Comedy Video 2025 Amazing Injection Wala ...",
                "isLiveNow": false,
                "lengthSeconds": 503,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/G-RmbWHqUdk/mqdefault_6s.webp?du=3000&sqp=CL2q3swG&rs=AOn4CLAxmvEucBkG1yTj1rTQKej1Ou73RA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 months ago",
                "stats": {
                    "views": 30497594
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/G-RmbWHqUdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu5O3nrn1IO5pDduhxO2tOjM4hUA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/G-RmbWHqUdk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDq_RBGHBP3Z6-v9gWw3Mxlm7AepA",
                        "width": 720
                    }
                ],
                "title": "Very Special Trending Funny Comedy Video 2025 Amazing Injection Wala Doctor Comedy Video Epi-170",
                "videoId": "G-RmbWHqUdk"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/9zmDuSvvllla4Lea7-QF4zXvSwM2Vw2NIcXZdHmRyHNrL_aH1djDXDhUwotqCk9DUmsbnG03lw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@beabassi",
                    "channelId": "UC2S0KiGusFDXWcxwEorulsA",
                    "title": "be_a_bassi"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Hanji, meri shaandar team ki ek aur peshkesh dekhlo jo inhone ek saal laga diya edit karne mei, Jab ab wapas Canada tour ...",
                "isLiveNow": false,
                "lengthSeconds": 678,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/XbiObxjyAkE/mqdefault_6s.webp?du=3000&sqp=CPmr3swG&rs=AOn4CLAFDBuOXX7I_s6EaAFD8hCC7G5Sxw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 month ago",
                "stats": {
                    "views": 5265497
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/XbiObxjyAkE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsPLdDElQ8nhosKSh1XQWmmZmyIA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/XbiObxjyAkE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7v5WByhhoGxlixO-dxNJEQHamag",
                        "width": 720
                    }
                ],
                "title": "Bassi in USA & Canada | Stand Up Comedy | Ft  @AnubhavSinghBassi",
                "videoId": "XbiObxjyAkE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/CVKck4WwTPccWLQPhBAKHfySifYPhWbEckHxR8npoRONSCISDPlYjtCxiHqENntt11Syne2JjWs=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@Comedy_Stand_Up_Network",
                    "channelId": "UCNrN1jrDHKE4lCD-BKa9pog",
                    "title": "Comedy Stand Up Network!"
                },
                "badges": [],
                "descriptionSnippet": "crowdwork #ComedyStandup #Funny Welcome to Comedy Stand Up Network! This channel brings together the best full stand-up ...",
                "isLiveNow": false,
                "lengthSeconds": 3402,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/ZuaplvqNnnA/mqdefault_6s.webp?du=3000&sqp=CICq3swG&rs=AOn4CLBcmvzw5D2CN1jfeUo1-cc-vmzZeg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 month ago",
                "stats": {
                    "views": 369794
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/ZuaplvqNnnA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMgEELWWnRFWehJT7yq58phbt6yw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/ZuaplvqNnnA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkmVKNojaMMunfuLaD-D44QgVFnA",
                        "width": 720
                    }
                ],
                "title": "Katt Williams Priceless Afterlife 2014 Full Show",
                "videoId": "ZuaplvqNnnA"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/IpiNonpcFPrOS_k3igzaOxvLimLQJvGW0n834iKNNaO2AQ3SpVC_dSwgtdzvC2BblVJTTkCt4uE=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@NateJackson",
                    "channelId": "UCstjsMVvSsV_kT0rworEidA",
                    "title": "Nate Jackson"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Does Susan from Twitch work with octopuses or dead people? All of this crowd work is from my show in New Haven Connecticut ...",
                "isLiveNow": false,
                "lengthSeconds": 1632,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/_oLcAv6i8FM/mqdefault_6s.webp?du=3000&sqp=CK-j3swG&rs=AOn4CLDo1QnIBZJIZTr5Vlwcf_3CA4sbsA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "6 days ago",
                "stats": {
                    "views": 157354
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/_oLcAv6i8FM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDw20f2RBtOkdDrrEyCWRzTV1QIHQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/_oLcAv6i8FM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR6UNTDp9Rcx1Ejli_wYu_3EiTrQ",
                        "width": 720
                    }
                ],
                "title": "Crowd Work Pack: New Haven, Connecticut",
                "videoId": "_oLcAv6i8FM"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/jOJD-jErZ5WPkuMeP_UG9Ga0PmiVkEgjpaVTzjc53v5m3rBn_zu1BiLm7SgZ7v19oOb7gqLW7-8=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@ChocolateSundaes",
                    "channelId": "UCv8G-xZ_BBGufjbN6jbvLMQ",
                    "title": "Chocolate Sundaes Comedy"
                },
                "badges": [],
                "descriptionSnippet": "Check out these hilarious sets from Comedian Ron G. Follow Ron G social media @comedianrong Editor: Endrew @guaxinim365 ...",
                "isLiveNow": false,
                "lengthSeconds": 1431,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/8qZp0rqyFNw/mqdefault_6s.webp?du=3000&sqp=CNyj3swG&rs=AOn4CLAZ9oSdUfBxxw-H3tV-fVci95aLKw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "3 weeks ago",
                "stats": {
                    "views": 49455
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/8qZp0rqyFNw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKp53ZmcGEkxLAvf8EDoRz1kg7eg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/8qZp0rqyFNw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxP0sKNu8vVNiFQVrumjruv0Sg6Q",
                        "width": 720
                    }
                ],
                "title": "Women Blame Men for Everything! Compilation by Comedian Ron G - Chocolate Sundaes Stand Up Comedy",
                "videoId": "8qZp0rqyFNw"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/pM8OxrQjSOVnqPACiC_8P11G34o0yGwnBnsV2usci92drp3PLKkKVb6_e8Zttv39QZ0PodfI=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@geminicomedy",
                    "channelId": "UCHQUiwOBNCzEXInluX7zRtw",
                    "title": "Gemini Comedy"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Ullas,a money-minded man,agrees to marry a woman with disabilities,Simran,for her money.When he gets a proposal from a ...",
                "isLiveNow": false,
                "lengthSeconds": 866,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/KdLbbWqMz2Q/mqdefault_6s.webp?du=3000&sqp=CNCU3swG&rs=AOn4CLB1anLMkWkzD_EP6e5YBYBJm2Ygvg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "10 hours ago",
                "stats": {
                    "views": 36193
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/KdLbbWqMz2Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOB_K6QSGTSNXEs3eNJXGZSJXvXg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/KdLbbWqMz2Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBn7t3D9CExWPVXg7zCCQKEEIK0dw",
                        "width": 720
                    }
                ],
                "title": "Sunil & Srinivas Reddy NON-STOP COMEDY BLAST 😂 | 2 Countries Best Scenes  | Telugu Comedy scene",
                "videoId": "KdLbbWqMz2Q"
            }
        },
        {
            "channel": {
                "avatar": [
                    {
                        "height": 88,
                        "url": "https://yt3.ggpht.com/e_QQ17MwCDeYnoWhy8-8ffjPG8IuZHOaIJikIdi6eIw3RGxXPP4yQY9ZoeOz7j5OVfZmtdtHdnU=s88-c-k-c0x00ffffff-no-rj-mo",
                        "width": 88
                    },
                    {
                        "height": 176,
                        "url": "https://yt3.ggpht.com/e_QQ17MwCDeYnoWhy8-8ffjPG8IuZHOaIJikIdi6eIw3RGxXPP4yQY9ZoeOz7j5OVfZmtdtHdnU=s176-c-k-c0x00ffffff-no-rj-mo",
                        "width": 176
                    }
                ],
                "badges": [
                    {
                        "text": "Verified",
                        "type": "VERIFIED_CHANNEL"
                    }
                ],
                "canonicalBaseUrl": "/@DryBarComedy",
                "channelId": "UCvlVuntLjdURVD3b3Hx7kxw",
                "descriptionSnippet": "An Angel Original | Funny for Everyone Stand up comedy for everyone in the family.",
                "stats": {
                    "subscribers": 3030000,
                    "subscribersText": "3.03M subscribers"
                },
                "title": "Dry Bar Comedy",
                "username": "@DryBarComedy"
            },
            "type": "channel"
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/e_QQ17MwCDeYnoWhy8-8ffjPG8IuZHOaIJikIdi6eIw3RGxXPP4yQY9ZoeOz7j5OVfZmtdtHdnU=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@DryBarComedy",
                    "channelId": "UCvlVuntLjdURVD3b3Hx7kxw",
                    "title": "Dry Bar Comedy"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Watch hundreds of Dry Bar Comedy specials on the Angel Studios App! https://www.angel.com/drybaryt A little More Dry Bar ...",
                "isLiveNow": false,
                "lengthSeconds": 516,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/WKHmPEUiHlo/mqdefault_6s.webp?du=3000&sqp=CPCU3swG&rs=AOn4CLDiMBVeh0dnt3LVIqa77tvA957erg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "7 hours ago",
                "stats": {
                    "views": 3176
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/WKHmPEUiHlo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-D1h3hMln-XIvwbFdxn1HYScDng",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/WKHmPEUiHlo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxTp4Vm1U1Kz6uy3iYEW5fzlAO3g",
                        "width": 720
                    }
                ],
                "title": "An Italian Guy Walks Into Bass Pro Shops... | Marcus Saputo Stand-Up Comedy",
                "videoId": "WKHmPEUiHlo"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/moqUlQBJrPkiSU313vXOh0THaYr8MmXH8FOdmYYOBfVrdK-7ZmHHfJ4c4wL4zZAJuSHFOme67kI=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@OSRReality",
                    "channelId": "UCNU2Xe6kr6OJDxWGDXa66gQ",
                    "title": "OSR Reality"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "COMEDY NIGHT WITH CHAMPIONS || Episode 46 || Comedy Night with Champions with five artists of the popular legendary ...",
                "isLiveNow": false,
                "lengthSeconds": 4397,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/nLg_4uwtL30/mqdefault_6s.webp?du=3000&sqp=COC73swG&rs=AOn4CLBWuAx4SHf-PeJJ5yVwuxjSt8LHKw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 days ago",
                "stats": {
                    "views": 486296
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/nLg_4uwtL30/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_2bU3soHJqwTiSRZ3hsBgiStxGA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/nLg_4uwtL30/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0Gz0wR8omveY5w6uGSB7tLNENMA",
                        "width": 720
                    }
                ],
                "title": "COMEDY NIGHT WITH CHAMPIONS || Episode 46 || Popular Legendary Serial \"Meri Bassai\" Team",
                "videoId": "nLg_4uwtL30"
            }
        }
    ],
    "cursorNext": "Eq0DEgZjb21lZHkaogNTQlNDQVF0ck5sZE9XRTFNVkVJMWI0SUJDMVpUWW1NMGIzaEtRbXMwZ2dFTFZrUXlWRTl4ZUhSdVEyT0NBUXQwZUU1ZmNVWTNVMnMyYTRJQkN6WkxOR2RTVDE4M1pVTTRnZ0VMVlhaQlRsZEhObU5SYVRpQ0FRdFdlVGsyYVhWeE9UUkxiNElCQzA5NU1sRjVVRkUxVERWTmdnRUxhV0pXZDBKVlRtcG5UMFdDQVF0ZldGSmpRV1J2UlV0RFVZSUJDMDlNUjNKNExXMHRNR2xCZ2dFTFJWSldZWFZzU2xWQlNVbUNBUXRpYnpaRFV5MTNZVmRJWjRJQkMxcDFZWEJzZG5GT2JtNUJnZ0VMWDI5TVkwRjJObWs0UmsyQ0FRczRjVnB3TUhKeGVVWk9kNElCQzB0a1RHSmlWM0ZOZWpKUmdnRVlWVU4yYkZaMWJuUk1hbVJWVWxaRU0ySXpTSGczYTNoM2dnRUxWMHRJYlZCRlZXbEliRy1DQVF0dVRHZGZOSFYzZEV3ek1MSUJCZ29FQ0JjUUF1b0JCQWdDRUJrJTNEGIHg6BgiC3NlYXJjaC1mZWVk",
    "didYouMean": null,
    "estimatedResults": 2019907409,
    "filterGroups": [
        {
            "filters": [
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJUUFRJTNEJTNE",
                    "label": "Videos",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJUUNRJTNEJTNE",
                    "label": "Shorts",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJUUFnJTNEJTNE",
                    "label": "Channels",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJUUF3JTNEJTNE",
                    "label": "Playlists",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJUUJBJTNEJTNE",
                    "label": "Movies",
                    "selected": false
                }
            ],
            "title": "Type"
        },
        {
            "filters": [
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJWUJBJTNEJTNE",
                    "label": "Under 3 minutes",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJWUJRJTNEJTNE",
                    "label": "3 - 20 minutes",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJWUFnJTNEJTNE",
                    "label": "Over 20 minutes",
                    "selected": false
                }
            ],
            "title": "Duration"
        },
        {
            "filters": [
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJSUFnJTNEJTNE",
                    "label": "Today",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJSUF3JTNEJTNE",
                    "label": "This week",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJSUJBJTNEJTNE",
                    "label": "This month",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJSUJRJTNEJTNE",
                    "label": "This year",
                    "selected": false
                }
            ],
            "title": "Upload date"
        },
        {
            "filters": [
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdKQUFRJTNEJTNE",
                    "label": "Live",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdKd0FRJTNEJTNE",
                    "label": "4K",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJZ0FRJTNEJTNE",
                    "label": "HD",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJb0FRJTNEJTNE",
                    "label": "Subtitles/CC",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJd0FRJTNEJTNE",
                    "label": "Creative Commons",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdKNEFRJTNEJTNE",
                    "label": "360°",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdQUUFRRSUzRA==",
                    "label": "VR180",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJNEFRJTNEJTNE",
                    "label": "3D",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdQSUFRRSUzRA==",
                    "label": "HDR",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdPNEFRRSUzRA==",
                    "label": "Location",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdKSUFRJTNEJTNE",
                    "label": "Purchased",
                    "selected": false
                }
            ],
            "title": "Features"
        },
        {
            "filters": [
                {
                    "cursorSelect": null,
                    "label": "Relevance",
                    "selected": true
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmQ0FNJTNE",
                    "label": "Popularity",
                    "selected": false
                }
            ],
            "title": "Prioritize"
        }
    ],
    "refinements": []
};
   
    const {contents} = dummyData; // destructuring
    contents.forEach((obj)=>{
        const {video} = obj;
        const {thumbnails, title, descriptionSnippet, publishedTimeText, stats} = video; //destructured all these stuff from the video obj

        const newDiv = document.createElement('div');
        newDiv.className = "search-result-video-card";
        newDiv.innerHTML =`
        <div class='thumbnail-container'>
            <img src='${thumbnails.pop().url}' width='100%'>
        </div>
        <div class ='vide-data-container'>
            <p>${title}</p>
            <p>${stats.views}</p>
            <p>${publishedTimeText}</p>
            <p>${descriptionSnippet}</p>
        </div>
        `
        rootElem.append(newDiv);
    });
};
getSearchResults();
