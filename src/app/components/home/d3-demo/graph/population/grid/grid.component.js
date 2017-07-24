import template from './grid.html';

export const GridComponent = {
    template,
    bindings: {parent: '<'},
    bindToController: true,
    controller: class GridComponent {
        constructor($scope, uiGridConstants, $timeout) {
            this.uiGridConstants = uiGridConstants;
            this.$scope = $scope;
            this.$timeout = $timeout;
        }
        $onInit() {

            this.gridData = this.parent.getCountries();

            this.defaultCountries = [
                44,
                240,
                177
            ];

            this.gridApi = null;

            this.gridOptions = {
                enableFiltering: true,
                enableRowSelection: true,
                multiSelect: true,
                enableSelectAll: true,
                enableSorting: false,
                selectionRowHeaderWith: 35,
                data: this.gridData,
                onRegisterApi: (gridApi) => (this.$scope.gridApi = gridApi),
                columnDefs: [
                    {field: 'id', width: 40, maxWidth: 100,
                        sort: {
                            direction: this.uiGridConstants.ASC,
                            priority: 1
                        },
                        sortingAlgorithm: (a, b, rowA, rowB) => {
                            if (this.defaultCountries.indexOf(rowA.entity.id) > -1) {
                                return -1;
                            }
                            return 1;
                        }
                    },
                    {field: 'country', sort: {priority: 0},
                        cellTemplate: `<div class="ui-grid-cell-contents" >
                                            <span class="glyphicon glyphicon-flag" ng-style="{'color':row.entity.color}"></span>
                                            {{grid.getCellValue(row, col)}}
                                        </div>`
                    }
                ]
            };

            this.$scope.$watch('gridApi', (newValue) => this.initGrid(newValue));

        }
        initGrid(newValue) {
            this.$timeout(() => {
                if (newValue === undefined)
                    return;

                this.gridApi = newValue;

                angular.forEach(this.defaultCountries, (countryId) => {
                    let country = this.parent.getCountryById(countryId);
                    country && this.gridApi.selection.selectRow(country);
                });

                this.parent.$scope.gridComponent = this;

                this.gridApi.selection.on.rowSelectionChanged(this.$scope, (row) => this.parent.$scope.$emit('grid.rowSelectionChanged', {row}));
            });
        }
    }
};