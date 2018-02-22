#include <node_api.h>
#include <assert.h>
#include <string.h>
#include <sstream>
#include "cityhash/src/city.h"
#ifdef __SSE4_2__
#include "cityhash/src/citycrc.h"
#endif

#define DECLARE_NAPI_METHOD(name, func)                                       \
  { name, 0, func, 0, 0, 0, napi_default, 0 }

#define ASSERT_NAPI_OK(get_code_func)                                         \
  assert(get_code_func == napi_ok)

#define ASSERT_ARGS_LEN(n)                                                    \
  size_t argc = n;                                                            \
  napi_value args[n];                                                         \
  ASSERT_NAPI_OK(napi_get_cb_info(env, info, &argc, args, nullptr, nullptr)); \
  if (argc != n) {                                                            \
    napi_throw_type_error(env, nullptr, "Wrong number of arguments");         \
    return nullptr;                                                           \
  }

#define ADD_METHOD(name, func)                                                \
  do {                                                                        \
    napi_property_descriptor desc = DECLARE_NAPI_METHOD(name, func);          \
    assert(napi_define_properties(env, exports, 1, &desc) == napi_ok);        \
  } while (0)

size_t get_arg_string_len (napi_env env, napi_value arg) {
  size_t size;
  ASSERT_NAPI_OK(napi_get_value_string_utf8(env, arg, NULL, 0, &size));

  return size;
}

void get_arg_string (napi_env env, napi_value arg, char* str, size_t size) {
  ASSERT_NAPI_OK(napi_get_value_string_utf8(env, arg, str, size + 1, nullptr));

  assert(size == strlen(str));
}

napi_value Hash32(napi_env env, napi_callback_info info) {
  ASSERT_ARGS_LEN(1);

  size_t size = get_arg_string_len(env, args[0]);
  char str[size];

  get_arg_string(env, args[0], str, size);

  uint32 hash = CityHash32(str, strlen(str));
  napi_value return_result;

  ASSERT_NAPI_OK(napi_create_uint32(env, hash, &return_result));

  return return_result;
}

napi_value Hash64(napi_env env, napi_callback_info info) {
  ASSERT_ARGS_LEN(1);

  size_t size = get_arg_string_len(env, args[0]);
  char str[size];

  get_arg_string(env, args[0], str, size);

  uint64 hash = CityHash64(str, strlen(str));
  napi_value return_result;

  ASSERT_NAPI_OK(napi_create_int64(env, hash, &return_result));

  return return_result;
}

napi_value Hash128(napi_env env, napi_callback_info info) {
  ASSERT_ARGS_LEN(1);

  size_t size = get_arg_string_len(env, args[0]);
  char str[size];

  get_arg_string(env, args[0], str, size);

  uint128 hash = CityHash128(str, strlen(str));
  napi_value return_1;
  napi_value return_2;

  ASSERT_NAPI_OK(napi_create_int64(env, hash.first, &return_1));
  ASSERT_NAPI_OK(napi_create_int64(env, hash.second, &return_2));

  napi_value str_return_1;
  napi_value str_return_2;


  ASSERT_NAPI_OK(napi_coerce_to_string(env, return_1, &str_return_1));
  ASSERT_NAPI_OK(napi_coerce_to_string(env, return_2, &str_return_2));

  char store_1;
  size_t result_1;

  ASSERT_NAPI_OK(napi_get_value_string_utf8(env, str_return_1, &store_1, 16, &result_1));

  char store_2;
  size_t result_2;

  ASSERT_NAPI_OK(napi_get_value_string_utf8(env, str_return_2, &store_2, 16, &result_2));

  char* merged = new char[32];
  strcpy(merged, &store_1);
  strcat(merged, &store_2);

  napi_value result;

  ASSERT_NAPI_OK(napi_create_string_utf8(env, merged, 32, &result));

  return result;
}

napi_value Init(napi_env env, napi_value exports) {
  ADD_METHOD("hash32", Hash32);
  ADD_METHOD("hash64", Hash64);
  ADD_METHOD("hash128", Hash128);

  return exports;
}

NAPI_MODULE(cityhash, Init)
