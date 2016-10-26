angular
  .module("sitterApp")
  .factory("Post", postFactory);

postFactory.$inject = ["API", "$resource"];
function postFactory(API, $resource){
  return $resource(`${API}/posts/:id`, { id: "@_id"}, {
    'query':    { method: "GET", isArray: true },
    'update':   { method: "PUT" }
  });
}
