/**
 * Created by xiayali on 16/8/15.
 */
angular.module('galPhoto')
.factory('instagram',function ($resource) {
    return {
        fetchPopular:function (callback) {
            var api=$resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
                client_id: '4624ffbcb5bf40979487b1c7007258f6'
            },{
                fetch:{method:'JSONP'}
            });
            api.fetch(function (response) {
                callback(response.data);
            });
        }
    }
})


// angular.module('galPhoto')
//
//     .factory('instagram', function($resource){
//         return {
//             fetchPopular: function(callback){
//                 var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
//                     client_id: 'c8f7f1ecd8674739b2971eafbc9c7320'
//                 },{
//                     fetch:{method:'JSONP'}
//                 });
//
//                 api.fetch(function(response){
//                     callback(response.data);
//                 });
//             }
//         }
//     })