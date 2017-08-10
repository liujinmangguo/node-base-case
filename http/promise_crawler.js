var http = require('http');
//var Promise = require('Promise');
var cheerio = require('cheerio');
var baseUrl = 'http://www.imooc.com/learn/';
var videoIds =[348, 259, 197, 134, 75]

function filterChapters(html){
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    var title = $('.course-info h2.l').text();
    var number = $('course-info span.js-learn-num').text();
    var courseData = {
        title: title,
        number: number,
        videos: []
    };

    chapters.each(function(item){
    	var chapter = $(this),
    	    chapterTitle = chapter.find('strong').text(),
    	    videos = chapter.find('.video').children('li'),
            chapterData = {
        	    chapterTitle: chapterTitle,
        	    videos: []
            };
        videos.each(function(item){
        	var video = $(this).find('a');
        	var videoTitle = video.text();
        	var id = video.attr('href').split('/video/')[1];
        	chapterData.videos.push({
        		title: videoTitle,
        		id: id
        	})
        })
        courseData.videos.push(chapterData);

    })

    return courseData;
}

function printCourseInfo(coursesData){
    coursesData.forEach(function(courseData){
        console.log(courseData.number+'人学过'+courseData.title+'\n');

        courseData.videos.forEach(function(item){
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle + '\n');
        item.videos.forEach(function(video){
            console.log('【' + video.id + '】' + video.title + '\n')
        })
    })
    })
	
}

function getPageAsync(url){
    return new Promise(function(resolve, reject){
        console.log('正在爬取'+ url);

        http.get(url, function(res){
            var html = '';

            res.on('data', function(data){
                html += data;
            })

            res.on('end', function(){
                resolve(html);
                // var courseData = filterChapters(html);
                // printCourseInfo(courseData);

            })
        }).on('error', function(e){
            reject(e);
            console.log('你的程序出错了！');
        })


    })
}

var feachCourseArray = [];

videoIds.forEach(function(id){
    feachCourseArray.push(getPageAsync(baseUrl + id));
})

Promise
    .all(feachCourseArray)
    .then(function(pages){
        var coursesData = [];

        pages.forEach(function(html){
            var courses = filterChapters(html);

            coursesData.push(courses);

            coursesData.sort(function(a, b){
                return a.number - b.number;
            })

            printCourseInfo(coursesData);
        })
    })

