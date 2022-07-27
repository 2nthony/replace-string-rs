#![deny(clippy::all)]

use napi_derive::napi;

#[napi]
pub fn replace_string(input: String, substr: String, new_substr: String) -> String {
    input.replace(&substr, &new_substr)
}
