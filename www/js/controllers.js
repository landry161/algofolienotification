angular.module('starter.controllers',[])

.controller('DashCtrl', function($scope,$rootScope,$cordovaLocalNotification,$ionicModal)
{
	function myModal(notification)
	{
		$scope.detail=notification;
		$ionicModal.fromTemplateUrl('templates/tab-notification.html',
		{
			scope:$scope,
			animation:'slide-in-up'
		}).then(function(modal)
		{
			$scope.modal=modal;
			$scope.modal.show();
		});
		$scope.close=function()
		{
			$scope.modal.hide();
		};
	}
	
	//Notification simple
	$scope.simpleNotification=function()
	{
		$cordovaLocalNotification.schedule(
        {
          id: 1,
          title: 'Notification',
          text: 'Bonjour je suis ta notification simple. Comment vas-tu?',
          data: {
            customProperty: 'Données additionnelles'
          }
        }).then(function(result)
		{
			console.log(result);
		});
	}
	
	//Notification multiple
	$scope.multipleNotification=function()
	{
		$cordovaLocalNotification.schedule([
        {
          id: 1,
          title: 'Notification multiple 1',
          text: 'Bonjour je suis ta notification multiple 1 Comment vas-tu?',
          data: {
            customProperty: 'Données additionnelles 1'
          }
        },
        {
          id: 2,
          title: 'Notification multiple 2',
          text: 'Bonjour je suis ta notification multiple 2 Comment vas-tu?',
          data: {
            customProperty: 'Données additionnelles 2'
          }
        },
        {
          id: 3,
          title: 'Notification multiple 3',
          text: 'Bonjour je suis ta notification multiple 3 Comment vas-tu?',
          data: {
            customProperty: 'Données additionnelles 3'
          }
        }
      ]).then(function(result){
        // ...
      });
	}
	
	$rootScope.$on('$cordovaLocalNotification:click',function(event,notification,state){
		
		myModal(notification);
	});
		
});
