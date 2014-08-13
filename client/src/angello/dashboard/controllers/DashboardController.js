angular.module('Angello.Dashboard')
    .controller('DashboardCtrl',
    function (StoriesService, STORY_STATUSES, STORY_TYPES) {
        var dashboard = this;
        dashboard.types = STORY_TYPES;
        dashboard.statuses = STORY_STATUSES;
        dashboard.stories = [];

        StoriesService.all()
            .then(function (stories) {
                var arr = [];
                for (var key in stories.data) {
                    arr.push(stories.data[key]);
                }
                dashboard.stories = arr;
            });
    });