import angular from 'angular';
import template from './${name}.html';
import controller from './${name}.controller';
//import service from './${name}.service';

let component = {template, controller};

/**
 * ${name}
 * @author ${user}
 */
export default angular
        .module('${name}', [])
//        .service('${name}Service', service)
        .component('${name}Set', component)
        .name;