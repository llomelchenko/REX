'use strict';

/**
 * @ngdoc directive
 *
 * @name searchInput
 *
 * @description
 * directive for rex
 */
(function () {

  angular
    .module('rex')
    .directive('searchInput', searchInput);

  function searchInput(util, drug, $state) {
    return {
      restrict   : 'EA',
      templateUrl: 'app/components/search-input/search-input.directive.html',
      scope      : {
        searchResults: '=',
        noResults    : '='
      },
      link       : link
    };

    function link(scope) {
      scope.search     = {};
      scope.showLoader = false;
      scope.noResults  = false;

      scope.searchByName = function () {

        scope.noResults     = false;
        scope.searchResults = [];
        $state.go('main.search.searchResults');
        scope.showLoader    = true;


        var query = util.createSingleSearchQry(scope.search.searchTerms);

        drug.labelsSearch({search: query, limit: 100}).then(function (res) {
          scope.searchResults = res.data;

          if (scope.searchResults.length === 0) {
            scope.noResults = true;
          }

          scope.showLoader = false;

        }, function () {

          scope.noResults  = true;
          scope.showLoader = false;
        });
      };
    }
  }

})();


