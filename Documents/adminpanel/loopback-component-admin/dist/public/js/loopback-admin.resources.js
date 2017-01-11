// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "loopback-admin.services";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "http://apidev.headcheckhealth.ca:3001/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name loopback-admin.services
 * @module
 * @description
 *
 * The `loopback-admin.services` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("loopback-admin.services", ['ngResource']);

/**
 * @ngdoc object
 * @name loopback-admin.services.Customer
 * @header loopback-admin.services.Customer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Customer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Customer",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/customers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#prototype$__findById__accessTokens
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#prototype$__destroyById__accessTokens
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#prototype$__updateById__accessTokens
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.athletes.findById() instead.
            "prototype$__findById__athletes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/athletes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.athletes.destroyById() instead.
            "prototype$__destroyById__athletes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/athletes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.athletes.updateById() instead.
            "prototype$__updateById__athletes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/athletes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.teams.findById() instead.
            "prototype$__findById__teams": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/teams/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.teams.destroyById() instead.
            "prototype$__destroyById__teams": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/teams/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.teams.updateById() instead.
            "prototype$__updateById__teams": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/teams/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#prototype$__get__accessTokens
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Queries accessTokens of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/customers/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#prototype$__create__accessTokens
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/customers/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#prototype$__delete__accessTokens
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/customers/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#prototype$__count__accessTokens
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Counts accessTokens of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/customers/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Customer.athletes() instead.
            "prototype$__get__athletes": {
              isArray: true,
              url: urlBase + "/customers/:id/athletes",
              method: "GET",
            },

            // INTERNAL. Use Customer.athletes.create() instead.
            "prototype$__create__athletes": {
              url: urlBase + "/customers/:id/athletes",
              method: "POST",
            },

            // INTERNAL. Use Customer.athletes.destroyAll() instead.
            "prototype$__delete__athletes": {
              url: urlBase + "/customers/:id/athletes",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.athletes.count() instead.
            "prototype$__count__athletes": {
              url: urlBase + "/customers/:id/athletes/count",
              method: "GET",
            },

            // INTERNAL. Use Customer.teams() instead.
            "prototype$__get__teams": {
              isArray: true,
              url: urlBase + "/customers/:id/teams",
              method: "GET",
            },

            // INTERNAL. Use Customer.teams.create() instead.
            "prototype$__create__teams": {
              url: urlBase + "/customers/:id/teams",
              method: "POST",
            },

            // INTERNAL. Use Customer.teams.destroyAll() instead.
            "prototype$__delete__teams": {
              url: urlBase + "/customers/:id/teams",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.teams.count() instead.
            "prototype$__count__teams": {
              url: urlBase + "/customers/:id/teams/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#create
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/customers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#createMany
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/customers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#patchOrCreate
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/customers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#replaceOrCreate
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/customers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#upsertWithWhere
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/customers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#exists
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/customers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#findById
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/customers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#replaceById
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/customers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#find
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/customers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#findOne
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/customers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#updateAll
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/customers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#deleteById
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/customers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#count
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/customers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#prototype$patchAttributes
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/customers/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#createChangeStream
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/customers/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#login
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/customers/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#logout
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/customers/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#confirm
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/customers/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#resetPassword
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/customers/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#getCurrent
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/customers" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#upsert
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#updateOrCreate
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#patchOrCreateWithWhere
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#update
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#destroyById
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#removeById
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#updateAttributes
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name loopback-admin.services.Customer#getCachedCurrent
         * @methodOf loopback-admin.services.Customer
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link loopback-admin.services.Customer#login} or
         * {@link loopback-admin.services.Customer#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Customer instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name loopback-admin.services.Customer#isAuthenticated
         * @methodOf loopback-admin.services.Customer
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name loopback-admin.services.Customer#getCurrentId
         * @methodOf loopback-admin.services.Customer
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name loopback-admin.services.Customer#modelName
        * @propertyOf loopback-admin.services.Customer
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Customer`.
        */
        R.modelName = "Customer";

    /**
     * @ngdoc object
     * @name loopback-admin.services.Customer.athletes
     * @header loopback-admin.services.Customer.athletes
     * @object
     * @description
     *
     * The object `Customer.athletes` groups methods
     * manipulating `Athlete` instances related to `Customer`.
     *
     * Call {@link loopback-admin.services.Customer#athletes Customer.athletes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#athletes
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Queries athletes of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R.athletes = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::get::Customer::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.athletes#count
             * @methodOf loopback-admin.services.Customer.athletes
             *
             * @description
             *
             * Counts athletes of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.athletes.count = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::count::Customer::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.athletes#create
             * @methodOf loopback-admin.services.Customer.athletes
             *
             * @description
             *
             * Creates a new instance in athletes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R.athletes.create = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::create::Customer::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.athletes#createMany
             * @methodOf loopback-admin.services.Customer.athletes
             *
             * @description
             *
             * Creates a new instance in athletes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R.athletes.createMany = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::createMany::Customer::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.athletes#destroyAll
             * @methodOf loopback-admin.services.Customer.athletes
             *
             * @description
             *
             * Deletes all athletes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.athletes.destroyAll = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::delete::Customer::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.athletes#destroyById
             * @methodOf loopback-admin.services.Customer.athletes
             *
             * @description
             *
             * Delete a related item by id for athletes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for athletes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.athletes.destroyById = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::destroyById::Customer::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.athletes#findById
             * @methodOf loopback-admin.services.Customer.athletes
             *
             * @description
             *
             * Find a related item by id for athletes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for athletes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R.athletes.findById = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::findById::Customer::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.athletes#updateById
             * @methodOf loopback-admin.services.Customer.athletes
             *
             * @description
             *
             * Update a related item by id for athletes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for athletes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R.athletes.updateById = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::updateById::Customer::athletes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name loopback-admin.services.Customer.teams
     * @header loopback-admin.services.Customer.teams
     * @object
     * @description
     *
     * The object `Customer.teams` groups methods
     * manipulating `Team` instances related to `Customer`.
     *
     * Call {@link loopback-admin.services.Customer#teams Customer.teams()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer#teams
             * @methodOf loopback-admin.services.Customer
             *
             * @description
             *
             * Queries teams of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
        R.teams = function() {
          var TargetResource = $injector.get("Team");
          var action = TargetResource["::get::Customer::teams"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.teams#count
             * @methodOf loopback-admin.services.Customer.teams
             *
             * @description
             *
             * Counts teams of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.teams.count = function() {
          var TargetResource = $injector.get("Team");
          var action = TargetResource["::count::Customer::teams"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.teams#create
             * @methodOf loopback-admin.services.Customer.teams
             *
             * @description
             *
             * Creates a new instance in teams of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
        R.teams.create = function() {
          var TargetResource = $injector.get("Team");
          var action = TargetResource["::create::Customer::teams"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.teams#createMany
             * @methodOf loopback-admin.services.Customer.teams
             *
             * @description
             *
             * Creates a new instance in teams of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
        R.teams.createMany = function() {
          var TargetResource = $injector.get("Team");
          var action = TargetResource["::createMany::Customer::teams"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.teams#destroyAll
             * @methodOf loopback-admin.services.Customer.teams
             *
             * @description
             *
             * Deletes all teams of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.teams.destroyAll = function() {
          var TargetResource = $injector.get("Team");
          var action = TargetResource["::delete::Customer::teams"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.teams#destroyById
             * @methodOf loopback-admin.services.Customer.teams
             *
             * @description
             *
             * Delete a related item by id for teams.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for teams
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.teams.destroyById = function() {
          var TargetResource = $injector.get("Team");
          var action = TargetResource["::destroyById::Customer::teams"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.teams#findById
             * @methodOf loopback-admin.services.Customer.teams
             *
             * @description
             *
             * Find a related item by id for teams.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for teams
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
        R.teams.findById = function() {
          var TargetResource = $injector.get("Team");
          var action = TargetResource["::findById::Customer::teams"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Customer.teams#updateById
             * @methodOf loopback-admin.services.Customer.teams
             *
             * @description
             *
             * Update a related item by id for teams.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for teams
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
        R.teams.updateById = function() {
          var TargetResource = $injector.get("Team");
          var action = TargetResource["::updateById::Customer::teams"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name loopback-admin.services.Athlete
 * @header loopback-admin.services.Athlete
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Athlete` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Athlete",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/athletes/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Athlete.assessments.findById() instead.
            "prototype$__findById__assessments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/athletes/:id/assessments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Athlete.assessments.destroyById() instead.
            "prototype$__destroyById__assessments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/athletes/:id/assessments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Athlete.assessments.updateById() instead.
            "prototype$__updateById__assessments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/athletes/:id/assessments/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#prototype$__findById__concussions
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Find a related item by id for concussions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for concussions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "prototype$__findById__concussions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/athletes/:id/concussions/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#prototype$__destroyById__concussions
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Delete a related item by id for concussions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for concussions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__concussions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/athletes/:id/concussions/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#prototype$__updateById__concussions
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Update a related item by id for concussions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for concussions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "prototype$__updateById__concussions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/athletes/:id/concussions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Athlete.assessments() instead.
            "prototype$__get__assessments": {
              isArray: true,
              url: urlBase + "/athletes/:id/assessments",
              method: "GET",
            },

            // INTERNAL. Use Athlete.assessments.create() instead.
            "prototype$__create__assessments": {
              url: urlBase + "/athletes/:id/assessments",
              method: "POST",
            },

            // INTERNAL. Use Athlete.assessments.destroyAll() instead.
            "prototype$__delete__assessments": {
              url: urlBase + "/athletes/:id/assessments",
              method: "DELETE",
            },

            // INTERNAL. Use Athlete.assessments.count() instead.
            "prototype$__count__assessments": {
              url: urlBase + "/athletes/:id/assessments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#prototype$__get__concussions
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Queries concussions of Athlete.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "prototype$__get__concussions": {
              isArray: true,
              url: urlBase + "/athletes/:id/concussions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#prototype$__create__concussions
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Creates a new instance in concussions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "prototype$__create__concussions": {
              url: urlBase + "/athletes/:id/concussions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#prototype$__delete__concussions
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Deletes all concussions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__concussions": {
              url: urlBase + "/athletes/:id/concussions",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#prototype$__count__concussions
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Counts concussions of Athlete.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__concussions": {
              url: urlBase + "/athletes/:id/concussions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#create
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/athletes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#createMany
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/athletes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#patchOrCreate
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/athletes",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#replaceOrCreate
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/athletes/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#upsertWithWhere
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/athletes/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#exists
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/athletes/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#findById
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/athletes/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#replaceById
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/athletes/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#find
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/athletes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#findOne
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/athletes/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#updateAll
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/athletes/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#deleteById
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/athletes/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#count
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/athletes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#prototype$patchAttributes
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/athletes/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#createChangeStream
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/athletes/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Customer.athletes.findById() instead.
            "::findById::Customer::athletes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/athletes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.athletes.destroyById() instead.
            "::destroyById::Customer::athletes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/athletes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.athletes.updateById() instead.
            "::updateById::Customer::athletes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/athletes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.athletes() instead.
            "::get::Customer::athletes": {
              isArray: true,
              url: urlBase + "/customers/:id/athletes",
              method: "GET",
            },

            // INTERNAL. Use Customer.athletes.create() instead.
            "::create::Customer::athletes": {
              url: urlBase + "/customers/:id/athletes",
              method: "POST",
            },

            // INTERNAL. Use Customer.athletes.createMany() instead.
            "::createMany::Customer::athletes": {
              isArray: true,
              url: urlBase + "/customers/:id/athletes",
              method: "POST",
            },

            // INTERNAL. Use Customer.athletes.destroyAll() instead.
            "::delete::Customer::athletes": {
              url: urlBase + "/customers/:id/athletes",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.athletes.count() instead.
            "::count::Customer::athletes": {
              url: urlBase + "/customers/:id/athletes/count",
              method: "GET",
            },

            // INTERNAL. Use Team.athletes.findById() instead.
            "::findById::Team::athletes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/teams/:id/athletes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Team.athletes.destroyById() instead.
            "::destroyById::Team::athletes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/teams/:id/athletes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Team.athletes.updateById() instead.
            "::updateById::Team::athletes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/teams/:id/athletes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Team.athletes() instead.
            "::get::Team::athletes": {
              isArray: true,
              url: urlBase + "/teams/:id/athletes",
              method: "GET",
            },

            // INTERNAL. Use Team.athletes.create() instead.
            "::create::Team::athletes": {
              url: urlBase + "/teams/:id/athletes",
              method: "POST",
            },

            // INTERNAL. Use Team.athletes.createMany() instead.
            "::createMany::Team::athletes": {
              isArray: true,
              url: urlBase + "/teams/:id/athletes",
              method: "POST",
            },

            // INTERNAL. Use Team.athletes.destroyAll() instead.
            "::delete::Team::athletes": {
              url: urlBase + "/teams/:id/athletes",
              method: "DELETE",
            },

            // INTERNAL. Use Team.athletes.count() instead.
            "::count::Team::athletes": {
              url: urlBase + "/teams/:id/athletes/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#upsert
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#updateOrCreate
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#patchOrCreateWithWhere
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#update
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#destroyById
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#removeById
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#updateAttributes
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name loopback-admin.services.Athlete#modelName
        * @propertyOf loopback-admin.services.Athlete
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Athlete`.
        */
        R.modelName = "Athlete";

    /**
     * @ngdoc object
     * @name loopback-admin.services.Athlete.assessments
     * @header loopback-admin.services.Athlete.assessments
     * @object
     * @description
     *
     * The object `Athlete.assessments` groups methods
     * manipulating `Assessment` instances related to `Athlete`.
     *
     * Call {@link loopback-admin.services.Athlete#assessments Athlete.assessments()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete#assessments
             * @methodOf loopback-admin.services.Athlete
             *
             * @description
             *
             * Queries assessments of Athlete.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
        R.assessments = function() {
          var TargetResource = $injector.get("Assessment");
          var action = TargetResource["::get::Athlete::assessments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete.assessments#count
             * @methodOf loopback-admin.services.Athlete.assessments
             *
             * @description
             *
             * Counts assessments of Athlete.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.assessments.count = function() {
          var TargetResource = $injector.get("Assessment");
          var action = TargetResource["::count::Athlete::assessments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete.assessments#create
             * @methodOf loopback-admin.services.Athlete.assessments
             *
             * @description
             *
             * Creates a new instance in assessments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
        R.assessments.create = function() {
          var TargetResource = $injector.get("Assessment");
          var action = TargetResource["::create::Athlete::assessments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete.assessments#createMany
             * @methodOf loopback-admin.services.Athlete.assessments
             *
             * @description
             *
             * Creates a new instance in assessments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
        R.assessments.createMany = function() {
          var TargetResource = $injector.get("Assessment");
          var action = TargetResource["::createMany::Athlete::assessments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete.assessments#destroyAll
             * @methodOf loopback-admin.services.Athlete.assessments
             *
             * @description
             *
             * Deletes all assessments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.assessments.destroyAll = function() {
          var TargetResource = $injector.get("Assessment");
          var action = TargetResource["::delete::Athlete::assessments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete.assessments#destroyById
             * @methodOf loopback-admin.services.Athlete.assessments
             *
             * @description
             *
             * Delete a related item by id for assessments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for assessments
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.assessments.destroyById = function() {
          var TargetResource = $injector.get("Assessment");
          var action = TargetResource["::destroyById::Athlete::assessments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete.assessments#findById
             * @methodOf loopback-admin.services.Athlete.assessments
             *
             * @description
             *
             * Find a related item by id for assessments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for assessments
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
        R.assessments.findById = function() {
          var TargetResource = $injector.get("Assessment");
          var action = TargetResource["::findById::Athlete::assessments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Athlete.assessments#updateById
             * @methodOf loopback-admin.services.Athlete.assessments
             *
             * @description
             *
             * Update a related item by id for assessments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for assessments
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
        R.assessments.updateById = function() {
          var TargetResource = $injector.get("Assessment");
          var action = TargetResource["::updateById::Athlete::assessments"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name loopback-admin.services.Team
 * @header loopback-admin.services.Team
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Team` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Team",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/teams/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Team.athletes.findById() instead.
            "prototype$__findById__athletes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/teams/:id/athletes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Team.athletes.destroyById() instead.
            "prototype$__destroyById__athletes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/teams/:id/athletes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Team.athletes.updateById() instead.
            "prototype$__updateById__athletes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/teams/:id/athletes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Team.athletes() instead.
            "prototype$__get__athletes": {
              isArray: true,
              url: urlBase + "/teams/:id/athletes",
              method: "GET",
            },

            // INTERNAL. Use Team.athletes.create() instead.
            "prototype$__create__athletes": {
              url: urlBase + "/teams/:id/athletes",
              method: "POST",
            },

            // INTERNAL. Use Team.athletes.destroyAll() instead.
            "prototype$__delete__athletes": {
              url: urlBase + "/teams/:id/athletes",
              method: "DELETE",
            },

            // INTERNAL. Use Team.athletes.count() instead.
            "prototype$__count__athletes": {
              url: urlBase + "/teams/:id/athletes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#create
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/teams",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#createMany
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/teams",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#patchOrCreate
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/teams",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#replaceOrCreate
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/teams/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#upsertWithWhere
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/teams/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#exists
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/teams/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#findById
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/teams/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#replaceById
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/teams/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#find
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/teams",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#findOne
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/teams/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#updateAll
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/teams/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#deleteById
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/teams/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#count
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/teams/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#prototype$patchAttributes
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/teams/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#createChangeStream
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/teams/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Customer.teams.findById() instead.
            "::findById::Customer::teams": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/teams/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.teams.destroyById() instead.
            "::destroyById::Customer::teams": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/teams/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.teams.updateById() instead.
            "::updateById::Customer::teams": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/teams/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.teams() instead.
            "::get::Customer::teams": {
              isArray: true,
              url: urlBase + "/customers/:id/teams",
              method: "GET",
            },

            // INTERNAL. Use Customer.teams.create() instead.
            "::create::Customer::teams": {
              url: urlBase + "/customers/:id/teams",
              method: "POST",
            },

            // INTERNAL. Use Customer.teams.createMany() instead.
            "::createMany::Customer::teams": {
              isArray: true,
              url: urlBase + "/customers/:id/teams",
              method: "POST",
            },

            // INTERNAL. Use Customer.teams.destroyAll() instead.
            "::delete::Customer::teams": {
              url: urlBase + "/customers/:id/teams",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.teams.count() instead.
            "::count::Customer::teams": {
              url: urlBase + "/customers/:id/teams/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#upsert
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#updateOrCreate
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#patchOrCreateWithWhere
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#update
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#destroyById
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#removeById
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#updateAttributes
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Team` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name loopback-admin.services.Team#modelName
        * @propertyOf loopback-admin.services.Team
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Team`.
        */
        R.modelName = "Team";

    /**
     * @ngdoc object
     * @name loopback-admin.services.Team.athletes
     * @header loopback-admin.services.Team.athletes
     * @object
     * @description
     *
     * The object `Team.athletes` groups methods
     * manipulating `Athlete` instances related to `Team`.
     *
     * Call {@link loopback-admin.services.Team#athletes Team.athletes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name loopback-admin.services.Team#athletes
             * @methodOf loopback-admin.services.Team
             *
             * @description
             *
             * Queries athletes of Team.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R.athletes = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::get::Team::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team.athletes#count
             * @methodOf loopback-admin.services.Team.athletes
             *
             * @description
             *
             * Counts athletes of Team.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.athletes.count = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::count::Team::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team.athletes#create
             * @methodOf loopback-admin.services.Team.athletes
             *
             * @description
             *
             * Creates a new instance in athletes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R.athletes.create = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::create::Team::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team.athletes#createMany
             * @methodOf loopback-admin.services.Team.athletes
             *
             * @description
             *
             * Creates a new instance in athletes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R.athletes.createMany = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::createMany::Team::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team.athletes#destroyAll
             * @methodOf loopback-admin.services.Team.athletes
             *
             * @description
             *
             * Deletes all athletes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.athletes.destroyAll = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::delete::Team::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team.athletes#destroyById
             * @methodOf loopback-admin.services.Team.athletes
             *
             * @description
             *
             * Delete a related item by id for athletes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for athletes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.athletes.destroyById = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::destroyById::Team::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team.athletes#findById
             * @methodOf loopback-admin.services.Team.athletes
             *
             * @description
             *
             * Find a related item by id for athletes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for athletes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R.athletes.findById = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::findById::Team::athletes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name loopback-admin.services.Team.athletes#updateById
             * @methodOf loopback-admin.services.Team.athletes
             *
             * @description
             *
             * Update a related item by id for athletes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for athletes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Athlete` object.)
             * </em>
             */
        R.athletes.updateById = function() {
          var TargetResource = $injector.get("Athlete");
          var action = TargetResource["::updateById::Team::athletes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name loopback-admin.services.Assessment
 * @header loopback-admin.services.Assessment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Assessment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Assessment",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/assessments/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__get__BalanceTest
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Fetches hasOne relation BalanceTest.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__get__BalanceTest": {
              url: urlBase + "/assessments/:id/BalanceTest",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__create__BalanceTest
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Creates a new instance in BalanceTest of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__create__BalanceTest": {
              url: urlBase + "/assessments/:id/BalanceTest",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__update__BalanceTest
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Update BalanceTest of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__update__BalanceTest": {
              url: urlBase + "/assessments/:id/BalanceTest",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__destroy__BalanceTest
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Deletes BalanceTest of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroy__BalanceTest": {
              url: urlBase + "/assessments/:id/BalanceTest",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__get__CognitiveAssessment
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Fetches hasOne relation CognitiveAssessment.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__get__CognitiveAssessment": {
              url: urlBase + "/assessments/:id/CognitiveAssessment",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__create__CognitiveAssessment
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Creates a new instance in CognitiveAssessment of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__create__CognitiveAssessment": {
              url: urlBase + "/assessments/:id/CognitiveAssessment",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__update__CognitiveAssessment
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Update CognitiveAssessment of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__update__CognitiveAssessment": {
              url: urlBase + "/assessments/:id/CognitiveAssessment",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__destroy__CognitiveAssessment
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Deletes CognitiveAssessment of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroy__CognitiveAssessment": {
              url: urlBase + "/assessments/:id/CognitiveAssessment",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__get__CoordinationExam
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Fetches hasOne relation CoordinationExam.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__get__CoordinationExam": {
              url: urlBase + "/assessments/:id/CoordinationExam",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__create__CoordinationExam
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Creates a new instance in CoordinationExam of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__create__CoordinationExam": {
              url: urlBase + "/assessments/:id/CoordinationExam",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__update__CoordinationExam
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Update CoordinationExam of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__update__CoordinationExam": {
              url: urlBase + "/assessments/:id/CoordinationExam",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__destroy__CoordinationExam
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Deletes CoordinationExam of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroy__CoordinationExam": {
              url: urlBase + "/assessments/:id/CoordinationExam",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__get__GlasgowComaScale
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Fetches hasOne relation GlasgowComaScale.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__get__GlasgowComaScale": {
              url: urlBase + "/assessments/:id/GlasgowComaScale",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__create__GlasgowComaScale
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Creates a new instance in GlasgowComaScale of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__create__GlasgowComaScale": {
              url: urlBase + "/assessments/:id/GlasgowComaScale",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__update__GlasgowComaScale
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Update GlasgowComaScale of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__update__GlasgowComaScale": {
              url: urlBase + "/assessments/:id/GlasgowComaScale",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__destroy__GlasgowComaScale
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Deletes GlasgowComaScale of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroy__GlasgowComaScale": {
              url: urlBase + "/assessments/:id/GlasgowComaScale",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__get__InitialAssessment
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Fetches hasOne relation InitialAssessment.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__get__InitialAssessment": {
              url: urlBase + "/assessments/:id/InitialAssessment",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__create__InitialAssessment
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Creates a new instance in InitialAssessment of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__create__InitialAssessment": {
              url: urlBase + "/assessments/:id/InitialAssessment",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__update__InitialAssessment
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Update InitialAssessment of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__update__InitialAssessment": {
              url: urlBase + "/assessments/:id/InitialAssessment",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__destroy__InitialAssessment
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Deletes InitialAssessment of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroy__InitialAssessment": {
              url: urlBase + "/assessments/:id/InitialAssessment",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__get__MaddocksScore
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Fetches hasOne relation MaddocksScore.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__get__MaddocksScore": {
              url: urlBase + "/assessments/:id/MaddocksScore",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__create__MaddocksScore
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Creates a new instance in MaddocksScore of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__create__MaddocksScore": {
              url: urlBase + "/assessments/:id/MaddocksScore",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__update__MaddocksScore
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Update MaddocksScore of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__update__MaddocksScore": {
              url: urlBase + "/assessments/:id/MaddocksScore",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__destroy__MaddocksScore
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Deletes MaddocksScore of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroy__MaddocksScore": {
              url: urlBase + "/assessments/:id/MaddocksScore",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__get__NeckExamination
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Fetches hasOne relation NeckExamination.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__get__NeckExamination": {
              url: urlBase + "/assessments/:id/NeckExamination",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__create__NeckExamination
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Creates a new instance in NeckExamination of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__create__NeckExamination": {
              url: urlBase + "/assessments/:id/NeckExamination",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__update__NeckExamination
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Update NeckExamination of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__update__NeckExamination": {
              url: urlBase + "/assessments/:id/NeckExamination",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__destroy__NeckExamination
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Deletes NeckExamination of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroy__NeckExamination": {
              url: urlBase + "/assessments/:id/NeckExamination",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__get__SymptomEvaluation
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Fetches hasOne relation SymptomEvaluation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__get__SymptomEvaluation": {
              url: urlBase + "/assessments/:id/SymptomEvaluation",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__create__SymptomEvaluation
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Creates a new instance in SymptomEvaluation of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__create__SymptomEvaluation": {
              url: urlBase + "/assessments/:id/SymptomEvaluation",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__update__SymptomEvaluation
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Update SymptomEvaluation of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$__update__SymptomEvaluation": {
              url: urlBase + "/assessments/:id/SymptomEvaluation",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$__destroy__SymptomEvaluation
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Deletes SymptomEvaluation of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroy__SymptomEvaluation": {
              url: urlBase + "/assessments/:id/SymptomEvaluation",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#create
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/assessments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#createMany
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/assessments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#patchOrCreate
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/assessments",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#replaceOrCreate
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/assessments/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#upsertWithWhere
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/assessments/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#exists
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/assessments/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#findById
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/assessments/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#replaceById
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/assessments/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#find
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/assessments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#findOne
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/assessments/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#updateAll
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/assessments/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#deleteById
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/assessments/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#count
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/assessments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#prototype$patchAttributes
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/assessments/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#createChangeStream
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/assessments/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Athlete.assessments.findById() instead.
            "::findById::Athlete::assessments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/athletes/:id/assessments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Athlete.assessments.destroyById() instead.
            "::destroyById::Athlete::assessments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/athletes/:id/assessments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Athlete.assessments.updateById() instead.
            "::updateById::Athlete::assessments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/athletes/:id/assessments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Athlete.assessments() instead.
            "::get::Athlete::assessments": {
              isArray: true,
              url: urlBase + "/athletes/:id/assessments",
              method: "GET",
            },

            // INTERNAL. Use Athlete.assessments.create() instead.
            "::create::Athlete::assessments": {
              url: urlBase + "/athletes/:id/assessments",
              method: "POST",
            },

            // INTERNAL. Use Athlete.assessments.createMany() instead.
            "::createMany::Athlete::assessments": {
              isArray: true,
              url: urlBase + "/athletes/:id/assessments",
              method: "POST",
            },

            // INTERNAL. Use Athlete.assessments.destroyAll() instead.
            "::delete::Athlete::assessments": {
              url: urlBase + "/athletes/:id/assessments",
              method: "DELETE",
            },

            // INTERNAL. Use Athlete.assessments.count() instead.
            "::count::Athlete::assessments": {
              url: urlBase + "/athletes/:id/assessments/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#upsert
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#updateOrCreate
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#patchOrCreateWithWhere
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#update
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#destroyById
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#removeById
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name loopback-admin.services.Assessment#updateAttributes
             * @methodOf loopback-admin.services.Assessment
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Assessment` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name loopback-admin.services.Assessment#modelName
        * @propertyOf loopback-admin.services.Assessment
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Assessment`.
        */
        R.modelName = "Assessment";



        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name loopback-admin.services.LoopBackResourceProvider
   * @header loopback-admin.services.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name loopback-admin.services.LoopBackResourceProvider#setAuthHeader
     * @methodOf loopback-admin.services.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name loopback-admin.services.LoopBackResourceProvider#getAuthHeader
     * @methodOf loopback-admin.services.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name loopback-admin.services.LoopBackResourceProvider#setUrlBase
     * @methodOf loopback-admin.services.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name loopback-admin.services.LoopBackResourceProvider#getUrlBase
     * @methodOf loopback-admin.services.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
