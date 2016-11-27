export function DominoCtrl($scope){
	let dominoSection = $('.domino-section'),
		domino =     dominoSection.find('.js-domino'),
		next =       dominoSection.find('.js-next'),
		prev =       dominoSection.find('.js-prev'),
		elem =       dominoSection.find('.js-elem'),
		elemTop =    dominoSection.find('.domino__elem--top'),
		elemBottom = dominoSection.find('.domino__elem--bottom'),
		rotation = 0;
	
	prev.on('click', function(){
		rotation = rotation - 90;
		domino.css('transform','rotate('+rotation+'deg)');
	});
	
	next.on('click', function(){
		rotation += 90;
		domino.css('transform','rotate('+rotation+'deg)');
	});
	
	
	function changeSize(value){
		domino.find('.domino__elem').outerWidth(value).outerHeight(value);
	}
	function changeSpeed(value){
		domino.css('transition', 'transform '+ (value/100)+'s' +' ease-in');
	}

	//slider 
	$(function () {
		let slider = $("#slider").slider({
			range: "min",
			value: 100,
			min: 0,
			max: 100,
			step: 1,
			slide: function(event, ui) {
				$(ui.handle).find('.tooltip').text(ui.value);
				changeSize(ui.value);
			},
			create: function(event, ui) {
				let tooltip = $('<div class="tooltip" />');
				$(event.target).find('.ui-slider-handle').append(tooltip);
			},
			change: function(event, ui) {
				$('#hidden').attr('value', ui.value);
			}
		});
	});
	
	$(function () {
		let slider = $("#slider_bottom").slider({
			range: "min",
			value: 100,
			min: 0,
			max: 100,
			step: 1,
			slide: function(event, ui) {
				$(ui.handle).find('.tooltip').text(ui.value);
				changeSpeed(ui.value);
			},
			create: function(event, ui) {
				let tooltip = $('<div class="tooltip" />');
				$(event.target).find('.ui-slider-handle').append(tooltip);
			},
			change: function(event, ui) {
				$('#hidden').attr('value', ui.value);
			}
		});
	});

	$scope.createNew = function(){
		$scope.assignTopElemMode = true;
	};
	
	$scope.assignTopElem = function (context){
		elemTop.removeClass();
		elemTop.addClass('domino__elem--'+ (context.index() + 1)).addClass('domino__elem');
		$scope.assignTopElemMode = false;
		$scope.assignBottomElemMode = true;
		$scope.$apply();
	};
	
	$scope.assignBottomElem = function(context){
		elemBottom.removeClass();
		elemBottom.addClass('domino__elem--'+ (context.index() + 1)).addClass('domino__elem');
		$scope.assignBottomElemMode = false;
		$scope.$apply();
	}
	
	elem.on('click', function(){
		if ( $scope.assignTopElemMode ) {
			$scope.assignTopElem($(this));
		} else {
			$scope.assignBottomElem($(this));
		}
	});
}