

	var OL_Action_Root = "http://127.0.0.1:3000";
	function Req_ajax()
	{			
		var formData = new FormData($("#imagelist")[0]);
		$.ajax({
			url: OL_Action_Root+'/file_upload',
			type: 'POST',
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
			success: function(data){
				var res = data;
				if(res[0] == 'success')
				{
					document.getElementById("status").innerHTML = "<span style='color:green'>文件上传成功！<br>文件名为："+res[1].filename+"</span>";
				}
				else
				{
					document.getElementById("status").innerHTML = "<span style='color:#EF0000'>文件上传失败！<br>原因是："+res[1].msg+"</span>";
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				document.getElementById("status").innerHTML = "<span style='color:#EF0000'>连接不到服务器，请检查网络！</span>";
			}
		});
	}