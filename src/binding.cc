#include <node_api.h>
#include <assert.h>
#include "cityhash/city.h"
#ifdef __SSE4_2__
#include "cityhash/citycrc.h"
#endif

#define DECLARE_NAPI_METHOD(name, func)                          \
  { name, 0, func, 0, 0, 0, napi_default, 0 }

napi_value SayHello(napi_env env, napi_callback_info info) {
  napi_value world;
  napi_status status = napi_create_string_utf8(env, "world", 5, &world);
  assert(status == napi_ok);

  return world;
}

napi_value Init(napi_env env, napi_value exports) {
  napi_property_descriptor descriptor = DECLARE_NAPI_METHOD("hello", SayHello);
  napi_status status = napi_define_properties(env, exports, 1, &descriptor);
  assert(status == napi_ok);

  return exports;
}

NAPI_MODULE(cityhash, Init)
