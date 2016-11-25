(function( $ ){
    // 当domReady的时候开始初始化
    $(function() {
         //var $list = $("#fileInfo");

         uploader = WebUploader.create({
	    	  swf : _base+"/resources/spm_modules/webuploader/Uploader.swf",
	          server: _base+'/order/uploadFile',
	          auto : true,
	          pick : "#selectFile",
	          dnd: '#fy2', //拖拽
	          accept: {
	      	    title: 'intoTypes',
	      	    extensions: 'rar,zip,doc,xls,docx,xlsx,pdf,jpg,png,jif',
	      	    mimeTypes: '.rar,.zip,.doc,.xls,.docx,.xlsx,.pdf,.jpg,.png,.jif'
	      		},
             resize : false,
             // 禁掉全局的拖拽功能。这样不会出现图片拖进页面的时候，把图片打开。
             disableGlobalDnd: true,
             fileNumLimit: 10,
             fileSizeLimit: 100 * 1024 * 1024,    // 100 M
         });

         uploader.on("fileQueued",function(file){
        	 $("#fileList ul").css('"border-bottom","none"');
             $("#fileList").append('<ul style="border-bottom: medium none;"><li class="word" id="'+file.id+'">'+file.name+'</li><li><p class="ash-bj"><span style="width:0%;"></span></p><p name="percent">0%</p></li><li class="right"><i class="icon iconfont" >&#xe618;</i></li></ul>');
         });
         
         uploader.on("uploadProgress",function(file,percentage){
             
             var fileId = $("#"+file.id),
                 percent = fileId.find(".progress .progress-bar");
             if(!percent.length){//避免重复创建
                 percent = $('<div class="progress progress-striped active"><div class="progress-bar" role="progressbar" style="width: 0%"></div></div>')
                     .appendTo(fileId).find('.progress-bar');
             }
             fileId.next().find('span').css('width',percentage*100+"%");
             fileId.next().find('p[name="percent"]').text(percentage*100+"%");
             percent.css( 'width', percentage * 100 + '%' );
           
         });
         
         uploader.on( 'uploadSuccess', function( file, responseData ) {
        	 if(responseData.statusCode=="1"){
					var fileData = responseData.data;
					console.log(fileData);
					//文件上传成功
					if(fileData){
						 $("#"+file.id).attr("fileId", fileData);
						return;
					}
				}//上传失败
				else{
					_this._showFail(responseData.statusInfo);
					_this._closeDialog();
					return;
				}
         });

         uploader.on( 'uploadError', function( file ) {
        	 $("#"+file.id).parent().next().find('p[name="percent"]').text("上传出错");
         });

         uploader.on( 'uploadComplete', function( file ) {
             $( '#'+file.id ).find('.progress').fadeOut();
         });
         
         //上传出错时触发
         uploader.on( "uploadError", function( file, reason  ) {
         });
         
         // 拖拽时不接受 js, txt 文件。
//         uploader.on( 'dndAccept', function( items ) {
//             var denied = false,
//                 len = items.length,
//                 i = 0,
//                 // 修改js类型
//                 unAllowed = 'text/plain;application/javascript ';
//
//             for ( ; i < len; i++ ) {
//                 // 如果在列表里面
//                 if ( ~unAllowed.indexOf( items[ i ].type ) ) {
//                     denied = true;
//                     break;
//                 }
//             }
//
//             return !denied;
//         });

         uploader.onFileDequeued = function( file ) {
//             fileCount--;
//             fileSize -= file.size;

//             var fullName = $("#hiddenInput" + $(item)[0].id + file.id).val();
//             if (fullName!=null) {
//                 $.post(webuploaderoptions.deleteServer, { fullName: fullName }, function (data) {
//                     alert(data.message);
//                 })
//             }
//                 $("#"+file.id).remove();
//             $("#"+ $(item)[0].id + file.id).remove();
//             $("#hiddenInput" + $(item)[0].id + file.id).remove();

//             if ( !fileCount ) {
//                 setState( 'pedding' );
//             }
//
//             removeFile( file );
//             updateTotalProgress();

         };

         function updateTotalProgress() {
             var loaded = 0,
                 total = 0,
                 spans = $progress.children(),
                 percent;

             $.each( percentages, function( k, v ) {
                 total += v[ 0 ];
                 loaded += v[ 0 ] * v[ 1 ];
             } );

             percent = total ? loaded / total : 0;


             spans.eq( 0 ).text( Math.round( percent * 100 ) + '%' );
             spans.eq( 1 ).css( 'width', Math.round( percent * 100 ) + '%' );
             updateStatus();
         }

         //删除
    	 $('.attachment').delegate('ul li i','click',function(){
			 $(this).parent().parent('ul').remove();
			 
			 var id = $(this).parent().parent('ul').find('li:first').attr("id");
			 var file = uploader.getFile(id);
			 uploader.removeFile(file);
		 });
    });

})( jQuery );