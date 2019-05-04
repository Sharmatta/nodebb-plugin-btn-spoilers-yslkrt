"use strict";

var YslkrtSpoilers = {
    parse: function(postData, callback) {
        // console.log(postData.postData.content)
        postData.postData.content = postData.postData.content
            .replace(/\#\#spoiler=([^<]*)/g, '**%(#ff0000)[' + '$1' + ']**' + '##spoiler')
            .replace(/\#\#spoiler/g, '<div><div href="#" class="show-spoiler btn btn-md btn-default waves-effect" title="Goster"><i class="fa fa-eye-slash fa-fw"></i><span class="btn-text" data-show_text="Goster" data-hide_text="Gizle">Goster</span></div><div class="spoiler hidden">')
            .replace(/\#\#endspoiler/g, '</div></div>')

        callback(null, postData);
    }
};

module.exports = YslkrtSpoilers;