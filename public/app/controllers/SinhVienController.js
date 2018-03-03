app.controller('SinhVienController', function($scope, $http, API) {
	$http.get(API + 'list').success(function (response) {
		$scope.sinhviens = response;
		// console.log(response);
	});

	$scope.modal = function(state, id) {
		$scope.state = state;
		switch(state) {
			case "add" : 
				$scope.frmTitle = "Thêm sinh viên";
				break;
			case "edit" : 
				$scope.frmTitle = "Sửa sinh viên";
				$scope.id = id;
				$http.get(API + 'edit/' + id).success(function (response) {
					$scope.sinhvien = response;
				});
				break;
			default : 
				$scope.frmTitle = "Mặc định";
				break;
		}
		$("#myModal").modal('show');
	}

	$scope.save = function(state, id) {
		//console.log(state);
		if(state == "add") {
			var url = API + 'add';
			var data = $.param($scope.sinhvien);
			$http({
				method : 'POST',
				url : url,
				data : data,
				headers : {'Content-Type':'application/x-www-form-urlencoded'}
			})
			.success( function(response) {
				console.log(response);
				location.reload();
			})
			.error( function(response) {
				console.log(response);
				alert('Lỗi');
			});
		}

		if(state == "edit") {
			var url = API + 'edit/' + id;
			var data = $.param($scope.sinhvien);
			$http({
				method : 'POST',
				url : url,
				data : data,
				headers : {'Content-Type':'application/x-www-form-urlencoded'}
			})
			.success( function(response) {
				console.log(response);
				location.reload();
			})
			.error( function(response) {
				console.log(response);
				alert('Lỗi');
			});
		}		
	}

	$scope.confirmDelete = function(id) {
		var isConfirmDelete = confirm('Bạn có chắc chắn muốn xóa?');
		if(isConfirmDelete) {
			$http.get(API + 'delete/' + id)
			.success(function(response) {
				console.log(response);
				location.reload();
			}).error(function(response) {
				console.log(response);
				alert('Lỗi');
			});
		} else {
			return false;
		}
	}

});